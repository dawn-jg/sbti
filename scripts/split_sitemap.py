import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

# Post-build script: split out/sitemap.xml into 4 files at out/ root
# Run AFTER `npx next build`, BEFORE deploy. Generates:
#   out/sitemap-tests.xml, out/sitemap-results.xml, out/sitemap-articles.xml, out/sitemap-static-pages.xml
# Plus out/sitemap-index.xml pointing to all four.

src = r'D:\sbtibee\out\sitemap.xml'
if not os.path.exists(src):
    print('FAIL: out/sitemap.xml not found - run build first')
    sys.exit(1)

c = open(src, encoding='utf-8').read()
urls = re.findall(r'<loc>(.*?)</loc>', c)
print('total URLs:', len(urls))

def write_sitemap(name, url_list):
    if not url_list:
        return 0
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for u in url_list:
        xml += f'  <url><loc>{u}</loc></url>\n'
    xml += '</urlset>\n'
    with open(os.path.join(r'D:\sbtibee\out', name), 'w', encoding='utf-8') as f:
        f.write(xml)
    return len(url_list)

tests = [u for u in urls if u.count('/') == 2 and not any(x in u for x in ['/blog', '/result', '/types', '/methodology', '/about', '/contact', '/privacy', '/terms'])]
# better: tests = test entry pages
tests = [u for u in urls if re.match(r'https://sbtibee\.com/(mbti|sbti|enneagram|pet-sbti|love-language|attachment|inner-child|dark-triad|aura|ai-vs|types)/?$', u) or re.match(r'https://sbtibee\.com/mbti/test', u) or u == 'https://sbtibee.com/sbti/test']

results = [u for u in urls if '/result/' in u or ('/types/' in u and '/types/mbti' not in u and '/types/sbti' not in u and '/types/enneagram' not in u)]
# fix: types/ pages are result-detail pages (mbti/types/INTJ etc), but types/mbti is gallery -> keep gallery in tests
results = [u for u in urls if '/result/' in u or re.match(r'https://sbtibee\.com/mbti/types/[A-Z]+$', u)]

articles = [u for u in urls if '/blog' in u]
static = [u for u in urls if u not in tests and u not in results and u not in articles]

print('tests:', len(tests))
print('results:', len(results))
print('articles:', len(articles))
print('static:', len(static))

write_sitemap('sitemap-tests.xml', tests)
write_sitemap('sitemap-results.xml', results)
write_sitemap('sitemap-articles.xml', articles)
write_sitemap('sitemap-static-pages.xml', static)

# index
idx = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for n in ['sitemap-tests.xml', 'sitemap-results.xml', 'sitemap-articles.xml', 'sitemap-static-pages.xml']:
    idx += f'  <sitemap><loc>https://sbtibee.com/{n}</loc></sitemap>\n'
idx += '</sitemapindex>\n'
with open(r'D:\sbtibee\out\sitemap-index.xml', 'w', encoding='utf-8') as f:
    f.write(idx)
print('OK: sitemap-index.xml + 4 split files written to out/')

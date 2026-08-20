"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

// Lowercase alias route: /mbti/intj -> /mbti/types/INTJ
export default function MBTIAliasPage() {
  const { code } = useParams<{ code: string }>();
  useEffect(() => {
    const upper = String(code).toUpperCase();
    window.location.replace(`/mbti/types/${upper}`);
  }, [code]);
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-sm text-gray-400">
      Redirecting to type page...
    </div>
  );
}

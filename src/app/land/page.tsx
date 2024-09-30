"use client";

import useAuth from "@/hooks/auth";

export default function LangPage() {
  const { checkAuth } = useAuth();
  checkAuth();
  return <div className="p-4 text-center">LangdingPage</div>;
}

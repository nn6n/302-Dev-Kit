'use client'
import useAuth from "@/hooks/auth";


type Props = {};

export default function LangPage() {
  const { checkAuth } = useAuth();
  checkAuth();
  return <div className="p-4 text-center">LangPage</div>;
}

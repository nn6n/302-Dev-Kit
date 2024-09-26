import { requireAuth } from "@/lib/utils";

type Props = {};

export default async function LangPage() {
  await requireAuth();
  return <div className="p-4 text-center">LangPage</div>;
}

import { Button } from "@/components/ui/button";
import Locale from "@/locales";

export async function generateMetadata() {
  return {
    title: Locale.Home.Title,
  }
}

export default function HomePage() {
  return (
    <div className="flex h-[2500px] flex-col items-center">

      <Button variant={"default"}>Button</Button>
      <div>{Locale.Title}</div>

    </div>
  );
}

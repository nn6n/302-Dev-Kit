import Link from "next/link";

import { HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {};

function AppMenu({}: Props) {
  return (
    <div>
      <Link href={"/"}>
        <Button size="icon" variant={"ghost"}>
          <HomeIcon className="size-5" />
        </Button>
      </Link>
    </div>
  );
}

export default AppMenu;

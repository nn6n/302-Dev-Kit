"use client";

import { DotLoader } from "@/components/common/loader-renderer";
import { Button } from "@/components/ui/button";
import { useInfo } from "@/hooks/global";
import "@/styles/info.css";
import { InfoIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Locale from "@/locales";

export function InfoModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="icon" variant={"ghost"}>
          <InfoIcon className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] ">
        <DialogHeader>
          <DialogTitle>
            {Locale.About.Title}
          </DialogTitle>
          <DialogDescription className="">
            {Locale.About.Desc}
          </DialogDescription>
        </DialogHeader>
        <InfoContent />
      </DialogContent>
    </Dialog>
  );
}

export function InfoContent() {
  const { data, isLoading, error } = useInfo();
  if ((!error && !data) || isLoading) return <DotLoader />

  if (data?.data) {
    return <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.data.info, }}></div>
  }
}

"use client";

import { useEffect } from "react";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/global/use-toast";
import { emitter } from "@/lib/mitt";

import HostRenderer from "../../common/host-renderer";

const AppToaster = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handleSuccess = (msg: string) => {
      toast({
        title: "Succcuss!",
        description: <HostRenderer content={msg} />,
      });
    };

    const handleError = (msg: string) => {
      toast({
        variant: "destructive",
        title: "Error!",
        description: <HostRenderer content={msg} />,
      });
    };

    emitter.on("ToastSuccess", handleSuccess);
    emitter.on("ToastError", handleError);

    // Cleanup function to remove the listener
    return () => {
      emitter.off("ToastSuccess", handleSuccess);
      emitter.off("ToastError", handleError);
    };
  }, [toast]);

  return <Toaster />;
};

export default AppToaster;

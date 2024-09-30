"use client";

import { useEffect } from "react";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/global/use-toast";
import { emitter } from "@/lib/mitt";

const AppToaster = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handleError = (errorCode: number) => {
      console.error("Caught an error: ", errorCode);
      toast({
        title: `Error code: ${errorCode}`,
        description: "Error desc",
      });
    };

    emitter.on("ToastError", handleError);

    // Cleanup function to remove the listener
    return () => {
      emitter.off("ToastError", handleError);
    };
  }, [toast]);

  return (<Toaster />)
};

export default AppToaster;


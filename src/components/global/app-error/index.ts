"use client";

import { useEffect } from "react";

import { useToast } from "@/hooks/global/use-toast";
import { emitter } from "@/lib/mitt";

const AppError = () => {
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
  }, []);

  return null; // This component does not render anything to the UI
};

export default AppError;

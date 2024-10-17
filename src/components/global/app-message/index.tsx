"use client";

import { useEffect } from "react";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/global/use-toast";
import { emitter } from "@/lib/mitt";

import HostRenderer from "../../common/host-renderer";

const AppMessage = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Handler for success messages
    const handleToastSuccess = (msg: string) => {
      toast({
        title: "Success!",
        // Renders the message using the HostRenderer component
        description: <HostRenderer content={msg} />,
      });
    };

    // Handler for error messages
    const handleToastError = (msg: string) => {
      toast({
        variant: "destructive",
        title: "Error!",
        // Renders the message using the HostRenderer component
        description: <HostRenderer content={msg} />,
      });
    };

    // Todo: Modal

    // Listen for success and error events
    emitter.on("ToastSuccess", handleToastSuccess);
    emitter.on("ToastError", handleToastError);

    // Cleanup listeners on component unmount
    return () => {
      emitter.off("ToastSuccess", handleToastSuccess);
      emitter.off("ToastError", handleToastError);
    };
  }, [toast]); // Dependency array ensures the effect is set up again if toast changes

  return <Toaster />; // Render the Toaster component
};

export default AppMessage;

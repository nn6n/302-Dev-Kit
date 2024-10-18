import { LocaleType } from "./index";

const en: LocaleType = {
  Symbol: "en",
  Title: "English",
  Desc: "",
  Theme: {
    Light: "Light",
    Dark: "Dark",
    System: "System",
  },
  System: {
    Title: "System",
    Desc: "",
    Cancel: "Cancel",
    Confirm: "Confirm",
    Delete: "Delete",
    clean: "Clear",
    Back: "Back",
    Success: "Operation Successful!",
    Faild: "Operation Failed!",
    Notify: "System Notification!",
    Error: "System Error!",
    Download: "Download",
  },
  Error: {
    Title: "Error",
    Desc: "",
    UnknowError:
      "Unknown error, please try again later or contact customer service!",
    NetworkError:
      "Network error, please try again later or contact customer service!",
    CodeInvalid: "Verification code error, for more information visit 302.AI",
    ToolBin: "The tool has been disabled, for more information visit 302.AI",
    ToolDel: "The tool has been deleted, for more information visit 302.AI",
  },
  Navigator: {
    Title: "Welcome",
    Desc: "Create your own AI tool",
    Domain: "302.AI",
    Auth: "Authentication Page",
    Land: "Template Page",
  },
  Footer: {
    Title: "Powered By",
    Desc: "Content generated by AI, for reference only",
  },
  About: {
    Title: "Description",
    Desc: "Preview details of this AI tool",
  },
  History: {
    Title: "History",
    Desc: "All history records are stored locally and will not be uploaded",
    Empty: "Sorry, no history records yet!",
    Clean: "Clear all history records",
    ItemCount: (count: number) => `A total of ${count} history records`,
  },
  Auth: {
    Title: "Authorization",
    Desc: "",
    NeedCode: "Need Share Code",
    RemindCode: "Remember Share Code",
    InputTip:
      "The creator has enabled verification, please enter the share code below",
    InputPlaceHolder: "Please enter the share code",
  },
  Land: {
    Title: "AI Tool Basic Template",
    Desc: "Start creating your own AI tool from here",
    Test: {
      Hello: "Hello! Welcome to 302.AI",
      LogOut: "Log Out",
    },
  },
};

export default en;

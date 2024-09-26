import { AuthFormProps, SIGN_IN_FORM } from "./forms";
import { APP_MENU, MenuProps, } from "./menus";

type AppConstantsProps = {
  landingPageMenu: MenuProps[];
  signInForm: AuthFormProps[];
};

export const APP_CONSTANTS: AppConstantsProps = {
  landingPageMenu: APP_MENU,
  signInForm: SIGN_IN_FORM,
};

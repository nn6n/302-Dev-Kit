import { AuthFormProps, SIGN_IN_FORM } from "./forms";
import { LANDING_PAGE_MENU, MenuProps } from "./menus";

type AppConstantsProps = {
  landingPageMenu: MenuProps[];
  signInForm: AuthFormProps[];
};

export const APP_CONSTANTS: AppConstantsProps = {
  landingPageMenu: LANDING_PAGE_MENU,
  signInForm: SIGN_IN_FORM,
};

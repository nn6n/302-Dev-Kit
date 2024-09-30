import { AuthFormProps, SIGN_IN_FORM } from "./forms";
import { APP_MENU, MenuProps } from "./menus";
import { APP_THEME, ThemeProps } from "./themes";

// APP
type AppConstantsProps = {
  appMenu: MenuProps[];
  appTheme: ThemeProps[];
};

export const APP_CONSTANTS: AppConstantsProps = {
  appMenu: APP_MENU,
  appTheme: APP_THEME,
};

// Form
type FormConstantsProps = {
  signInForm: AuthFormProps[];
};

export const FORM_CONSTANTS: FormConstantsProps = {
  signInForm: SIGN_IN_FORM,
};

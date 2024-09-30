import { AuthFormProps, SIGN_IN_FORM } from "./forms";
import { APP_MENU, MenuProps } from "./menus";
// import { LANG_OPTION, OptionProps, THEME_OPTION } from "./options";

// APP
type AppConstantsProps = {
  appMenu: MenuProps[];
  // appTheme: OptionProps[];
  // appLang: OptionProps[];
};

export const APP_CONSTANTS: AppConstantsProps = {
  appMenu: APP_MENU,
  // appTheme: THEME_OPTION,
  // appLang: LANG_OPTION,
};

// Form
type FormConstantsProps = {
  signInForm: AuthFormProps[];
};

export const FORM_CONSTANTS: FormConstantsProps = {
  signInForm: SIGN_IN_FORM,
};

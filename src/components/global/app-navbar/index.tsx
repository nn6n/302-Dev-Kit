"use client";


import { InfoModal } from "./info-modal";
import LangSwitcher from "./lang-switcher";
// import MenuSheet from "./menu-sheet";
import ThemeSwitcher from "./theme-switcher";

export default function AppNavbar() {
  // const [mounted, setMounted] = useState(false);
  // const { apiKey } = useAppStore((state) => ({ apiKey: state.apiKey }))
  // console.log('api:::', apiKey)

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;
  return (
    <nav className="sticky top-0 flex w-full items-center justify-between space-x-2 bg-background/95 p-2 shadow-sm">
      <div className="flex justify-start">{/* <MenuSheet /> */}</div>
      <div className="flex justify-end">
        {
          // apiKey &&

          <InfoModal />
        }
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

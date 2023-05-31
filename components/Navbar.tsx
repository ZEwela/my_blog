import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import Link from "next/link";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <header className=" flex justify-between content-center  p-2 dark:border-b dark:border-stone-600 ">
        <Link className="text-xl my-auto" href="/">
          Ewelina Zawol
        </Link>
        <div>
          {currentTheme === "dark" ? (
            <button
              onClick={() => {
                setTheme("light");
              }}
              className="bg-slate-200 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-200 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;

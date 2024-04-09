import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import Link from "next/link";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <header className=" flex justify-between content-center  p-2 dark:border-b dark:border-stone-600 ">
        <Link
          className="text-xl my-auto bg-neutral-200 p-2 rounded-xl text-black hover:bg-neutral-300"
          href="/"
        >
          Ewelina Zawol
        </Link>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link
            className="text-xl bg-neutral-200 p-2 rounded-xl text-black hover:bg-neutral-300 "
            href="https://portfolio-zewela.vercel.app/"
          >
            Portfolio
          </Link>
          {currentTheme === "dark" ? (
            <button
              onClick={() => {
                setTheme("light");
              }}
              className="bg-neutral-200 p-2 rounded-xl  hover:bg-neutral-300"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-neutral-200 p-2 rounded-xl  hover:bg-neutral-300"
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

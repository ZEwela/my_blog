import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-400 md:flex-row md:justify-between">
        <div>@ 2023 Ewelina Zawol</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://portfolio-zewela.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-500 dark:text-neutral-100"
          >
            <BsPersonCircle
              size={30}
              className="hover:translate-y-1 transition-transform cursor-pointer"
            />
          </a>
          <a
            href="https://github.com/ZEwela"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-500 dark:text-neutral-100"
          >
            <AiOutlineGithub
              size={30}
              className="hover:translate-y-1 transition-transform cursor-pointer"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ewelina-zawol-94526998/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              size={30}
              className="hover:translate-y-1 transition-transform cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

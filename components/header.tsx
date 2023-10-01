"use client";

import { contactLink, links } from "@/lib/data";
import { useActiveSectionContext } from "@/lib/hooks";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiCaretRightCircle, BiMenu } from "react-icons/bi";

const Header = () => {
  const {
    activeSection,
    setActiveSection,
    openNavbar,
    setOpenNavbar,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  return (
    <motion.header
      className="fixed z-[999] h-20 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="left-0 top-0 mr-4 h-20 items-center bg-primary-50 bg-opacity-90 px-8 font-bold" />
      <div className="absolute left-0 top-0 hidden h-20 items-center px-8 font-bold md:flex">
        LearnHub
      </div>
      <motion.nav className="absolute top-0 flex h-20 md:left-24 lg:left-1/2 lg:-translate-x-1/2">
        <ul className="group flex items-center justify-center px-8 font-bold">
          <BiMenu
            className="text-3xl md:hidden"
            onClick={() => setOpenNavbar((open) => !open)}
          />
          {links.map((link) => (
            <li
              className={clsx(
                "hidden bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_3px] bg-left-bottom bg-no-repeat p-2 text-primary-700 transition-all duration-500 ease-out hover:bg-[length:100%_3px] hover:text-primary-950 md:mx-4 md:block lg:mx-6 2xl:mx-8",
                {
                  "bg-[length:100%_3px] text-primary-950":
                    activeSection === link.name,
                },
              )}
              key={link.hash}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
      {openNavbar && (
        <ul className="fixed top-20 flex w-full flex-col bg-primary-50 bg-opacity-80 px-8 pb-2 md:hidden">
          {links.map((link) => (
            <li className="py-2" key={link.hash}>
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <motion.div
        className={clsx(
          "absolute right-0 top-0 flex h-20 items-center px-8 font-bold transition duration-200 ease-out hover:text-accent-700",
          {
            "text-accent-700": activeSection === contactLink.name,
          },
        )}
      >
        <BiCaretRightCircle className="text-3xl lg:mr-2" />
        <Link
          href={contactLink.hash}
          className="hidden text-center lg:block"
          onClick={() => {
            setActiveSection(contactLink.name);
            setTimeOfLastClick(Date.now());
          }}
        >
          <span>{contactLink.name}</span>
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Header;

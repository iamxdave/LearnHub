"use client";

import { useActiveSectionContext, useSectionInView } from "@/lib/hooks";
import Player from "@/public/player.png";
import WomanSitting from "@/public/woman_sitting.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";
import { HiArrowSmRight } from "react-icons/hi";

const Home = () => {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-screen snap-start scroll-mt-0 items-center justify-center 2xl:h-screen 2xl:snap-center"
    >
      <div className="flex-1 text-justify">
        <div className="relative mx-6 my-28 max-w-xl md:mx-auto 2xl:left-1/2 2xl:m-0 2xl:mx-0 2xl:-translate-x-[90%] 3xl:max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <span className="block text-[1.5rem] font-bold sm:text-[2.5rem] lg:text-[3rem] 3xl:lg:text-[3.5rem]">
              Welcome to <span className="text-accent-700">LearnHub</span>
              <br />
            </span>
            <span className="block text-[1.25rem] font-bold sm:text-[2rem] lg:text-[2.5rem] 3xl:lg:text-[3rem]">
              Your Gateway to Knowledge!
            </span>
            <span className="mt-5 block max-w-xl text-justify text-[1rem] sm:text-[1.25rem] 3xl:lg:text-[1.5rem]">
              {" "}
              Discover a world of learning at your fingertips. LearnHub is your
              one-stop destination for high-quality educational videos on a wide
              range of topics. Whether you&apos;re a student, professional, or
              lifelong learner, our platform is designed to empower you with
              knowledge.
            </span>
          </motion.h1>
          <motion.div
            className="mt-10 flex items-center gap-2 sm:gap-5"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#get-started"
              className="group relative inline-block items-center justify-start overflow-hidden px-5 py-2 text-sm font-semibold sm:text-base"
              onClick={() => {
                setActiveSection("Get started");
                setTimeOfLastClick(Date.now());
              }}
            >
              <span className="absolute left-0 top-0 -mt-1 h-48 w-60 -translate-x-72 -translate-y-24 rotate-45 bg-primary-50 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8" />
              <span className="relative flex w-full items-center text-left text-primary-50 transition-colors duration-200 ease-in-out group-hover:text-primary-950">
                Get started{" "}
                <HiArrowSmRight className="my-auto ml-1 inline transition sm:ml-2" />
              </span>
              <span className="absolute inset-0 border-2 border-primary-950" />
              <span className="absolute inset-0 -z-10 border-2 bg-primary-950" />
            </Link>
            <Link
              href="#pricings"
              className="group relative flex items-center justify-start px-4 py-2 text-sm font-medium sm:text-base"
            >
              <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-accent-700 transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0" />
              <span className="absolute inset-0 h-full w-full border-2 border-black bg-white" />
              <span className="relative text-black">
                Pricing{" "}
                <BiCartAlt className="my-auto ml-1 inline transition sm:ml-2" />
              </span>
            </Link>
          </motion.div>
          <div className="relative h-80 lg:h-[28rem] 2xl:h-0">
            <motion.img
              src={Player.src}
              alt="Video player"
              width="720"
              height="720"
              className="absolute -bottom-0 right-0 h-64 w-auto sm:right-28 lg:right-0 lg:h-96 2xl:-bottom-48 2xl:-right-[40rem] 2xl:h-[36rem]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
            />
            <motion.img
              src={WomanSitting.src}
              alt="Plant"
              width="720"
              height="720"
              className="absolute -bottom-0 left-0 h-28 w-auto sm:left-28 lg:left-0 lg:h-48 2xl:-bottom-48 2xl:-left-[22rem] 2xl:h-60"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

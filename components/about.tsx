"use client";

import { fadeInAnimationVariants } from "@/lib/animations";
import { homeData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Bookcase from "@/public/bookcase.png";
import Lamp from "@/public/lamp.png";
import ManSitting from "@/public/man_sitting.png";
import Plant from "@/public/plant.png";
import { motion } from "framer-motion";
import Title from "./ui/title";


const About = () => {
  const { ref } = useSectionInView("About", 0.3);

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full snap-start scroll-mt-0 items-center justify-center text-center leading-8 2xl:h-screen 2xl:snap-center"
      id="about"
    >
      <div className="flex-1 text-justify">
        <div className="relative mx-6 my-28 max-w-xl text-sm sm:max-w-2xl sm:text-base md:mx-auto 2xl:left-1/2 2xl:m-0 2xl:-translate-x-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
            }}
            className="2xl:mt-28"
          >
            <Title type="About">
              Transforming Education Through Video Learning
            </Title>
            <p className="mb-16 mt-5 border-l-4 border-accent-700 px-4 text-justify text-[1rem] leading-relaxed sm:px-8 sm:text-[1.25rem] 3xl:lg:text-[1.5rem]">
              LearnHub is on a mission to revolutionize the way people acquire
              knowledge. We believe that education should be accessible to
              everyone, regardless of their location or background. That&apos;s
              why we&apos;ve created a platform where you can gain valuable
              insights and skills through engaging video content.
            </p>
            <p className="mb-6 block text-[1rem] font-bold sm:text-[1.25rem] 3xl:lg:text-[1.5rem]">
              Our platform offers:
            </p>
            <ul className="block text-[0.75rem] leading-relaxed sm:text-[1rem] 3xl:lg:text-[1.25rem]">
              {homeData.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="flex items-center py-2 text-left"
                >
                  <div className="inline-flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-md bg-accent-700 text-primary-50">
                    {item.icon && (
                      <item.icon className="inline-block h-6 w-6" />
                    )}
                  </div>
                  <div className="my-auto ml-4 font-medium">{item.listing}</div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className="relative h-80 lg:h-[28rem] 2xl:h-0">
            <motion.img
              src={ManSitting.src}
              alt="Man sitting"
              width="720"
              height="720"
              className="absolute bottom-0 right-0 z-10 h-48 w-auto sm:right-28 lg:right-0 lg:h-72 2xl:-bottom-16 2xl:-right-64 2xl:h-96"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
            />
            <motion.img
              src={Lamp.src}
              alt="Lamp"
              width="720"
              height="720"
              className="absolute left-64 top-8 h-12 w-auto lg:h-24 2xl:-left-36 2xl:-top-[38rem] 2xl:h-32"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.5,
              }}
            />
            <motion.img
              src={Plant.src}
              alt="Plant"
              width="720"
              height="720"
              className="absolute bottom-0 left-32 h-32 w-auto sm:left-64 lg:h-48 2xl:-bottom-16 2xl:-left-[36rem] 2xl:h-72"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            />
            <motion.img
              src={Bookcase.src}
              alt="Bookcase"
              width="720"
              height="720"
              className="absolute bottom-0 left-0 -z-10 h-72 w-auto sm:left-28 lg:left-0 lg:h-96 2xl:-bottom-16 2xl:-left-[28rem] 2xl:h-[36rem]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.375,
                duration: 0.75,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

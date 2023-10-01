"use client";

import { fadeInAnimationVariants } from "@/lib/animations";
import { pricingsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SparklesLeft from "public/space_left.png";
import SparklesRight from "public/space_right.png";
import SparklesSmall from "public/space_small.png";
import SparklesXs from "public/space_xs.png";
import Pricing from "./pricing";
import Title from "./ui/title";

const Pricings = () => {
  const { ref } = useSectionInView("Pricings");
  return (
    <section
      ref={ref}
      className="relative flex min-h-screen  snap-start scroll-mt-0 items-center justify-center overflow-x-hidden"
      id="pricings"
    >
      <div className="flex-1 text-center">
        <div className="relative mx-6 my-28 sm:mx-0 2xl:my-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
            }}
          >
            <Title type="Pricings">Choose your best plan</Title>
          </motion.div>
          <ul className="grid-col-1 grid gap-x-8 gap-y-8 sm:mx-auto sm:max-w-md lg:mx-auto lg:max-w-6xl lg:grid-cols-3 lg:px-10">
            {pricingsData.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <Pricing {...item} isOdd={index % 2 === 0} key={index} />
              </motion.li>
            ))}
            <motion.img
              src={SparklesXs.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.225, duration: 0.5 }}
              className="absolute -bottom-28 left-8 -z-[999] hidden h-12 w-auto lg:block 2xl:left-64 2xl:h-20 3xl:h-24"
            />
            <motion.img
              src={SparklesSmall.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="absolute -top-10 right-8 -z-[999] hidden h-32 w-auto lg:inline-block 2xl:right-36 2xl:h-48 3xl:h-64"
            />
          </ul>
        </div>
      </div>
      <motion.img
        src={SparklesLeft.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute left-0 top-20 -z-[999] hidden h-40 w-auto lg:block 2xl:h-56 3xl:h-72"
      />
      <motion.img
        src={SparklesRight.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.225, duration: 0.5 }}
        className="absolute bottom-0 right-0 -z-[999] hidden h-40 w-auto lg:block 2xl:h-56 3xl:h-72"
      />
    </section>
  );
};

export default Pricings;

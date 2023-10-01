"use client";

import { fadeInAnimationVariants } from "@/lib/animations";
import { featuresData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ManStanding from "@/public/man_standing.png";
import Rocket from "@/public/rocket.png";
import Sky from "@/public/sky.png";
import { motion } from "framer-motion";
import Title from "./ui/title";
import Feature from "./feature";

const Features = () => {
  const { ref } = useSectionInView("Features", 0.3);

  return (
    <section
      ref={ref}
      className="min-screen flex w-full overflow-x-hidden snap-start scroll-mt-0 items-center justify-center text-center leading-8 2xl:h-screen 2xl:snap-center"
      id="features"
    >
      <div className="flex-1">
        <div className="relative mx-6 my-28 flex max-w-xl flex-col items-center justify-center text-sm sm:mx-auto sm:max-w-md sm:text-base lg:max-w-6xl 2xl:left-[50rem] 2xl:m-0 2xl:max-w-6xl 2xl:-translate-x-1/2 3xl:left-[40%]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
            }}
          >
            <Title type="Features">Get access to our features</Title>
          </motion.div>
          <ul className="grid-col-1 grid gap-x-8 gap-y-8 sm:mx-auto sm:max-w-md lg:mx-auto lg:max-w-6xl lg:grid-cols-3 lg:px-10">
            {featuresData.map((item, index) => (
              <Feature key={index} {...item} index={index}/>
            ))}
          </ul>
          <div className="relative h-80 w-full lg:h-[28rem] 2xl:h-0">
            <motion.img
              src={ManStanding.src}
              alt="Man standing"
              width="720"
              height="720"
              className="absolute bottom-0 left-0 z-10 h-48 w-auto sm:left-8 lg:left-64 lg:h-72 2xl:-bottom-48 2xl:-left-32 2xl:h-96"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
            />
            <motion.img
              src={Sky.src}
              alt="Sky"
              width="720"
              height="720"
              className="absolute left-16 top-12 h-12 w-auto lg:left-72 lg:top-20 lg:h-16 2xl:-top-[32rem] 2xl:left-[56rem] 2xl:h-24"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            />
            <motion.img
              src={Rocket.src}
              alt="Rocket"
              width="720"
              height="720"
              className="absolute bottom-0 right-0 -z-10 h-72 w-auto sm:right-8 lg:right-64 lg:h-96 2xl:-bottom-48 2xl:-right-[24rem] 2xl:h-[32rem]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.75,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

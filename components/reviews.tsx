"use client";

import { fadeInAnimationVariants } from "@/lib/animations";
import { reviewsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Review from "./review";
import Title from "./ui/title";

const Reviews = () => {
  const { ref } = useSectionInView("Reviews", 0.3);

  return (
    <section
      ref={ref}
      id="reviews"
      className="flex min-h-[calc(100vh-80px)] snap-start scroll-mt-0 items-center justify-center overflow-x-hidden"
    >
      <div className="mx-6 my-28 sm:mx-8 lg:mx-auto lg:mt-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
          }}
        >
          <Title type="Reviews">What our users say</Title>
        </motion.div>
        <div className="grid-col-1 mt-16 grid gap-x-20 gap-y-8 sm:mx-auto sm:max-w-xl lg:mx-auto lg:max-w-6xl lg:grid-cols-3 lg:px-10 2xl:px-0">
          {reviewsData.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              variants={fadeInAnimationVariants}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Review {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

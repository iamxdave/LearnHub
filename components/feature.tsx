import { fadeInAnimationVariants } from "@/lib/animations";
import { featuresData } from "@/lib/data";
import { motion } from "framer-motion";

type FeatureProps = (typeof featuresData)[number] & { index: number };

const Feature = ({title, description, index} : FeatureProps) => {
  return (
    <motion.li
      key={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex flex-col items-center border-2 border-primary-950 bg-white px-6 py-8 text-center shadow-primary shadow-accent-700 2xl:max-w-xs"
    >
      <div className="mb-5 flex items-center justify-center gap-2 2xl:mb-8 2xl:flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-accent-700"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="text-[1.25rem] font-bold leading-snug sm:text-[1.5rem]">
          {title}
        </div>
      </div>
      <p className="text-justify text-[0.75rem] sm:text-[1rem]">
        {description}
      </p>
    </motion.li>
  );
};
export default Feature;

"use client";

import { reviewsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ReviewProps = (typeof reviewsData)[number];

const Review = ({ name, title, avatar, review }: ReviewProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 rounded-sm text-justify lg:max-w-[24rem] lg:flex-col"
    >
      <div className="flex w-max flex-col items-center justify-center">
        <Image
          src={avatar.src}
          alt="Avatar"
          width="400"
          height="400"
          className="mb-2 aspect-square max-w-[5rem] rounded-full border-2 border-accent-700 bg-white object-contain p-2 sm:mb-4 sm:w-24 sm:max-w-[8rem] lg:w-36 lg:border-4"
        />
        <span className="block text-center text-[0.75rem] font-bold leading-relaxed sm:text-[1rem] lg:mb-3 3xl:lg:text-[1.25rem]">
          {name}
        </span>
      </div>
      <blockquote className="relative block rounded-sm border-2 border-primary-950 bg-white p-4 text-[0.75rem] font-medium italic leading-relaxed sm:text-[1rem] 3xl:lg:text-[1.25rem]">
        <span className="absolute -left-6 -top-6 text-[4rem] font-bold text-accent-700">
          &quot;
        </span>
        <p className="mb-1 sm:mb-2">{review}</p>
        <cite className="block text-right text-accent-700">- {title}</cite>
        <span className="absolute -bottom-14 -right-2 text-[4rem] font-bold text-accent-700">
          &quot;
        </span>
      </blockquote>
    </motion.div>
  );
};

export default Review;

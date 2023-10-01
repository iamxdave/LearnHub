import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionProvider",
    );
  }
  return context;
};

export const useSectionInView = (
  sectionName: SectionName,
  threshold: number = 0.75,
) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return {
    ref,
  };
};

// export const useScrollYTransform = (
//   ref: React.RefObject<HTMLElement>,
//   v1: number = 0,
//   v2: number = 0,
// ) => {
//   const animationRef = useRef<HTMLImageElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const transform = useTransform(scrollYProgress, [0, 1], [v1, v2]);
//   return { transform: transform };
// };

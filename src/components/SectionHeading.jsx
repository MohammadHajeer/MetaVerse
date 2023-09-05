import { motion } from "framer-motion";
import { fadeIn } from "../animation/motion";

const SectionHeading = ({ heading }) => (
  <motion.h2
    variants={fadeIn("up", "tween", 0.2, 1)}
    initial={"hidden"}
    whileInView={"visible"}
    className="text-white text-[64px] max-sm:text-5xl max-ss:text-4xl leading-[120%] font-bold"
  >
    {heading}
  </motion.h2>
);

export default SectionHeading;

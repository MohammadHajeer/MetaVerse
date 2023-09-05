import { motion } from "framer-motion";
import { textContainer } from "../animation/motion";

const SectionTitle = ({ title }) => (
  <span className=" text-secondary-white relative">
    <span className="text-xl mr-1">I</span>
    <motion.div
      variants={textContainer}
      whileInView={"visible"}
      initial={"hidden"}
      className="inline-flex"
    >
      {title.split("").map((c, i) => (
        <motion.span
          variants={variants}
          key={i}
          className={`${c === " " ? "ml-1" : ""}`}
        >
          {c}
        </motion.span>
      ))}
    </motion.div>
  </span>
);
export default SectionTitle;

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

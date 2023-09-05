import { arrowDown } from "../assets";
import SectionTitle from "./SectionTitle";
import { fadeIn, staggerContainer } from "../animation/motion";
import { motion } from "framer-motion";

const About = () => (
  <div className="relative container text-center">
    <span className="gradient-02 "></span>
    <SectionTitle title={"About Metaverus"} />
    <motion.p
      variants={fadeIn("up", "spring", 0.5, 2)}
      initial={"hidden"}
      whileInView={"visible"}
      className="text-[32px] leading-[180%] text-secondary-white sm:px-14"
    >
      <span className="text-white font-bold">Metaverse</span> is a new thing in
      the future, where you can enjoy the virtual world by feeling like
      it&apos;s really real, you can feel what you feel in this metaverse world,
      because this is really the{" "}
      <span className="text-white font-bold">madness of the metaverse</span> of
      today, using only <span className="text-white font-bold">VR</span> devices
      you can easily explore the metaverse world you want, turn your dreams into
      reality. Let&apos;s <span className="text-white font-bold">explore</span>{" "}
      the madness of the metaverse by scrolling down
    </motion.p>
    <motion.a
      variants={fadeIn("up", "spring", 1, 2)}
      initial={"hidden"}
      whileInView={"visible"}
      href="#explore"
      className="mx-auto w-12 h-12 flex justify-center rounded-full items-center mt-10 hover:shadow-btn"
    >
      <img src={arrowDown} alt="arrow icon" />
    </motion.a>
  </div>
);

export default About;

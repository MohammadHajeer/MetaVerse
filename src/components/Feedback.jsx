import { planet_09, stamp } from "../assets";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../animation/motion";

const Feedback = () => (
  <div className="relative container flex gap-8 max-md:flex-col">
    <span className="gradient-04"></span>
    <motion.div
      variants={fadeIn("right", "spring", 0.4, 2)}
      initial={"hidden"}
      whileInView={"visible"}
      className="basis-[30%] rounded-[32px] border-[1px] border-[#6A6A6A] p-8 flex flex-col justify-end relative overflow-hidden"
    >
      <span className="feedback-gradient"></span>
      <div>
        <SectionTitle title={"Feedback"} />
        <h3 className="text-white text-[32px] font-bold">Mohammad</h3>
        <span className="text-lg text-secondary-white">Founder Metaverus</span>
      </div>
      <p className="text-xl text-secondary-white mt-6 leading-[190%]">
        “With the development of today&apos;s technology, metaverse is very
        useful for today&apos;s work, or can be called web 3.0. by using
        metaverse you can use it as anything”
      </p>
    </motion.div>
    <motion.div
      variants={fadeIn("left", "spring", 0.4, 2)}
      initial={"hidden"}
      whileInView={"visible"}
      className="basis-[70%] relative"
    >
      <img
        src={planet_09}
        alt="planet"
        className="object-cover object-right rounded-[32px] h-[610px]"
      />
      <motion.img variants={zoomIn(1,0.5)} initial={"hidden"} whileInView={"visible"}
        src={stamp}
        alt="stamp"
        className="absolute w-[155px] h-[155px] top-12 left-0 -translate-x-1/2 max-md:top-0 max-md:left-1/2 max-md:-translate-y-1/2"
      />
    </motion.div>
  </div>
);

export default Feedback;

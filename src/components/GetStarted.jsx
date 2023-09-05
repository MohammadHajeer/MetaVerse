import { getStarted } from "../assets";
import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import { startingFeatures } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, planetVariants } from "../animation/motion";

const GetStarted = () => (
  <div className="relative container flex items-start justify-between max-md:flex-col-reverse">
    <motion.div variants={planetVariants("left")} initial={"hidden"} whileInView={"visible"}
    className="basis-[55%]">
      <img src={getStarted} alt="planet" />
    </motion.div>
    <motion.div variants={fadeIn("left", "spring", 0.4, 2)} initial={"hidden"} whileInView={"visible"}  className="basis-[41%]">
      <div className="">
        <SectionTitle title={"How Metaverus Works"} />
        <SectionHeading heading={"Get started with just a few clicks"} />
      </div>
      <ul className="flex flex-col gap-6 mt-6">
        {startingFeatures.map((feature, index) => (
          <Feature key={index} index={index} feature={feature} />
        ))}
      </ul>
    </motion.div>
  </div>
);

export default GetStarted;

const Feature = ({ index, feature }) => (
  <li className="flex items-center gap-5">
    <span className="w-[70px] h-[70px] rounded-3xl flex justify-center items-center bg-[#ffffff14] text-[20px] text-white">
      0{index + 1}
    </span>
    <p className="flex-1 text-secondary-white text-lg leading-[180%]">
      {feature}
    </p>
  </li>
);

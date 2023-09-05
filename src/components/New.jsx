import { whatsNew } from "../assets";
import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import { newFeatures } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, planetVariants } from "../animation/motion";

const New = () => {
  return (
    <div className="relative container flex items-center justify-between max-md:flex-col">
      <span className="gradient-04"></span>
      <motion.div variants={fadeIn("right", "spring", 0.4, 2)} initial={"hidden"} whileInView={"visible"} className="basis-[47%]">
        <div>
          <SectionTitle title={"Whats New?"} />
          <SectionHeading heading={"What's new about Metaversus?"} />
        </div>
        <ul className="flex gap-11 mt-12 max-xs:flex-col">
          {newFeatures.map((feature, index) => (
            <Feature
              key={index}
              svg={feature.imgUrl}
              title={feature.title}
              description={feature.subtitle}
            />
          ))}
        </ul>
      </motion.div>
      <motion.div variants={planetVariants("right")} initial={"hidden"} whileInView={"visible"} className="basis-1/2">
        <img src={whatsNew} alt="planet" />
      </motion.div>
    </div>
  );
};

export default New;

const Feature = ({ svg, title, description }) => (
  <li className="flex flex-col gap-6">
    <span className="w-[70px] h-[70px] rounded-3xl flex justify-center items-center bg-[#ffffff14] text-white">
      <img src={svg} alt="icon" />
    </span>
    <h3 className="text-white text-2xl font-bold">{title}</h3>
    <p className=" text-secondary-white">{description}</p>
  </li>
);

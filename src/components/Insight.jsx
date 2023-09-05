import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import { insights } from "../constants";
import { arrow } from "../assets";
import { fadeIn, staggerContainer, worlds } from "../animation/motion";
import { motion } from "framer-motion";

const Insight = () => {
  return (
    <div className="container">
      <div className="text-center mb-[50px]">
        <SectionTitle title={"Insight"} />
        <SectionHeading heading={"Insight about metaverse"} />
      </div>
      <div>
        <motion.ul
          variants={staggerContainer(0.3, 0.3)}
          initial={"hidden"}
          whileInView={"visible"}
          className="flex flex-col gap-[30px]"
        >
          {insights.map((sight, index) => (
            <Sight
              key={index}
              imgUrl={sight.imgUrl}
              title={sight.title}
              description={sight.subtitle}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Insight;

const Sight = ({ imgUrl, title, description }) => (
  <motion.li variants={worlds("up")} className="flex items-center justify-between max-md:flex-col max-md:items-start max-ss:items-center max-ss:text-center">
    <div className="flex items-center gap-16 max-sm:flex-col max-sm:items-start max-ss:items-center">
      <img
        src={imgUrl}
        alt="planet"
        className="w-[270px] h-[250px] rounded-[32px] object-cover"
      />
      <div className="md:w-[646px] flex flex-col gap-4">
        <h3 className="text-white text-[42px] max-ss:text-4xl leading-[125%]">
          {title}
        </h3>
        <p className=" text-secondary-white leading-[200%] text-xl max-ss:text-lg">
          {description}
        </p>
      </div>
    </div>
    <div className="w-[100px] h-[100px] max-ss:w-[80px] max-ss:h-[80px] rounded-full border-2 border-white flex justify-center items-center">
      <img src={arrow} alt="arrow" />
    </div>
  </motion.li>
);

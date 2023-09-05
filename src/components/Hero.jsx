import { cover, stamp } from "../assets";
import { socials } from "../constants";
import SectionTitle from "./SectionTitle";
import {
  slideIn,
  fadeIn,
  textVariant,
  staggerContainer,
  links
} from "../animation/motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container">
      <div className=" flex justify-between items-center max-md:flex-col max-ss:gap-10 z-10 relative">
        <SectionTitle title={"Home"} />
        <h1 className="text-white flex flex-col items-center text-[144px] max-md:text-[122px] max-sm:text-[90px] max-ss:text-[60px] font-[700] leading-[110%] tracking-[-2.88px]">
          <motion.span
            variants={textVariant(1)}
            initial={"hidden"}
            whileInView={"visible"}
          >
            METAVERSE
          </motion.span>
          <motion.span
            variants={textVariant(1.2)}
            initial={"hidden"}
            whileInView={"visible"}
            className="flex items-center gap-5 max-ss:gap-2 z-10"
          >
            MA
            <span className="block w-[212px] max-md:w-[180px] max-sm:w-[120px] max-ss:w-[80px] h-[108px] max-md:h-[90px] max-sm:h-[70px] max-ss:h-[45px] border-[18px] max-sm:border-[14px] max-ss:border-[10px] border-white rounded-r-[50px]"></span>
            NESS
          </motion.span>
        </h1>
        <div className="z-10">
          <motion.ul
            variants={staggerContainer(0.5, 0.5)}
            initial={"hidden"}
            whileInView={"visible"}
            className="flex flex-col items-center gap-5 max-md:flex-row"
          >
            {socials.map((link) => (
              <motion.li
                variants={links}
                key={link.name}
              >
                <img src={link.url} alt={`${link.name} icon`} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <motion.div
        variants={slideIn("right", "spring", 0.5, 2)}
        whileInView={"visible"}
        initial={"hidden"}
        className="h-[488px] relative z-[1]"
      >
        <img
          src={cover}
          alt="cover png"
          className="absolute h-full w-[1305px] left-0 object-cover max-w-none -translate-y-16 -z-[1] rounded-t-[200px] rounded-r-0 rounded-tr-none rounded-b-[50px]"
        />
        <img
          src={stamp}
          alt="welcoming png"
          className="w-[155px] h-[155px] absolute bottom-0 right-[0px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

import { map, union, union_01, union_02, union_03 } from "../assets";
import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/motion";

const Map = () => {
  return (
    <div className="container">
      <div className="text-center w-[962px] mx-auto max-w-full">
        <SectionTitle title={"People on the World"} />
        <SectionHeading
          heading={
            "Track friends around you and invite them to play together in the same world"
          }
        />
      </div>
      <motion.div variants={fadeIn("up", "spring", 0.5, 1)} initial={"hidden"} whileInView={"visible"} className="mt-16 relative">
        <img src={map} alt="World Map" />
        <Location locate={"top-[10%] left-[10%]"} img={union_01} />
        <Location locate={"top-[40%] left-[45%]"} img={union_02} />
        <Location locate={"bottom-[10%] right-[5%]"} img={union_03} />
      </motion.div>
    </div>
  );
};

export default Map;

const Location = ({ locate, img }) => (
  <div className={`absolute ${locate}`}>
    <img
      src={union}
      alt=""
      className="w-[73px] h-[86px] max-ss:w-[40px] max-ss:h-[55px]"
    />
    <img
      src={img}
      className="absolute top-0 left-0 w-[70px] h-[70px] md:w-[80x] md:h-[80px]"
      alt=""
    />
  </div>
);

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import { exploreWorlds } from "../constants";
import { headset } from "../assets";
import { staggerContainer, worlds } from "../animation/motion";
import { motion } from "framer-motion";

const Explore = () => {
  const [chosenWorld, setChosenWorld] = useState("world-2");
  return (
    <div className="relative container">
      <span className="gradient-04"></span>
      <div className="text-center mb-10">
        <SectionTitle title={"The World"} />
        <div className=" w-[885px] max-w-full mx-auto">
          <SectionHeading heading={"Choose the world you want to explore"} />
        </div>
      </div>
      <div>
        <motion.ul
          variants={staggerContainer(0.2, 0.2)}
          initial={"hidden"}
          whileInView={"visible"}
          className="flex h-[563px] gap-7 max-md:flex-col"
        >
          {exploreWorlds.map((world, index) => (
            <World
              key={world.id}
              id={world.id}
              url={world.imgUrl}
              title={world.title}
              chosenWorld={chosenWorld}
              setChosenWorld={setChosenWorld}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Explore;

const World = ({ id, url, title, chosenWorld, setChosenWorld }) => (
  <motion.li
    variants={worlds("left")}
    className={`relative cursor-pointer flex-1 h-full transition-all max-md:h-[10%] max-md:w-full ${
      id === chosenWorld ? "flex-[2] max-md:flex-[3]" : ""
    } overflow-hidden`}
    onClick={() => {
      setChosenWorld(id);
    }}
  >
    <img
      src={url}
      alt="World Image"
      className={`h-full object-cover rounded-3xl transition-all w-full ${
        id === chosenWorld ? " object-center" : "object-left"
      }`}
    />
    <div
      onClick={() => setChosenWorld(id)}
      className={`world-details ${
        id === chosenWorld ? "active-world" : ""
      } flex flex-col gap-8`}
    >
      {id === chosenWorld && (
        <div className="flex flex-col max-md:items-center gap-8">
          <img src={headset} alt="headset icon" className="w-6 h-6" />
          <span className="">ENTER METAVERSE</span>
        </div>
      )}
      <span className=" text-[32px]">{title}</span>
    </div>
  </motion.li>
);

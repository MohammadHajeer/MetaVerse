import { search, menu } from "../assets";
import { motion } from "framer-motion";
import { navVariants } from "../animation/motion";

const Header = () => (
  <motion.div
    variants={navVariants}
    whileInView={"visible"}
    while={"hidden"}
    className="relative container flex justify-between items-center"
  >
    <span className="absolute w-40 h-40 gradient-01 top-0 left-0 block"></span>
    <div>
      <img src={search} alt="search icon" />
    </div>
    <h2 className="text-white font-[800] text-[24px]">METAVERSE</h2>
    <div>
      <img src={menu} alt="menu icon" />
    </div>
  </motion.div>
);

export default Header;

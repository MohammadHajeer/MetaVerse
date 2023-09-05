import { socials } from "../constants";
import { motion } from "framer-motion";
import { footerVariants } from "../animation/motion";

const Footer = () => (
  <motion.div
    variants={footerVariants}
    whileInView={"visible"}
    initial={"hidden"}
    className="relative container py-[50px] border-t-[1px] border-[#6A6A6A] flex justify-between items-center max-sm:flex-col max-sm:gap-10"
  >
    <h3 className="text-2xl text-white">METAVERSE</h3>
    <p className="text-sm text-secondary-white">
      Copyright © 2021 - 2022 Metaversus. All rights reserved.
    </p>
    <ul className="flex gap-[30px]">
      {socials.map((link, index) => (
        <li key={index}>
          <img src={link.url} alt="icon" className="w-6 h-6" />
        </li>
      ))}
    </ul>
    <span className="footer-gradient"></span>
  </motion.div>
);

export default Footer;

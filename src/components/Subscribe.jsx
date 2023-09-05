import { headset } from "../assets";
import SectionHeading from "./SectionHeading";

const Subscribe = () => (
  <div className="container flex justify-between items-center max-md:flex-col max-md:gap-5">
    <SectionHeading heading={"Enter the Metaverse"} />
    <button className="flex px-8 py-5 gap-3 bg-[#25618B] rounded-[32px] text-white">
      <img src={headset} alt="headset" className="w-6 h-6" />
      ENTER METAVERSE
    </button>
  </div>
);

export default Subscribe;

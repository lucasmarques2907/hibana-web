import { FaTwitter } from "react-icons/fa6";
import LinkContainer from "./LinkContainer";

const LinksCard = () => {
  return <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg px-4 sm:px-3 w-full max-w-2xl text-white mx-auto overflow-hidden">
    <h2 className="mt-3 text-center text-lg sm:text-xl font-semibold">
        <span className="text-white">LINKS </span>
        <span className="text-yellow-400">IMPORTANTES</span>
      </h2>
    <LinkContainer nome="Ado Twitter" link="https://x.com/ado1024imokenp" Icon={FaTwitter}/>
    <LinkContainer nome="Ado Staff Twitter" link="https://x.com/ado_staff" Icon={FaTwitter}/>
    <LinkContainer nome="Ado Secret Base" link="https://ado-dokidokihimitsukichi-daigakuimo.com/"/>
  </div>;
};

export default LinksCard;

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaKaggle, FaLinkedinIn } from "react-icons/fa";
import { SiFigma, SiR, SiTableau, SiPython } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Data Analyst.", "Data Scientist.", "Business Intelligence."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Bonggo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        I am a data driven individual who makes decisions based on collected data to ensure the safest and most
        efficient way to achieve goals. I excel not only in utilizing analytical tools
        but also in collaborating with team members to make informed decisions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://bit.ly/tableau_obadhius" target="_blank">
              <span className="bannerIcon">
                <SiTableau />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/obadhius"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.kaggle.com/kierru" target="_blank">
              <span className="bannerIcon">
                <FaKaggle />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiR />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <TbSql />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;

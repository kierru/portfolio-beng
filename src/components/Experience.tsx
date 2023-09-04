import { motion } from "framer-motion";
import ResumeCardExp from "./ResumeCardExp";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardExp
            title="Associate Data Analyst"
            subTitle="RevoU, Remote | (July 2023 - September 2023)"
            des="Synthesized business intelligence and trend data to support recommendations."
            des2="Evaluated competitive market using related product, market and share data."
            des3="Developed reports and dashboards to report on key business intelligence."
          />
          <ResumeCardExp
            title="Teaching Assistant"
            subTitle="SMKN 1 Jakarta, Jakarta Pusat, Indonesia | (February 2023 - June 2023)"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            des2="Assisted lead teacher in developing class schedule and activities."
            des3="Organized learning experiences to achieve school objectives outlined in school improvement plan."
          />
          <ResumeCardExp
            title="Quality Control Engineer"
            subTitle="PT Totalindo Eka Persada Tbk, Kota Tangerang, Indonesia | (October 2022 - January 2023)"
            des="Identified characteristics and processes critical to pro duction success, error control and defect elimination."
            des2="Reviewed, assessed and updated standards for continuous improvement."
            des3="Verified quality control results with routine data and process audits"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

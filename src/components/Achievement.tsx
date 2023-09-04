import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { gac,gdc,gbi,revou,brg } from "../assets";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Google Advanced Data Analytics"
            subTitle="Issued by Coursera"
            result={gdc}
            href="https://drive.google.com/file/d/1B96req2PtLr9uijd9lvdAIVW8cQi5o1w/view?usp=sharing"
          />
          <ResumeCard
            title="Google Business Intelligence,"
            subTitle="Issued by Coursera"
            result={gbi}
            href="https://drive.google.com/file/d/1T24BoViFC7nB3SfRaLxgR3UoTiaJ9y7z/view?usp=drive_link"
          />
          <ResumeCard
            title="Google Data Analytics"
            subTitle="Issued by Coursera"
            result={gac}
            href="https://drive.google.com/file/d/1MJWR5Ul096KLToiw3XmRulgR9Hyd7xVf/view?usp=drive_link"
          />
        </div>
      </div>
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[655px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TOEFL Prediction Test"
            subTitle="Issued by Brighten English"
            result={brg}
            href="https://drive.google.com/file/d/1yyJPWMwdhzs9KaBDet0RCIpjpzu42zJt/view?usp=drive_link"
          />
          <ResumeCard
            title="Fullstack Data Analytics,"
            subTitle="Issued by RevoU"
            result={revou}
            href="https://drive.google.com/file/d/1Auz6WZwaPYMy5CRPeN3YQnjmVqIQymti/view?usp=drive_link"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

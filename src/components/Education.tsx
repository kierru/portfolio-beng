import { motion } from "framer-motion";
import ResumeCardEd from "./ResumeCardEd";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[200px] border-l-[6px]  border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardEd
            title="BEd in Building Engineering Education"
            subTitle="Universitas Negeri Jakarta (Present)"                                                          
          />
          <ResumeCardEd
            title="Senior High School"
            subTitle="SMA Negeri 10 Tangerang (June 2019)"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;

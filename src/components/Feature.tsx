import { GiTeacher } from "react-icons/gi";
import { FaHands, FaBrain  } from "react-icons/fa";
import { MdBusinessCenter, MdDashboard, MdOutlineAnalytics } from "react-icons/md";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Business Strategy"
            des="Business strategy skills create competitive advantages, inform efficient decisions, and drive organizational success in dynamic markets."
            icon={<MdBusinessCenter />}
          />
          <Card
            title="Teaching"
            des="Teaching skills empower effective learning and nurture a growth mindset within individuals, enhancing their overall development."
            icon={<GiTeacher />}
          />
          <Card
            title="Dashboarding"
            des="Dashboarding skills provide organizations with valuable insights, aiding in informed decision-making and optimizing performance."
            icon={<MdDashboard />}
          />
          <Card
            title="Machine Learning"
            des="Machine learning skills empower organizations to make accurate predictions and informed decisions about the future."
            icon={<FaBrain />}
          />
          <Card
            title="Data Scrapping"
            des="Data scraping skills extract structured information for future analysis, aiding organizations in informed decision-making."
            icon={<FaHands />}
          />
          <Card
            title="Data Analysis"
            des="Data analyst skills uncover data patterns, analyze for business benefit, and enhance informed decision-making within organizations."
            icon={<MdOutlineAnalytics />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;

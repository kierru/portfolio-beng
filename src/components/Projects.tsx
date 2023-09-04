import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo, projectFour, projectFive } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Bank Churn Prediction"
            des="This project aims to reduce churn to 7% and increase customer acquisition by 11% within the year through data analysis and insights."
            src={projectOne}
            href="https://drive.google.com/file/d/1AkOTwHDuCb4Xu0B1WefbFUmUaUvT0DvE/view?usp=sharing"
          />
          <ProjectsCard
            title="Sales Funnel Analysis"
            des="This project seeks to increase customer acquisition by 17% by analyzing and optimizing PeopleU's lead conversion process based on data insights."
            src={projectTwo}
            href="https://drive.google.com/file/d/1Sf8fj66PLXtoJaXg3geuyaJxs_FFb6wo/view?usp=sharing"
          />
          <ProjectsCard
            title="Price Subscription Analysis"
            des="This project involves reevaluating PeopleU's subscription package pricing to align with market rates and optimize growth, especially for business subscriptions."
            src={projectThree}
            href="https://drive.google.com/file/d/1uIwgbi2MhHU1jVyjKQIRizBBq7QOo4ph/view?usp=sharing"
          />
          <ProjectsCard
            title="Internet Service Provider Customer Churn"
            des="This project aims to reduce customer churn to 15% and enhance the product within one month by generating actionable insights."
            src={projectFour}
            href="https://drive.google.com/file/d/16hOr5J0Wm-P4qgFo4kqg3DeoXVRGTlER/view?usp=sharing"
          />
          <ProjectsCard
            title="Valorant Data Scrapping and Dashboarding"
            des="This project showcases my data expertise in scraping, cleaning, and visualizing data, utilizing tools like Python, Tableau, and Excel for analysis."
            src={projectFive}
            href="https://obadhius.notion.site/Valorant-Dashboard-Data-Scrapping-VCT-Pacific-080c09b09bb843b2b0f91581bfd0b89f?pvs=4"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;

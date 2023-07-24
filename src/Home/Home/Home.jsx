import CollegeGraduates from "../../components/CollegeGraduates/CollegeGraduates";
import PopularCollege from "../../components/PopularCollege/PopularCollege";
import ResearchPaper from "../../components/ResearchPaper/ResearchPaper";


const Home = () => {
    return (
      <div>
        <PopularCollege />
        <CollegeGraduates />
        <ResearchPaper/>
      </div>
    );
};

export default Home;
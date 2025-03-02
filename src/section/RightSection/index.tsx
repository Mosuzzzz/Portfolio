import ContentContainer from "../../components/ContentContainer";
import Skills from "../../components/Skills/Skills";
import { data } from "../../Content/experience";
import About from "../About";
import Education from "../Education/Education";
const RightSection = () => {
  return (
    <div className="grid gap-2 gap-y-40 px-3">
      <About />
      <ContentContainer title="Experience" data={data} />
      <Education></Education>
      <Skills></Skills>
    </div>
  );
}

export default RightSection;
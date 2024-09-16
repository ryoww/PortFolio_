import useWidth from "../../hooks/useWidth";
import PcSkills from "./SkillsPC";
import PhoneSkills from "./SkillsPhone";

const Skills = () => {
    const width = useWidth();

    return width >= 850 ? <PcSkills /> : <PhoneSkills />;
};

export default Skills;

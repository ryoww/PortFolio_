import useResponsive from "../../hooks/useResponsive";
import PcSkills from "./SkillsPC";
import PhoneSkills from "./SkillsPhone";

const Skills = () => {
    const { isPhone } = useResponsive();
    return isPhone ? <PhoneSkills /> : <PcSkills />;
};

export default Skills;

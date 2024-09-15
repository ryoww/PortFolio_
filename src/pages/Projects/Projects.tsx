import useWidth from "../../hooks/useWidth";
import PcProjects from "./ProjectsPC";
import PhoneProjects from "./ProjectsPhone";

const Projects = () => {
    const width = useWidth();

    return <>{width >= 850 ? <PcProjects /> : <PhoneProjects />}</>;
};

export default Projects;

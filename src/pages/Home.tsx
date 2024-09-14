import useWidth from "../hooks/useWidth";
import PcHome from "./HomePC";
import PhoneHome from "./HomePhone";

const Home = () => {
    const width = useWidth();

    return <>{width >= 850 ? <PcHome /> : <PhoneHome />}</>;
};

export default Home;

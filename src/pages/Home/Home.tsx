import useResponsive from "../../hooks/useResponsive";
import PcHome from "./HomePC";
import PhoneHome from "./HomePhone";

const Home = () => {
    const { isPhone } = useResponsive();

    return isPhone ? <PhoneHome /> : <PcHome />;
};

export default Home;

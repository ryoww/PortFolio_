import useWidth from "../../hooks/useWidth";
import PcProfile from "./ProfilePC";
import PhoneProfile from "./ProfilePhone";

const Profile = () => {
    const width = useWidth();

    return <>{width >= 850 ? <PcProfile /> : <PhoneProfile />}</>;
};

export default Profile;

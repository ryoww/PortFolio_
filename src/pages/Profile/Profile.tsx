import useResponsive from "../../hooks/useResponsive";
import PcProfile from "./ProfilePC";
import PhoneProfile from "./ProfilePhone";

const Profile = () => {
    const { isPhone } = useResponsive();
    return isPhone ? <PhoneProfile /> : <PcProfile />;
    // return <PhoneProfile />;
};

export default Profile;

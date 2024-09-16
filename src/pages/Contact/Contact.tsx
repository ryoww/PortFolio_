import PcContact from "./ContactPC";
import PhoneContact from "./ContactPhone";
import useResponsive from "../../hooks/useResponsive";

const Contact = () => {
    const { isPhone } = useResponsive();
    return isPhone ? <PhoneContact /> : <PcContact />;
};

export default Contact;

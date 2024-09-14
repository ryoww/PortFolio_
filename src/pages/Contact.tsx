import useWidth from "../hooks/useWidth";
import PcContact from "./ContactPC";
import PhoneContact from "./ContactPhone";

const Contact = () => {
    const width = useWidth();

    return <>{width >= 850 ? <PcContact /> : <PhoneContact />}</>;
};

export default Contact;

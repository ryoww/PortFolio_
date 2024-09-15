import PcContact from "./ContactPC";
import PhoneContact from "./ContactPhone";
import useWidth from "../../hooks/useWidth";

const Contact = () => {
    const width = useWidth();

    return width >= 850 ? <PcContact /> : <PhoneContact />;
};

export default Contact;

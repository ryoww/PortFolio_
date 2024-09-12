import { RxHamburgerMenu } from "react-icons/rx";
import { IconButton } from "@chakra-ui/react";

const HeaderPhone = () => {
    return (
        <>
            <IconButton
                variant={"outline"}
                aria-label="HamburgerIcon"
                icon={<RxHamburgerMenu />}
                size={"lg"}
            ></IconButton>
        </>
    );
};

export default HeaderPhone;

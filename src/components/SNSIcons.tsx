import { HStack } from "@chakra-ui/react";
import { HeaderIconProps } from "../constants/HeaderInfos";
import HeaderIcon from "./HeaderIcon";

const SNSIcons = ({ icons }: { icons: HeaderIconProps[] }) => {
    return (
        <>
            <HStack justifyContent={"center"}>
                {icons.map((icon, index) => (
                    <HeaderIcon
                        key={index}
                        ariaLabel={icon.ariaLabel}
                        icon={icon.icon}
                        onClick={icon.onClick}
                        pr={icon.pr}
                    ></HeaderIcon>
                ))}
            </HStack>
        </>
    );
};

export default SNSIcons;

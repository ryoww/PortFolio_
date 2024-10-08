import { HStack, useColorMode, Text, VStack } from "@chakra-ui/react";
import { getOnlyIcons, HeaderIconProps } from "../constants/HeaderInfos";
import useWidth from "../hooks/useWidth";
import HeaderIcon from "./HeaderIcon";

const PcFooter = ({ icons }: { icons: HeaderIconProps[] }) => {
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

const PhoneFooter = ({ icons }: { icons: HeaderIconProps[] }) => {
    return (
        <>
            <VStack width={"100%"} justifyContent={"center"} mb={"30px"}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                    各種SNS
                </Text>
                <HStack mt={2}>
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
            </VStack>
        </>
    );
};

const Footer = () => {
    const { colorMode } = useColorMode();
    const icons = getOnlyIcons(colorMode);
    const width = useWidth();
    return (
        <>
            {width >= 850 ? (
                <PcFooter icons={icons} />
            ) : (
                <PhoneFooter icons={icons} />
            )}
        </>
    );
};

export default Footer;

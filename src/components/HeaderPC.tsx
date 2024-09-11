import {
    HStack,
    useColorMode,
    Link as ChakraLink,
    Text,
    Image,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaTwitter } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";

import HeaderIcon, { HeaderIconProps } from "./HeaderIcon";
import { getColors } from "../constants/Color";

const HeaderPC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const Colors = getColors(colorMode);

    const location = useLocation();

    const pathname = location.pathname;

    const buttonInfos: HeaderIconProps[] = [
        {
            ariaLabel: "GitHub Icon",
            icon: <FaGithub />,
            onClick: () => window.open("https://github.com/ryoww", "_blank"),
            pr: 1,
        },
        {
            ariaLabel: "Twitter Icon",
            icon: <FaTwitter />,
            onClick: () => window.open("https://x.com/5th_ww", "_blank"),
            pr: 1,
        },
        {
            ariaLabel: "Qiita Icon",
            icon:
                colorMode === "light" ? (
                    <Image
                        src="/src/assets/qiita_black.png"
                        alt="Qiita"
                        boxSize="18px"
                    />
                ) : (
                    <Image
                        src="/src/assets/qiita_white.png"
                        alt="Qiita"
                        boxSize="18px"
                    />
                ),
            onClick: () => window.open("https://qiita.com/ryo-ww", "_blank"),
            pr: 10,
        },
        {
            ariaLabel: "Toggle Color Mode",
            icon: colorMode === "light" ? <FaMoon /> : <FaSun />,
            onClick: toggleColorMode,
            pr: 0,
        },
    ];

    const linkInfos = [
        {
            to: "/",
            linkName: "Home",
        },
        {
            to: "/skills",
            linkName: "Skills",
        },
        {
            to: "/profile",
            linkName: "Profile",
        },
        {
            to: "/contact",
            linkName: "Contact",
        },
    ];

    return (
        <>
            <HStack gap={5} pr={10}>
                {linkInfos.map((linkinfo, index) => (
                    <ChakraLink
                        as={RouterLink}
                        to={linkinfo.to}
                        key={index}
                        sx={{
                            color:
                                linkinfo.to === pathname
                                    ? Colors.accent
                                    : undefined,
                            borderBottom:
                                linkinfo.to === pathname ? "2px solid" : "none",
                            borderColor:
                                linkinfo.to === pathname
                                    ? Colors.accent
                                    : "transparent",
                            transition: "all 0.3s ease",
                            _hover: {
                                color: Colors.accent,
                            },
                        }}
                    >
                        <Text fontSize={"xl"} fontWeight={"semibold"}>
                            {linkinfo.linkName}
                        </Text>
                    </ChakraLink>
                ))}
            </HStack>

            {buttonInfos.map((buttonInfo, index) => (
                <HeaderIcon
                    key={index}
                    ariaLabel={buttonInfo.ariaLabel}
                    icon={buttonInfo.icon}
                    onClick={buttonInfo.onClick}
                    pr={buttonInfo.pr}
                />
            ))}
        </>
    );
};

export default HeaderPC;

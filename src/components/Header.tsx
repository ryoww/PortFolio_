import {
    Heading,
    HStack,
    Spacer,
    useColorMode,
    Image,
    Box,
    Text,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaTwitter } from "react-icons/fa";
import HeaderIcon, { HeaderIconProps } from "./HeaderIcon";
import { Outlet, useLocation, Link as RouterLink } from "react-router-dom";
import { getColors } from "../constants/Color";

import useWidth from "../hooks/useWidth";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const location = useLocation();

    const pathname = location.pathname;

    const Colors = getColors(colorMode);

    const width = useWidth();

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
            <HStack w={"100%"} p={6}>
                <HStack gap={2} alignItems={"baseline"}>
                    <Heading
                        pl={3}
                        size={"4xl"}
                        fontWeight={"bold"}
                        color={Colors.logoLink}
                        as={RouterLink}
                        to={"/"}
                    >
                        Ryo
                    </Heading>

                    <Box bg={Colors.accent} boxSize={3} />
                </HStack>

                <Spacer />

                {/* <Text>{pathname}</Text> */}

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
                                    linkinfo.to === pathname
                                        ? "2px solid"
                                        : "none",
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
            </HStack>

            <Outlet />

            <Text fontSize={"2xl"}>{width}</Text>
        </>
    );
};

export default Header;

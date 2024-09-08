import {
    Heading,
    HStack,
    Spacer,
    useColorMode,
    Image,
    Box,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaTwitter } from "react-icons/fa";
import HeaderIcon, { HeaderIconProps } from "./HeaderIcon";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

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

    return (
        <>
            <HStack w={"100%"} p={6}>
                <HStack gap={2} alignItems={"baseline"}>
                    <Heading
                        pl={3}
                        size={"4xl"}
                        fontWeight={"bold"}
                        color={colorMode === "light" ? "gray.800" : "gray.200"}
                    >
                        Ryo
                    </Heading>

                    <Box bg={"blue.400"} boxSize={3} />
                </HStack>

                <Spacer />

                <HStack gap={0}>
                    <Box bg={"red.400"} boxSize={75}>
                        test
                    </Box>
                    <Box bg={"blue.400"} boxSize={75}>
                        test
                    </Box>
                </HStack>

                <Spacer />

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
        </>
    );
};

export default Header;

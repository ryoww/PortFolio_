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

    const ButtonProps: HeaderIconProps[] = [
        {
            // id: 1,
            ariaLabel: "GitHub Icon",
            icon: <FaGithub />,
            onClick: () => window.open("https://github.com/ryoww", "_blank"),
            pr: 1,
        },
        {
            // id: 2,
            ariaLabel: "Twitter Icon",
            icon: <FaTwitter />,
            onClick: () => window.open("https://x.com/5th_ww", "_blank"),
            pr: 1,
        },
        {
            // id: 3,
            ariaLabel: "Qiita Icon",
            icon:
                colorMode === "light" ? (
                    <Image
                        src="/src/assets/qiita_black.png"
                        alt="Qiita"
                        boxSize="20px"
                    />
                ) : (
                    <Image
                        src="/src/assets/qiita_white.png"
                        alt="Qiita"
                        boxSize="20px"
                    />
                ),
            onClick: () => window.open("https://qiita.com/ryo-ww", "_blank"),
            pr: 10,
        },
        {
            // id: 4,
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

                    <Box gap={0} bg={"blue.400"} w={3} h={3} />
                </HStack>

                <Spacer />

                {ButtonProps.map((buttonProp) => (
                    <HeaderIcon
                        // key={buttonProp.id}
                        ariaLabel={buttonProp.ariaLabel}
                        icon={buttonProp.icon}
                        onClick={buttonProp.onClick}
                        pr={buttonProp.pr}
                    />
                ))}
            </HStack>
        </>
    );
};

export default Header;

import { FaGithub, FaMoon, FaSun, FaTwitter } from "react-icons/fa";
import { Image } from "@chakra-ui/react";

export interface HeaderIconProps {
    ariaLabel: string;
    icon: JSX.Element;
    onClick: () => void;
    pr: number;
}

export const getButtonInfos = (
    colorMode: string,
    toggleColorMode: () => void
) => {
    return [
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
};

export const getOnlyIcons = (colorMode: string) => {
    return [
        {
            ariaLabel: "GitHub Icon",
            icon: <FaGithub />,
            onClick: () => window.open("https://github.com/ryoww", "_blank"),
            pr: 2,
        },
        {
            ariaLabel: "Twitter Icon",
            icon: <FaTwitter />,
            onClick: () => window.open("https://x.com/5th_ww", "_blank"),
            pr: 2,
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
            pr: 2,
        },
    ];
};

export const LinkInfos = [
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

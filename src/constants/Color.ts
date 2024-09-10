export const Colors = {
    light: { logoLink: "gray.800", accent: "blue.400" },
    dark: { logoLink: "gray.200", accent: "blue.400" },
};

export const getColors = (colorMode: "dark" | "light") => {
    return Colors[colorMode];
};

export const Colors = {
    light: {},
    dark: {},
};

export const getColors = (colorMode: "light" | "dark") => {
    return Colors[colorMode];
};

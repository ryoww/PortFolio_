import useWidth from "./useWidth";

const useResponsive = () => {
    const width = useWidth();

    return {
        isPhone: width <= 900,
    };
};

export default useResponsive;

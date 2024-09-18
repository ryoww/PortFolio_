import { HStack, Spacer, useColorMode, Box, Heading } from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";

// my components
import { getColors } from "../constants/Color";
import HeaderPC from "./HeaderPC";
import HeaderPhone from "./HeaderPhone";
// import Footer from "./Footer";
import useResponsive from "../hooks/useResponsive";

const Header = () => {
    const { colorMode } = useColorMode();

    const Colors = getColors(colorMode);

    const { isPhone } = useResponsive();

    return (
        <>
            <HStack
                w={"100%"}
                pr={{ base: 1, md: 5 }}
                pl={{ base: 1, md: 8 }}
                mb={3}
            >
                <HStack
                    gap={{ base: 1, md: 2 }}
                    alignItems={"baseline"}
                    w={{ base: "120px", md: "150px" }}
                    h={{ base: "65px", md: "84px" }}
                >
                    {/* <svg
                        width="200"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text
                            x="10"
                            y="40"
                            font-family="Arial"
                            font-size="40"
                            fill="white"
                            fontWeight={"bold"}
                        >
                            Ryo.
                        </text>
                    </svg> */}
                    <Heading
                        size={{ base: "2xl", md: "4xl" }}
                        fontSize={{ base: "5xl", md: "7xl" }}
                        fontWeight={"bold"}
                        color={Colors.logoLink}
                        as={RouterLink}
                        to={"/"}
                    >
                        Ryo
                    </Heading>

                    <Box bg={Colors.accent} boxSize={{ base: 2, md: 3 }} />
                </HStack>

                <Spacer />

                {isPhone ? <HeaderPhone /> : <HeaderPC />}
            </HStack>

            <Outlet />

            {/* <Footer /> */}

            {/* <Text fontSize={"2xl"}>{width}</Text> */}
        </>
    );
};

export default Header;

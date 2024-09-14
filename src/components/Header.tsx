import {
    HStack,
    Spacer,
    useColorMode,
    Box,
    Text,
    Heading,
} from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";

// my components
import { getColors } from "../constants/Color";
import useWidth from "../hooks/useWidth";
import HeaderPC from "./HeaderPC";
import HeaderPhone from "./HeaderPhone";
import Footer from "./Footer";

const Header = () => {
    const { colorMode } = useColorMode();

    const Colors = getColors(colorMode);

    const width = useWidth();

    return (
        <>
            <HStack w={"100%"} pr={{ base: 1, md: 5 }} pl={{ base: 1, md: 8 }}>
                <HStack
                    gap={{ base: 1, md: 2 }}
                    alignItems={"baseline"}
                    w={{ base: "120px", md: "150px" }}
                    h={{ base: "65px", md: "84px" }}
                >
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

                {width >= 850 ? <HeaderPC /> : <HeaderPhone />}
            </HStack>

            <Outlet />

            <Footer />

            {/* <Text fontSize={"2xl"}>{width}</Text> */}
        </>
    );
};

export default Header;

import { HStack, Spacer, useColorMode, Box, Text } from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";

// my components
import { getColors } from "../constants/Color";
import useWidth from "../hooks/useWidth";
import HeaderPC from "./HeaderPC";
import HeaderPhone from "./HeaderPhone";

const Header = () => {
    const { colorMode } = useColorMode();

    const Colors = getColors(colorMode);

    const width = useWidth();

    return (
        <>
            <HStack w={"100%"} p={{ base: 1, md: 6 }} pl={{ base: 1, md: 8 }}>
                <HStack gap={2} alignItems={"baseline"} w={"150px"} h={"84"}>
                    <Text
                        size={"4xl"}
                        fontSize={"7xl"}
                        fontWeight={"bold"}
                        color={Colors.logoLink}
                        as={RouterLink}
                        to={"/"}
                        w={"130px"}
                        h={"70px"}
                        // bg={"red.400"}
                    >
                        Ryo
                    </Text>

                    <Box bg={Colors.accent} boxSize={3} />
                </HStack>

                <Spacer />

                {width >= 850 ? <HeaderPC /> : <HeaderPhone />}
            </HStack>

            <Outlet />

            <Text fontSize={"2xl"}>{width}</Text>
        </>
    );
};

export default Header;

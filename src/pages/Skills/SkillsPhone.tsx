import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";

import { IoStarSharp } from "react-icons/io5";

const PhoneSkills = () => {
    return (
        <>
            <VStack gap={0} bg={"gray.400"}>
                <Heading size={"3xl"}>Skills</Heading>

                <HStack w={"90%"} mt={5} bg={"teal.500"}>
                    <Text fontSize={"3xl"} fontWeight={"bold"}>
                        Python
                    </Text>
                    <Icon boxSize={"50px"} bg={"blue.400"}>
                        <IoStarSharp />
                    </Icon>

                    <Text></Text>
                </HStack>
            </VStack>
            <Box bg={"blue.400"} w={"100%"} h={"100%"}>
                <Text size={"3xl"}>PhoneSkills</Text>
            </Box>
        </>
    );
};

export default PhoneSkills;

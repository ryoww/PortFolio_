import { Text, HStack, VStack, Box, Icon } from "@chakra-ui/react";
import { steps } from "../../constants/ProfileInfos";

const Steps = () => {
    return (
        <VStack w={"100%"} gap={0}>
            {steps.map((step, index) => {
                const isLastStep = index === steps.length - 1;

                return (
                    <HStack key={step.title} w={"78%"} align={"start"}>
                        {/* アイコンと垂直線のVStack */}
                        <VStack alignItems="center">
                            <Box
                                boxSize={"40px"}
                                bg={isLastStep ? "gray.800" : "blue.200"}
                                rounded={"full"}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                borderWidth={isLastStep ? "2px" : "0"}
                                borderColor={
                                    isLastStep ? "blue.200" : "transparent"
                                }
                                // border={
                                //     isLastStep ? "4px solid blue.400" : "none"
                                // }
                            >
                                <Icon
                                    as={step.icon}
                                    boxSize={"25px"}
                                    color={isLastStep ? "blue.200" : "gray.800"}
                                />
                            </Box>
                            {index !== steps.length - 1 && (
                                <Box
                                    w={"2px"}
                                    h={"40px"}
                                    bg={"blue.300"}
                                    mb={2}
                                />
                            )}
                        </VStack>
                        {/* テキストと説明 */}
                        <VStack gap={2} ml={3} align={"start"} w={"100%"}>
                            <Text fontSize={"2xl"} fontWeight={"bold"}>
                                {step.title}
                            </Text>
                            <Box
                                bg={"gray.200"}
                                borderRadius={"md"}
                                border={"1px"}
                                borderColor={"gray.300"}
                                p={3}
                            >
                                <Text color={"gray.700"} fontSize={"lg"}>
                                    {step.description}
                                </Text>
                            </Box>
                        </VStack>
                    </HStack>
                );
            })}
        </VStack>
    );
};

export default Steps;

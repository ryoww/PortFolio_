import { Box, Heading, HStack, Text, VStack, Image } from "@chakra-ui/react";
import Steps from "../../components/Steps/Steps";

const PcProfile = () => {
    return (
        <>
            <VStack w={"100%"} mt={"70px"} gap={0}>
                <Heading size={"3xl"}>About me</Heading>

                <HStack w={"100%"}>
                    <Box w={"50%"}>
                        <Image
                            mt={"40px"}
                            ml={"60%"}
                            // mr={"auto"}
                            // ml={"auto"}
                            src={
                                import.meta.env.VITE_REPO_NAME +
                                "/images/cup.png"
                            }
                            boxSize={"300px"}
                            borderRadius={"full"}
                        />
                    </Box>

                    <VStack w={"40%"}>
                        <Text
                            w={"80%"}
                            mt={3}
                            fontSize={"lg"}
                            textAlign={"center"}
                        >
                            千葉県在住、都立高専(荒川)で情報通信を学びつつ機械学習に目覚めて静岡大学
                            情報学部で機械学習を学ぶ(予定)の現高専5年生
                        </Text>

                        <Text
                            w={"75%"}
                            mt={2}
                            fontSize={"lg"}
                            textAlign={"center"}
                        >
                            なお研究室は無線通信の模様
                        </Text>

                        <Text
                            w={"90%"}
                            mt={3}
                            fontSize={"xl"}
                            textAlign={"center"}
                        >
                            最近フロントエンドにハマりつつある......
                        </Text>
                    </VStack>
                </HStack>

                <Heading size={"3xl"} mt={"100px"} mb={"40px"}>
                    My History
                </Heading>

                <Box>
                    <Steps />
                </Box>
            </VStack>
        </>
    );
};

export default PcProfile;

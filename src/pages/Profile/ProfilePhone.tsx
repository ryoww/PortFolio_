import { Heading, Text, VStack, Image } from "@chakra-ui/react";
import Steps from "../../components/Steps/Steps";

const PhoneProfile = () => {
    return (
        <>
            <VStack>
                <Heading size={"3xl"}>About me</Heading>

                <Image
                    mt={"40px"}
                    mr={"auto"}
                    ml={"auto"}
                    src={import.meta.env.VITE_REPO_NAME + "/images/cup.png"}
                    boxSize={"190px"}
                    borderRadius={"full"}
                />

                <Text
                    textAlign={"center"}
                    w={"80%"}
                    mt={3}
                    fontSize={"lg"}
                    wordBreak={"normal"}
                >
                    千葉県在住、都立高専(荒川)で情報通信を学びつつ機械学習に目覚めて静岡大学
                    情報学部で機械学習 を学ぶ(予定)の現高専5年生
                </Text>

                <Text textAlign={"center"} w={"75%"} mt={2} fontSize={"lg"}>
                    なお研究室は無線通信の模様
                </Text>

                <Text textAlign={"center"} w={"90%"} mt={3} fontSize={"lg"}>
                    最近フロントエンドにハマりつつある......
                </Text>

                <Heading size={"3xl"} mt={"40px"} mb={"40px"}>
                    My History
                </Heading>

                <Steps />
            </VStack>
        </>
    );
};

export default PhoneProfile;

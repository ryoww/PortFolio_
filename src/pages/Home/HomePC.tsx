import {
    Box,
    Heading,
    HStack,
    Text,
    Image,
    VStack,
    useColorMode,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import SNSIcons from "../../components/SNSIcons";
import { getOnlyIcons } from "../../constants/HeaderInfos";

const PcHome = () => {
    const { colorMode } = useColorMode();

    const icons = getOnlyIcons(colorMode);

    return (
        <>
            <Box w={"100%"} alignItems={"center"} display={"flex"} h={"70vh"}>
                <HStack w={"100%"} gap={0}>
                    <VStack w={"70%"} alignItems={"flex-start"}>
                        <Text
                            w={"90%"}
                            fontWeight={"bold"}
                            fontSize={"100px"}
                            alignSelf={"center"}
                            // justifyContent={"center"}
                            h={"450px"}
                        >
                            Hello, I'm <br />
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "Ryotaro \n Shimozawa",
                                    3000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "Front-End \n Engineer",
                                    3000,
                                    "ML Engineer",
                                    3000,
                                ]}
                                wrapper="span"
                                speed={30}
                                style={{ display: "inline-block" }}
                                repeat={Infinity}
                            />
                        </Text>

                        <Heading w={"90%"} size={"2xl"} ml={"100px"}>
                            About this site
                        </Heading>

                        <Text w={"70%"} fontSize={"3xl"} ml={"150px"}>
                            ここは機械学習/フロントエンドエンジニアになりたい一般学生が
                            作ったポートフォリオサイトです。
                        </Text>

                        <Box mt={"30px"} ml={"150px"}>
                            <SNSIcons icons={icons} />
                        </Box>
                    </VStack>

                    <VStack alignSelf={"center"} flex={1}>
                        <Image
                            mt={"80px"}
                            mr={"auto"}
                            ml={"auto"}
                            src="/images/cup.png"
                            boxSize={"250px"}
                            borderRadius={"full"}
                        />
                    </VStack>
                </HStack>
            </Box>
        </>
    );
};

export default PcHome;

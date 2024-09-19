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
import useResponsive from "../../hooks/useResponsive";

const PcHome = () => {
    const { colorMode } = useColorMode();

    const icons = getOnlyIcons(colorMode);

    const { isTablet } = useResponsive();

    return (
        <>
            <Box w={"100%"} alignItems={"center"} display={"flex"} h={"70vh"}>
                <HStack w={"100%"} gap={0}>
                    <VStack w={"60%"} alignItems={"flex-start"}>
                        <Text
                            w={"90%"}
                            fontWeight={"bold"}
                            fontSize={"100px"}
                            alignSelf={"center"}
                            // justifyContent={"center"}
                            h={isTablet ? "450px" : "300px"}
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

                        <Heading w={"90%"} size={"xl"} ml={"100px"}>
                            About this site
                        </Heading>

                        <Text w={"80%"} fontSize={"xl"} ml={"110px"}>
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
                            src={
                                import.meta.env.VITE_REPO_NAME +
                                "/images/cup.png"
                            }
                            boxSize={"350px"}
                            borderRadius={"full"}
                        />

                        <Text mt={"30px"} fontSize={"xl"}></Text>
                    </VStack>
                </HStack>
            </Box>
        </>
    );
};

export default PcHome;

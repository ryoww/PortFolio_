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
            <HStack w={"100%"} display={"flex"} h={"100%"} mt={"60px"}>
                <VStack w={"70%"}>
                    <Text
                        ml={"5%"}
                        w={"90%"}
                        fontWeight={"bold"}
                        fontSize={"80px"}
                        h={"360px"}
                    >
                        Hello, I'm <br />
                        <TypeAnimation
                            sequence={[
                                "Ryotaro \n Shimozawa",
                                3000,
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

                <Image
                    flex={1}
                    bg={"gray.500"}
                    src={import.meta.env.VITE_REPO_NAME + "/images/cup.png"}
                    boxSize={"340px"}
                    borderRadius={"full"}
                />
            </HStack>
        </>
    );
};

export default PcHome;

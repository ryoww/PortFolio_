import { Text, Image, VStack, Heading } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const PhoneHome = () => {
    return (
        <>
            <VStack
                w={"100%"}
                // bg={"blue.900"}
            >
                <Heading
                    ml={2}
                    fontWeight={"bold"}
                    size={"3xl"}
                    alignSelf={"flex-start"}
                    h={"100px"}
                >
                    Hello, I'm <br />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Ryotaro \n Shimozawa",
                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                            "ML Engineer",
                            3000,
                            "Front-End \n Engineer",
                            3000,
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ display: "inline-block" }}
                        repeat={Infinity}
                    />
                </Heading>

                <Image
                    mt={"80px"}
                    mr={"auto"}
                    ml={"auto"}
                    src="src/assets/cup.png"
                    boxSize={"190px"}
                    borderRadius={"full"}
                ></Image>

                <Heading mt={"30px"} size={"2xl"}>
                    About this site
                </Heading>

                <Text textAlign={"center"} mt={"15px"} w={"75%"}>
                    ここは機械学習/フロントエンドエンジニアになりたい一般学生が作ったポートフォリオサイトです。
                </Text>
            </VStack>
        </>
    );
};

export default PhoneHome;

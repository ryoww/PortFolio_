import { Text, Image, VStack, Heading } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const PhoneHome = () => {
    return (
        <>
            <VStack w={"100%"}>
                <Heading
                    ml={3}
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
                    src="/images/cup.png"
                    boxSize={"190px"}
                    borderRadius={"full"}
                />

                <Heading mt={"30px"} size={"2xl"}>
                    About this site
                </Heading>

                <Text textAlign={"center"} mt={"15px"} mb={"30px"} w={"75%"}>
                    ここは機械学習/フロントエンドエンジニアになりたい一般学生が作ったポートフォリオサイトです。
                </Text>
            </VStack>
        </>
    );
};

export default PhoneHome;

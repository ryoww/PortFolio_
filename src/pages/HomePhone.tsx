import { Box, Text, Image, VStack, Heading } from "@chakra-ui/react";
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
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            "ML Engineer",
                            2000,
                            "Front-End \n Engineer",
                            2000,
                            // "for Chinchillas",
                            // 2000,
                        ]}
                        wrapper="span"
                        speed={40}
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

                <Text mt={"30px"}>下沢 亮太郎</Text>
            </VStack>
        </>
    );
};

export default PhoneHome;

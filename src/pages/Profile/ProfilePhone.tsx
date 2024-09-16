import {
    Heading,
    Text,
    VStack,
    Image,
    Icon,
    Box,
    Stepper,
    Step,
    StepIndicator,
    StepTitle,
    StepDescription,
    StepSeparator,
    useSteps,
} from "@chakra-ui/react";
import { FaBaby, FaProjectDiagram, FaSchool } from "react-icons/fa";
import Steps from "../../components/Steps/Steps";

const BabyIcon = () => <Icon as={FaBaby} size={5} />;

const SchoolIcon = () => <Icon as={FaSchool} size={5} />;

const ProjectIcon = () => <Icon as={FaProjectDiagram} size={5} />;

const steps = [
    {
        title: "2005年",
        description: "埼玉県春日部市にて爆誕",
        icon: <BabyIcon />,
    },
    { title: "2020年", description: "都立高専 入学", icon: <SchoolIcon /> },
    {
        title: "2022年",
        description: "機械学習に目覚める",
        icon: <ProjectIcon />,
    },
    { title: "2025年3月", description: "高専卒業予定", icon: <SchoolIcon /> },
    {
        title: "2025年4月",
        description: "静岡大学情報学部 入学予定",
        icon: <SchoolIcon />,
    },
];

const PhoneProfile = () => {
    const { activeStep } = useSteps({
        index: steps.length - 1,
        count: steps.length,
    });

    return (
        <>
            <VStack>
                <Heading size={"3xl"}>About me</Heading>

                <Image
                    mt={"40px"}
                    mr={"auto"}
                    ml={"auto"}
                    src="/images/cup.png"
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

                <Text textAlign={"center"} w={"80%"} mt={3} fontSize={"lg"}>
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

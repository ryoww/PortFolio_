import {
    Box,
    Heading,
    ListItem,
    Stack,
    Text,
    UnorderedList,
    VStack,
} from "@chakra-ui/react";

export const Skills_dict = {
    "Python ★★★★☆": {
        "Machine Leaning": ["PyTorch", "Scikit-learn"],
        "Flask ": ["LINE Bot Server", "SQL CRUD Server"],
        "Scrape ": ["Requests", "Selenium"],
        "Transmission Simulater": ["Reproduction IEEE 802.11"],
    },
    Linux: {},
};

export const SkillsTree = () => {
    return (
        <>
            <VStack w={"80%"} mt={5} alignItems={"start"}>
                {Object.entries(Skills_dict).map(
                    ([skill, categories], index) => (
                        <Box key={`skill-${index}`}>
                            <Text fontSize={"3xl"} fontWeight={"bold"}>
                                {skill}
                            </Text>
                            <VStack ml={3}>
                                <UnorderedList fontSize={"2xl"}>
                                    {Object.entries(categories).map(
                                        ([category, skills], subIndex) => (
                                            <ListItem
                                                key={`category-${index}-${subIndex}`}
                                            >
                                                {category}
                                                <Stack fontSize={"xl"}>
                                                    {skills.map(
                                                        (skill, skillIndex) => (
                                                            <Text
                                                                key={`skill-${index}-${subIndex}-${skillIndex}`}
                                                            >
                                                                {skill}
                                                            </Text>
                                                        )
                                                    )}
                                                </Stack>
                                            </ListItem>
                                        )
                                    )}
                                </UnorderedList>
                            </VStack>
                        </Box>
                    )
                )}
            </VStack>
        </>
    );
};

const PhoneSkills = () => {
    return (
        <>
            <VStack gap={0}>
                <Heading size={"3xl"}>Skills</Heading>

                <SkillsTree />
            </VStack>
        </>
    );
};

export default PhoneSkills;

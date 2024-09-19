import { Box, Text } from "@chakra-ui/react";
import useWidth from "../../hooks/useWidth";

const PcSkills = () => {
    const width = useWidth();

    return (
        <>
            <Box bg={"blue.400"} w={"100%"} h={"100%"}>
                <Text size={"3xl"}>PcSkills</Text>
                <Text fontSize={"2xl"}>{width}</Text>
            </Box>
        </>
    );
};

export default PcSkills;

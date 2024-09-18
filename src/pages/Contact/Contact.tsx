import { Heading, Link, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Contact = () => {
    return (
        <>
            <VStack
                w={"100%"}
                h={"30vh"}
                justifyContent={"center"}
                // bg={"gray.600"}
            >
                <Heading size={"3xl"}>Contact</Heading>

                <Link
                    isExternal
                    mt={4}
                    fontSize={"2xl"}
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbgwsBGkdjmzPVvxZCbzpJRlPCNGpFMnxgDhxGMWHbGcDNWNVdZLdQVkpCNzgSzkxbQNNq"
                >
                    お問い合わせ
                    <ExternalLinkIcon ml={1} pb={1} />
                </Link>
            </VStack>
        </>
    );
};

export default Contact;

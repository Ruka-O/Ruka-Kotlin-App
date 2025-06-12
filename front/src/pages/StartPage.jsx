import {useNavigate} from "react-router";
import {Box, Button, Center, Text} from "@yamada-ui/react";

const StartPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box>
                <Center
                    flexDirection="column"
                    height="100vh"
                    gap="md"
                >
                    <Text
                        w="100vw"
                        fontSize="9xl"
                        fontWeight="bold"
                        color="#FF6B6B"
                    >
                        Palette Time
                    </Text>
                    <Button
                        bg="#ff6B6B"
                        variant="solid"
                        size="lg"
                        onClick={() => navigate("/palette")}
                        fontSize="3xl"
                        color="#2e2e2e"
                    >
                        Start
                    </Button>
                </Center>
            </Box>
        </>
    )
}

export default StartPage;
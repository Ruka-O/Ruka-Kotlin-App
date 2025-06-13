import {Box, Container, HStack, Text} from "@yamada-ui/react";
import AddColor from "../component/AddColor.jsx";
import Menu from "../component/Menu.jsx";

const PaintPage = () => {
    const text = "My palette";
    const url = "/palette";
    return (
        <>
            <Container h="100vh">
                <Box marginY="xl" h="4xs">
                    <Text
                        padding="0"
                        color="#2e2e2e"
                        fontSize="8xl">
                        Add color
                    </Text>
                </Box>

                <HStack>
                    <Box maxWidth="false" sx={{flex: 1}}>
                        <Menu text={text} url={url}/>
                    </Box>
                    <Box maxWidth="false" sx={{flex: 3}}>
                        <AddColor/>
                    </Box>
                </HStack>
            </Container>
        </>
    )
}

export default PaintPage;
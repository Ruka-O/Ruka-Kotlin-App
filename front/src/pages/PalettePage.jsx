import ColorPalette from "../component/ColorPalette.jsx";
import Title from "../component/Title.jsx";
import Menu from "../component/Menu.jsx";
import {Box, Container, HStack} from "@yamada-ui/react";

const PalettePage = () => {
    const text = "Add color";
    const url = "/paint";
    return (
        <>
            <Container h="100vh">
                <Title/>
                <HStack>
                    <Box maxWidth="false" sx={{flex: 1}}>
                        <Menu text={text} url={url}/>
                    </Box>
                    <Box maxWidth="false" sx={{flex: 3}}>
                        <ColorPalette/>
                    </Box>
                </HStack>
            </Container>
        </>
    )
}

export default PalettePage;
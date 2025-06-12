import {Center, HStack, IconButton, Text} from "@yamada-ui/react";
import {useNavigate} from "react-router";
import {HouseIcon, PaletteIcon} from "@yamada-ui/lucide";
import ColorPalette from "./ColorPalette.jsx";

const Title = () => {
    const navigate = useNavigate();
    return (
        <>
            <Center>
                <HStack>
                    <IconButton
                        variant="ghost"
                        color="#FF6B6B"
                        onClick={() => navigate("/")}
                        icon=<HouseIcon boxSize="7xs"/>
                    />
                    <Text
                        fontSize="8xl"
                        color="#2e2e2e"
                        fontFamily="Hannotate SC"
                    >
                        My Palette
                    </Text>
                    <IconButton
                        variant="ghost"
                        color="#FF6B6B"
                        onClick={() => navigate("/paint")}
                        icon=<PaletteIcon boxSize="7xs"/>
                    />
                </HStack>
            </Center>
        </>
    )
}

export default Title;
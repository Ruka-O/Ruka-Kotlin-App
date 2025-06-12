import {Center, HStack, IconButton, Text} from "@yamada-ui/react";
import {useNavigate} from "react-router";
import {HouseIcon, PaletteIcon} from "@yamada-ui/lucide";

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
                        fontSize="5xl"
                        color="#2e2e2e"
                    >
                        Today's color
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
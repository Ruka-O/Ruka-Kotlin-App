import {Box, Button, Text, VStack} from "@yamada-ui/react";
import {HouseIcon, PaletteIcon, PaintbrushIcon} from "@yamada-ui/lucide";
import {useNavigate} from "react-router";

const Menu = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <VStack w="25vw" h="xl">
                <Text
                    fontSize="xl"
                >
                    -MENU-
                </Text>
                <Button
                    bg="#ff6b6b"
                    leftIcon={<HouseIcon/>}
                    onClick={() => navigate("/")}
                >
                    Home
                </Button>
                {props.url === "/palette" ?
                    <Button bg="#ff6b6b"
                            leftIcon={<PaletteIcon/>}
                            onClick={() => navigate(props.url)}
                    >
                        {props.text}
                    </Button>
                    :
                    <Button bg="#ff6b6b"
                            leftIcon={<PaintbrushIcon/>}
                            onClick={() => navigate(props.url)}
                    >
                        {props.text}
                    </Button>
                }
            </VStack>
        </>
    )
}

export default Menu;
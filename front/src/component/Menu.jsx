import {Box, Button, Card, Text, VStack} from "@yamada-ui/react";
import {HouseIcon, PaletteIcon, PaintbrushIcon} from "@yamada-ui/lucide";
import {useNavigate} from "react-router";

const Menu = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Card w="25vw" h="md" marginX="md" padding="md" variant="outline" borderColor="#ff6b6b">

                <VStack>
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                    >
                        -MENU-
                    </Text>
                    <Button
                        bg="#ff6b6b"
                        leftIcon={<HouseIcon/>}
                        fontSize="xl"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </Button>
                    {props.url === "/palette" ?
                        <Button bg="#ff6b6b"
                                leftIcon={<PaletteIcon/>}
                                fontSize="xl"
                                onClick={() => navigate(props.url)}
                        >
                            {props.text}
                        </Button>
                        :
                        <Button bg="#ff6b6b"
                                leftIcon={<PaintbrushIcon/>}
                                fontSize="xl"
                                onClick={() => navigate(props.url)}
                        >
                            {props.text}
                        </Button>
                    }
                </VStack>
            </Card>
        </>
    )
}

export default Menu;
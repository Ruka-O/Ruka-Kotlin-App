import {useEffect, useState} from "react";
import {Box, Card, Center, Grid, HStack, IconButton, Text, VStack} from "@yamada-ui/react";
import {ja} from "date-fns/locale";
import {format} from "date-fns";
import {EraserIcon} from "@yamada-ui/lucide"

const ColorPalette = () => {

    const [details, setDetails] = useState([])
    const today = format(new Date(), 'yyyy-MM-dd', {locale: ja});
    // const today = "2025-06-13"

    const getDetail = async () => {
        const response = await fetch(`/api/detail/${today}`).then(res => res.json());
        setDetails(response);
    }

    useEffect(() => {
        (async () => {
            await getDetail();
        })()
    }, [details]);

    const postDelete = async (id) => {
        await fetch(`/api/detail/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        })
        await getDetail();
    }

    return (
        <>
            <Center>
                <VStack alignItems="center" gap="lg" margin="lg" w="100vw">
                    {details === [] ? <></>
                        : details.map(detail => {
                            return (
                                <Card
                                    bg="#fffefc"
                                    variant="outline"
                                    borderWidth="0.2vw"
                                    borderColor={detail.tag.color}
                                    w="45vw"
                                    // h="4xs"
                                    p="sm"
                                    key={detail.id}>
                                    <Grid marginY="auto" templateColumns="repeat(3,1fr)" gap="xs" alignItems="center">

                                        <Box>
                                            <Text>{detail.time}</Text>
                                        </Box>
                                        <Box>
                                            <Text marginY="sm" fontSize="lg">
                                                {detail.genre.genreName}
                                            </Text>
                                            <Text marginY="sm" fontSize="xl">
                                                {detail.detail}
                                            </Text>
                                        </Box>
                                        <Box marginLeft="auto">
                                            <IconButton
                                                marginRight="md"
                                                variant="ghost"
                                                color="#FF6B6B"
                                                onClick={() => postDelete(detail.id)}
                                                icon=<EraserIcon boxSize="12xs"/>
                                            />
                                        </Box>
                                    </Grid>
                                </Card>
                            )
                        })}
                </VStack>
            </Center>
        </>
    )
}
export default ColorPalette;
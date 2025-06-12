import {useEffect, useState} from "react";
import {Box, Card, Center, Grid, HStack, IconButton, Text, VStack} from "@yamada-ui/react";
import {ja} from "date-fns/locale";
import {format} from "date-fns";
import {EraserIcon} from "@yamada-ui/lucide"
import {DatePicker} from "@yamada-ui/calendar";

const ColorPalette = () => {

    const [details, setDetails] = useState([])
    const [nothing, setNothing] = useState(true);
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd', {locale: ja}))

    const getDetail = async () => {
        const response = await fetch(`/api/detail/${date}`).then(res => res.json());
        if (response.length === 0) {
            setNothing(true);
            setDetails(response);
        } else {
            setNothing(false);
            setDetails(response);
        }
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
            <VStack
                alignItems="center"
                h="70vh"
                gap="lg" w="50vw">
                <DatePicker
                    variant="flushed"
                    defaultValue={new Date()}
                    w="30vw"
                    fontSize="2xl"
                    focusBorderColor="#ff6b6b"
                    onChange={async (e) => {
                        const selectDate = format(e, "yyyy-MM-dd")
                        setDate(selectDate)
                        await getDetail()
                    }}
                />
                {nothing ?
                    <Text fontSize="4xl">
                        No color...
                        <br/>
                        Let's painting!
                    </Text>
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
                                <Grid marginY="auto" templateColumns="repeat(3,1fr)" gap="md"
                                      alignItems="center">
                                    <Box>
                                        <Text>{detail.time}</Text>
                                    </Box>
                                    <Box textAlign="left" w="md">
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
        </>
    )
}
export default ColorPalette;
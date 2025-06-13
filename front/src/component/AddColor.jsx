import {DatePicker} from "@yamada-ui/calendar";
import {
    Button,
    Card,
    ColorSwatch,
    Container,
    HStack,
    Option,
    Select,
    Spacer,
    Text, Textarea,
    VStack
} from "@yamada-ui/react";
import {useEffect, useState} from "react";
import {format} from "date-fns";
import {useNavigate} from "react-router";
import {ja} from "date-fns/locale";

const AddColor = () => {
    const navigate = useNavigate()

    const [genres, setGenres] = useState([]);
    const [tags, setTags] = useState([]);

    const [hourTime, setHourTime] = useState("");
    const [minutesTime, setMinutesTime] = useState("");
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd', {locale: ja}));
    const [detail, setDetail] = useState("");
    const [tag, setTag] = useState("");
    const [genre, setGenre] = useState("");

    const [fail, setFail] = useState(false);

    const hour = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    const minutes = ['00', '15', '30', '45'];

    useEffect(() => {
        (async () => {
            const getGenre = await fetch("/api/genre").then(res => res.json());
            setGenres(getGenre);
            const getTag = await fetch("/api/tag").then(res => res.json());
            setTags(getTag);
        })()
    }, [])

    const postRequest = async () => {
        if (!(hourTime === "" && minutesTime === "" && detail === "" && tag === "" && genre === "")) {
            setFail(true);
            const tagId = tags.filter(ele => ele.tagName === tag).at(-1).id;
            const genreId = genres.filter(ele => ele.genreName === genre).at(-1).id;
            const request = {
                tagId,
                genreId,
                detail,
                date,
                time: `${hourTime}:${minutesTime}`
            }
            await fetch("/api/detail",
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(request),

                })
            navigate("/palette")
        } else {
            setFail(true);
        }
    }

    return (
        <>
            <VStack marginY="sm" w="40vw" h="70vh">
                {fail ?
                    <Text color="red">
                        Lack of data
                    </Text>
                    :
                    <></>}
                <Card
                    variant="outline"
                    marginX="sm"
                    w="50vw"
                >
                    <Container
                        paddingY="md"
                        maxWidth="false"
                    >
                        <Text textAlign="left" margin="0" padding="0" fontSize="md">Date</Text>
                        <HStack gap="md">
                            <DatePicker
                                variant="flushed"
                                defaultValue={new Date()}
                                focusBorderColor="#ff6b6b"
                                onChange={(e) => {
                                    const selectDate = format(e, "yyyy-MM-dd")
                                    setDate(selectDate)
                                }}
                            />
                            <Select
                                placeholder="--"
                                variant={"flushed"}
                                placeholderInOptions={false}
                                onChange={setHourTime}
                                focusBorderColor="#ff6b6b"
                            >
                                {hour.map((ele) => {
                                    return (
                                        <Option key={ele} value={ele}>{ele}</Option>
                                    )
                                })}
                            </Select>
                            <Text> : </Text>
                            <Select
                                placeholder="--"
                                variant={"flushed"}
                                placeholderInOptions={false}
                                onChange={setMinutesTime}
                                focusBorderColor="#ff6b6b"
                            >
                                {minutes.map(ele => {
                                    return (
                                        <Option key={ele} value={ele}>{ele}</Option>
                                    )
                                })}
                            </Select>
                        </HStack>
                    </Container>
                    <Container paddingY="md">
                        <Text textAlign="left" margin="0" padding="0" fontSize="md">Color</Text>
                        <HStack>
                            <Select
                                placeholder="select genre"
                                variant={"flushed"}
                                placeholderInOptions={false}
                                focusBorderColor="#ff6b6b"
                                onChange={setGenre}
                            >
                                {genres.map((ele) => {
                                    return (
                                        <Option key={ele.id} value={ele.genreName}>{ele.genreName}</Option>
                                    )
                                })}
                            </Select>
                            <Select
                                placeholder="select tag"
                                variant={"flushed"}
                                placeholderInOptions={false}
                                focusBorderColor="#ff6b6b"
                                onChange={setTag}
                            >
                                {tags.map((ele) => {
                                    return (
                                        <Option key={ele.id} value={ele.tagName}>
                                            <ColorSwatch variant="rounded" color={ele.color}/></Option>
                                    )
                                })}
                            </Select>
                        </HStack>
                    </Container>
                    <Container paddingY="md">
                        <Text textAlign="left" margin="0" padding="0" fontSize="md">
                            Detail
                        </Text>
                        <Textarea
                            type="text"
                            textAlign="left"
                            focusBorderColor="#ff6b6b"
                            onChange={(e) => setDetail(e.target.value)}
                        />
                    </Container>
                    <Container paddingY="md">
                        <HStack marginY="md">
                            <Button
                                size="lg"
                                onClick={() => navigate("/palette")}
                            >
                                Cancel
                            </Button>
                            <Spacer/>
                            <Button
                                bg="#ff6B6B"
                                variant="solid"
                                size="lg"
                                color="#2e2e2e"
                                onClick={postRequest}
                            >
                                New Colors
                            </Button>
                        </HStack>
                    </Container>
                </Card>
            </VStack>
        </>
    )
}

export default AddColor;
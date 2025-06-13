import {Box, Center, Container, Text} from "@yamada-ui/react";

const Title = () => {
    return (
        <>
            {/*<Center h="4xs">*/}
            <Box marginY="xl" h="4xs">

                <Text
                    fontSize="8xl"
                    color="#2e2e2e"
                    fontFamily="Hannotate SC"
                >
                    My Palette
                </Text>
            </Box>
            {/*</Center>*/}
        </>
    )
}

export default Title;
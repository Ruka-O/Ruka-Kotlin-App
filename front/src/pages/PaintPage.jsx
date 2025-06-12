import {Text} from "@yamada-ui/react";
import AddColor from "../component/AddColor.jsx";

const PaintPage = () => {
    return (
        <>
            <Text
                color="#2e2e2e"
                fontSize="5xl">
                Add a color
            </Text>
            <Text color="#6e6e6e" fontSize="md" marginY="sm">
                -新しい彩りを-
            </Text>
            <AddColor/>
        </>
    )
}

export default PaintPage;
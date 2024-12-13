import { Stack } from "expo-router";
import GlobalProvider from "../../context/GlobalProvider";

const RoutesLayout = () => {
    return (
        <GlobalProvider>
            <Stack screenOptions={{ headerShown: false}}></Stack>
        </GlobalProvider>
    )
}

export default RoutesLayout
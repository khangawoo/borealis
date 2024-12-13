import { Stack } from "expo-router";
import GlobalProvider from '../context/GlobalProvider'

const Layout = () => {
    return (
        <GlobalProvider>
            <Stack>
                <Stack.Screen name="index" options= {{
                    headerShown: false
                }} />
                <Stack.Screen name="(routes)" options= {{
                    headerShown: false
                }} />
            </Stack>
        </GlobalProvider>
    )
}

export default Layout
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "../../constants/images"

const Presets = () => {
    return (
        <LinearGradient 
            colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
            className="flex-1 justify-center items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >

        <View>
            <Text>Presets Page</Text>

            <Link href="/settings">
                <Image
                    source={images.settings}
                    style={{ width: 50, height: 50 }}
                />
            </Link>
        </View>

        </LinearGradient>

    );
};

export default Presets;

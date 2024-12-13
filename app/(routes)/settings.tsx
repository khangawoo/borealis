import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "../../constants/images";

const Settings = () => {
    const router = useRouter();

    return (
        <LinearGradient
            colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
            className="flex-1 justify-center items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ paddingBottom: 80 }}
        >
            <TouchableOpacity
                className="w-64 h-12 bg-white/10 justify-center items-center mb-4 rounded-lg"
                onPress={() => router.replace('/presets')}
            >
                <Text className="text-lg text-white">Presets</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="w-64 h-12 bg-white/10 justify-center items-center mb-4 rounded-lg"
                onPress={() => router.replace('/notifications')}
            >
                <Text className="text-lg text-white">Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="w-64 h-12 bg-white/10 justify-center items-center mb-4 rounded-lg"
                onPress={() => router.replace('/threshold')}
            >
                <Text className="text-lg text-white">Threshold</Text>
            </TouchableOpacity>

            <View style={{ position: 'absolute', bottom: 50 }}>
                <TouchableOpacity onPress={() => router.replace('/home')}>
                    <Image
                        source={images.settings}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default Settings;

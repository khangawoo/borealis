import { Link } from "expo-router";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import images  from "../../constants/images"
import RecordAnalyzeButton from "../../islands/RecordAnalyze";

const Home = () => {
    return (
        <LinearGradient 
        colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
        className="flex-1 justify-center items-center"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
        {/* Play/Pause Button */}
        <RecordAnalyzeButton/>
        {/* Settings Button */}
        <View style={{ position: 'absolute', bottom: 50 }}>
            <Link href="/settings">
            <Image
                source={images.settings}               
                style={{width: 50, height: 50}}
            />
            </Link>
        </View>

        </LinearGradient>
    )
}

export default Home

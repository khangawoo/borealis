import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text , Image} from "react-native";
import images from "../../constants/images";
import notificationToggle from "../../components/notificationToggle";

const Notifications = () => {
    return (
        <LinearGradient 
            colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
            className="flex-1 justify-center items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Text>
                    Notifications
                </Text>
                <Text>
                    Vibrate
                </Text>
                <Text>
                    Flashes
                </Text>
                
                <View style={{ position: "absolute", bottom: 50 }}>
                    <Link href="/settings">
                    <Image
                        source={images.settings}               
                        style={{width: 50, height: 50}}
                    />
                    </Link>
                </View>
                
            </View>
        </LinearGradient>
    )
}

export default Notifications;
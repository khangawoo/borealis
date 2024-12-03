import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, Switch } from "react-native";
import images from "../../constants/images";
import notifications from "../../components/notifications";

const Notifications = () => {
    const { scheduleNotification, notificationPermission } = notifications();
    const [ isNotificationEnabled, setIsNotificationEnabled ] = useState(notificationPermission);

    const toggleNotification = () => {
        if (isNotificationEnabled) {
            console.log("Notifications disabled");
        } else {
            console.log("Notifications enabled");
        }
        setIsNotificationEnabled(!isNotificationEnabled);
    };

    useEffect(() => {
        console.log("Notification permission status:", isNotificationEnabled);
    }, [isNotificationEnabled]);

    return (
        <LinearGradient
            colors={["#01efac", "#2082a6", "#524096", "#5f2a84"]}
            className="flex-1 justify-center items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View>
                <Text>Notification Example</Text>
                <Switch
                    value={isNotificationEnabled}
                    onValueChange={toggleNotification}
                    thumbColor={isNotificationEnabled ? "#01efac" : "#ccc"}
                    trackColor={{ false: "#767577", true: "#2082a6" }}
                />
            </View>

            <View style={{ position: "absolute", bottom: 50 }}>
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

export default Notifications;
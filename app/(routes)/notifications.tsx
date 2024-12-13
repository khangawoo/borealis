import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Switch } from "react-native";
import images from "../../constants/images";
import notifications from "../../components/notifications";

const Notifications = () => {
    const { scheduleNotification, notificationPermission } = notifications();
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(notificationPermission);

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
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 80 }}>
                <Text style={{ fontSize: 32, fontWeight: "700", color: "#fff", marginBottom: 20 }}>Notifications</Text>
                <View style={{
                    backgroundColor: "#fff",
                    padding: 20,
                    borderRadius: 15,
                    width: 280,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <Text style={{ fontSize: 18, color: "#333", marginBottom: 10 }}>Enable Notifications</Text>
                    <Switch
                        value={isNotificationEnabled}
                        onValueChange={toggleNotification}
                        thumbColor={isNotificationEnabled ? "#01efac" : "#ccc"}
                        trackColor={{ false: "#767577", true: "#2082a6" }}
                    />
                </View>
            </View>

            <View style={{ position: "absolute", bottom: 50, right: 20 }}>
                <Link href="/settings">
                    <Image
                        source={images.settings}
                        style={{ width: 50, height: 50, resizeMode: "contain" }}
                    />
                </Link>
            </View>
        </LinearGradient>
    );
};

export default Notifications;

import { useState, useEffect } from "react";
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const notifications = () => {
  const [notificationPermission, setNotificationPermission] = useState(true);

  useEffect(() => {
    // Setting notification handler for received notifications
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);

  // Simple permission request for iOS
  const requestPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();

        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          setNotificationPermission(status === 'granted');
          return status === 'granted';
        }

        setNotificationPermission(true);
        return true;
      }

      setNotificationPermission(true); // For platforms other than iOS
      return true;
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      setNotificationPermission(false);
      return false;
    }
  };

  // Request permission when app starts
  useEffect(() => {
    requestPermission();
  }, []);

  // Function to schedule a local notification
  const scheduleNotification = async (title: string, body: string, seconds: number = 0) => {
    if (notificationPermission) {
      try {
        await Notifications.scheduleNotificationAsync({
          content: {
            title,
            body,
          },
          trigger: seconds > 0 ? { seconds } : null, // Trigger notification after a delay (in seconds)
        });
      } catch (error) {
        console.error("Error scheduling notification:", error);
      }
    } else {
      console.warn("Notifications are disabled. Cannot schedule notification.");
    }
  };

  // Function to cancel all notifications
  const cancelAllNotifications = async () => {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();
      console.log("All notifications cancelled.");
    } catch (error) {
      console.error("Error cancelling notifications:", error);
    }
  };

  // Function to get all scheduled notifications
  const getAllScheduledNotifications = async () => {
    try {
      const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
      console.log("Scheduled Notifications: ", scheduledNotifications);
    } catch (error) {
      console.error("Error getting scheduled notifications:", error);
    }
  };

  // Return the functions to use in other parts of your app
  return {
    requestPermission,
    scheduleNotification,
    cancelAllNotifications,
    getAllScheduledNotifications,
    notificationPermission,
  };
};

export default notifications;

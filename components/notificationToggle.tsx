import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

type notificationToggleProps = {
  label: string;
  isEnabled: boolean;
  onToggle: () => void;
};

const notificationToggle: React.FC<notificationToggleProps> = ({ label, isEnabled, onToggle }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, color: '#fff' }}>{label}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: isEnabled ? '#4CAF50' : '#FF6347',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 25,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onToggle}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>
          {isEnabled ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default notificationToggle;
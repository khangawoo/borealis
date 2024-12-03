import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text } from "react-native";

const Threshold = () => {
    const [value, setValue] = useState(80); // Initialize slider value at 80

    const handleSliderChange = (newValue: number) => {
        setValue(newValue);
    }
    return (
        <LinearGradient 
            colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
            className="flex-1 justify-center items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Threshold</Text>

            {/* Display the current slider value */}
            <Text style={{ fontSize: 18, marginTop: 20 }}>Current Value: {value}</Text>
        </View>

        </LinearGradient>
    )
}

export default Threshold;
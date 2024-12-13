import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import images from '../../constants/images'; 
import { useGlobalContext } from '../../context/GlobalProvider';

const Threshhold = () => {
    const { lowerThreshold, setLowerThreshold, upperThreshold, setUpperThreshold } = useGlobalContext()

    console.log('Lower Threshold:', lowerThreshold);  // Log to verify the value
    console.log('Upper Threshold:', upperThreshold);  // Log to verify the value

    const handleLowerThresholdChange = (value: string) => {
        const numValue = parseInt(value, 10);
        if (!isNaN(numValue)) {
            const newLowerThreshold = Math.max(0, Math.min(numValue, parseInt(upperThreshold, 10) - 5));
            setLowerThreshold(String(newLowerThreshold));
        }
    };

    const handleUpperThresholdChange = (value: string) => {
        const numValue = parseInt(value, 10);
        if (!isNaN(numValue)) {
            const newUpperThreshold = Math.max(parseInt(lowerThreshold, 10) + 5, Math.min(numValue, 100));
            setUpperThreshold(String(newUpperThreshold)); 
        }
    };

    return (
        <LinearGradient
            colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Threshold Settings</Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Current Lower Threshold: {lowerThreshold}</Text>
            <Text style={{ fontSize: 18, marginBottom: 30 }}>Current Upper Threshold: {upperThreshold}</Text>

            {/* Input fields for the thresholds */}
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 10,
                        borderRadius: 8,
                        width: 100,
                        textAlign: 'center',
                    }}
                    keyboardType="numeric"
                    value={lowerThreshold}  // Bind the state value to the input
                    onChangeText={handleLowerThresholdChange} // Handle input changes
                />
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 10,
                        borderRadius: 8,
                        width: 100,
                        textAlign: 'center',
                    }}
                    keyboardType="numeric"
                    value={upperThreshold}  // Bind the state value to the input
                    onChangeText={handleUpperThresholdChange} // Handle input changes
                />
            </View>

            {/* Save button */}
            <TouchableOpacity
                style={{
                    marginTop: 20,
                    backgroundColor: '#2082a6',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                }}
                onPress={() => {
                    // You can save these values to a backend or local storage if needed
                    console.log('Lower Threshold:', lowerThreshold);
                    console.log('Upper Threshold:', upperThreshold);
                }}
            >
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Save Thresholds</Text>
            </TouchableOpacity>

            {/* Settings Button */}
            <View style={{ position: 'absolute', bottom: 50 }}>
                <Link href="/settings">
                    <Image
                        source={images.settings} // Ensure the correct image path is used
                        style={{ width: 50, height: 50 }}
                    />
                </Link>
            </View>
        </LinearGradient>
    );
};

export default Threshhold;
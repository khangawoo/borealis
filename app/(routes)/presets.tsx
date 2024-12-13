import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';

// Define the Preset type
interface Preset {
  id: string;
  name: string;
  lowerBound: number;
  upperBound: number;
}

const Presets = () => {
  const router = useRouter();
  const { lowerThreshold, setLowerThreshold, upperThreshold, setUpperThreshold } = useGlobalContext()

  // 3 default presets with lower and upper bounds
  const defaultPresets: Preset[] = [
    { id: '1', name: 'Default', lowerBound: 20, upperBound: 60 },
    { id: '2', name: 'Library', lowerBound: 10, upperBound: 30 },
    { id: '3', name: 'Bar', lowerBound: 50, upperBound: 80 },
  ];

  // State to hold selected preset (with correct type)
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null);

  // Handle preset selection (with correct type)
  const handlePresetSelect = (preset: Preset) => {
    setSelectedPreset(preset);
    setLowerThreshold(preset.lowerBound);
    setUpperThreshold(preset.upperBound);
  };

  // Navigate back to Settings page
  const handleBackToSettings = () => {
    router.replace('/settings');
  };

  return (
    <LinearGradient
      colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
      className="flex-1 justify-center items-center"
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ paddingBottom: 80 }}
    >
      <View style={{ alignItems: 'center' }}>
        <Text className="text-2xl text-white mb-6">Select a Preset</Text>
        
        {defaultPresets.map((preset) => (
          <TouchableOpacity
            key={preset.id}
            className="w-64 h-16 bg-white/10 flex-row justify-between items-center px-4 mb-4 rounded-lg"
            onPress={() => handlePresetSelect(preset)}
          >
            <Text className="text-lg text-white">{preset.name}</Text>
            <Text className="text-lg text-white">{preset.lowerBound} - {preset.upperBound}</Text>
          </TouchableOpacity>
        ))}

        {selectedPreset && (
          <View style={{ marginTop: 20, padding: 10, backgroundColor: '#ffffff20', borderRadius: 10 }}>
            <Text className="text-lg text-white">Selected: {selectedPreset.name}</Text>
            <Text className="text-lg text-white">Lower Bound: {selectedPreset.lowerBound}</Text>
            <Text className="text-lg text-white">Upper Bound: {selectedPreset.upperBound}</Text>
          </View>
        )}

        {/* Back to Settings Button */}
        <TouchableOpacity
          className="w-64 h-12 bg-white/10 flex-row justify-center items-center px-4 mt-6 rounded-lg"
          onPress={handleBackToSettings}
        >
          <Text className="text-lg text-white">Back to Settings</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Presets;

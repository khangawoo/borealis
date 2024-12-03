import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import images from "../../constants/images";

const Presets = () => {
    const [presets, setPresets] = useState([
        { id: "1", name: "Default", lowerBound: 30, upperBound: 70 },
    ]);
    const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);  // Fixed typing here
    const [newPresetName, setNewPresetName] = useState("");
    const [editingPreset, setEditingPreset] = useState<string | null>(null);  // Fixed typing here

    // Load presets from AsyncStorage on mount
    useEffect(() => {
        const loadPresets = async () => {
            try {
                const storedPresets = await AsyncStorage.getItem("presets");
                if (storedPresets) {
                    setPresets(JSON.parse(storedPresets));
                }
            } catch (error) {
                console.error("Failed to load presets from AsyncStorage", error);
            }
        };

        loadPresets();
    }, []);

    // Save presets to AsyncStorage whenever they change
    useEffect(() => {
        const savePresets = async () => {
            try {
                await AsyncStorage.setItem("presets", JSON.stringify(presets));
            } catch (error) {
                console.error("Failed to save presets to AsyncStorage", error);
            }
        };

        savePresets();
    }, [presets]);

    // Add a new preset
    const addPreset = () => {
        if (newPresetName.trim() === "") return;
        setPresets([
            ...presets,
            {
                id: Date.now().toString(),
                name: newPresetName,
                lowerBound: 30,
                upperBound: 70,
            },
        ]);
        setNewPresetName("");
    };

    // Edit a preset name
    const renamePreset = (id: string, newName: string) => {  // Added string type for newName
        setPresets((prevPresets) =>
            prevPresets.map((preset) =>
                preset.id === id ? { ...preset, name: newName } : preset
            )
        );
    };

    return (
        <LinearGradient
            colors={["#01efac", "#2082a6", "#524096", "#5f2a84"]}
            className="flex-1 justify-center items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View className="w-full p-4">
                <Text className="text-white text-xl mb-4">Presets Page</Text>

                {/* Input for new preset */}
                <View className="flex-row mb-4 items-center">
                    <TextInput
                        value={newPresetName}
                        onChangeText={setNewPresetName}
                        placeholder="Enter preset name"
                        placeholderTextColor="#ccc"
                        className="flex-1 h-12 bg-white/20 text-white px-4 rounded-lg"
                        style={{ maxWidth: "70%" }}
                    />
                    <TouchableOpacity
                        onPress={addPreset}
                        className="bg-white/20 ml-2 px-4 rounded-lg justify-center"
                    >
                        <Text className="text-white">Add</Text>
                    </TouchableOpacity>
                </View>

                {/* List of presets */}
                <FlatList
                    data={presets}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedPresetId(item.id)} // Select the preset
                            className={`mb-4 px-4 py-4 rounded-lg ${
                                selectedPresetId === item.id ? "bg-white/30" : "bg-white/10"
                            }`}
                            style={{ minHeight: 100 }} // Increased box height
                        >
                            {editingPreset === item.id ? (
                                <TextInput
                                    value={item.name}
                                    onChangeText={(text) => renamePreset(item.id, text)}
                                    onBlur={() => setEditingPreset(null)}
                                    className="text-white bg-transparent border-b border-white mb-2"
                                    style={{ maxWidth: "80%" }} // Shorter name line
                                />
                            ) : (
                                <Text
                                    className="text-white text-lg mb-2"
                                    onPress={() => setEditingPreset(item.id)}
                                >
                                    {item.name}
                                </Text>
                            )}
                            <View className="flex-row justify-between">
                                <Text className="text-white">
                                    Lower: {item.lowerBound}
                                </Text>
                                <Text className="text-white">
                                    Upper: {item.upperBound}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
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

export default Presets;

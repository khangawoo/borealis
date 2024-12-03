import React, { useState, useEffect } from 'react';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

export const captureDecibels = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [decibels, setDecibels] = useState<number>(0);
    const [meteringData, setMeteringData] = useState<number>(0);
    const [waveformData, setWaveformData] = useState<number[]>(Array(10).fill(0));

    const referenceOffset = 80;

    useEffect(() => {
        // Request permission for recording
        const initializeRecorder = async () => {
        const hasPermission = await AudioRecorder.requestAuthorization();
        if (!hasPermission) {
            console.error('Audio recording permission denied');
            return;
        }

        // Attach progress listener to capture metering data
        AudioRecorder.onProgress = (data: any) => {
            if (data.currentMetering !== undefined) {
            // Save metering data
            setMeteringData(data.currentMetering);

            // Calculate decibels (current metering + reference offset for adjustment)
            const currentDecibels = Math.max(0, data.currentMetering + referenceOffset);
            setDecibels(currentDecibels);

            // Waveform
            setWaveformData((prevData) => {
                const newData = [...prevData, currentDecibels];
                if (newData.length > 10) {
                  newData.shift();
                }
                return newData;
              });
            }
          };
        };
        initializeRecorder();
    }, []);

    const startRecording = async () => {
        try {
        // Define the path where you want to save the audio file
        const path = AudioUtils.DocumentDirectoryPath + '/recorded_audio.aac'; // Custom path

        // Initialize the recorder with the file path and enable metering
        await AudioRecorder.prepareRecordingAtPath(path, {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: 'High',
            AudioEncoding: 'aac',
            MeteringEnabled: true, // Enable audio metering
        });

        await AudioRecorder.startRecording();
        setIsRecording(true);
        } catch (error) {
            console.error('Error starting recording', error);
        }
    };

    const stopRecording = async () => {
        try {
            await AudioRecorder.stopRecording();
            setIsRecording(false);
            setDecibels(0);
            setWaveformData([0, 0, 0, 0, 0])
        } catch (error) {
            console.error('Error stopping recording', error);
        }
    };

    return { decibels, meteringData, isRecording, startRecording, stopRecording, waveformData };
};

export default captureDecibels;
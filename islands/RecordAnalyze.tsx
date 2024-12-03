import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import { Svg, Rect } from 'react-native-svg';
import images from "../constants/images";
import captureDecibels from '../components/captureDecibels';
import Waveform from '../components/waveform';

export default function RecordAnalyzeButton() {
  const { decibels, meteringData, isRecording, startRecording, stopRecording, waveformData } = captureDecibels();

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', bottom: 180 }}>
      <Waveform waveformData={waveformData}/>
      <Text style={{ paddingBottom: 70, fontSize: 40 }}>
        Decibels: {Math.floor(decibels)}
      </Text>

      <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
        <Image
          source={isRecording ? images.pause : images.play}
          style={{
            width: 225,
            height: 225,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

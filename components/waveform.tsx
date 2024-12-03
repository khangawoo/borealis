import React from 'react';
import { Svg, Rect } from 'react-native-svg';

interface WaveformProps {
  waveformData: number[];
}

const Waveform: React.FC<WaveformProps> = ({ waveformData }) => {
  const step = 300 / waveformData.length; // Spread out bars evenly
  return (
    <Svg width="300" height="200" style={{ position: 'absolute', bottom: 400 }}>
      {waveformData.map((decibel, index) => {
        const x = step * index;
        const height = Math.max(1, decibel); // Ensure minimum height
        const y = 200 - height;
        return (
          <Rect
            key={index}
            x={x}
            y={y}
            width={step - 1} // Adjust bar width for spacing
            height={height}
            fill="navy" // Bar color
          />
        );
      })}
    </Svg>
  );
};

export default Waveform;
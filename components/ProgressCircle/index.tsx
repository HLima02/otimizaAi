import React from 'react'
import { Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

import { styles } from './style'

const radius = 100
const strokeWidth = 20
const size = 250
const circumference = 2 * Math.PI * radius
const progress = 0.75

export default function ProgressCircle({currentGoal, currentEarning }:any) {
  const goalProgressPercent = (currentEarning * 100) / currentGoal

  console.log(goalProgressPercent)

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={300} height={250} >
        <Circle
          stroke="#eee"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#00e0ff"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
        />
      </Svg>

      {/* Texto central */}
      <View style={styles.centerContent}>
        <Text style={styles.percent}>
          {Math.round(goalProgressPercent)}%
        </Text>
        <Text style={styles.currentEarning}>R$ {currentEarning.toFixed(2)}</Text>
        <Text style={styles.currentGoal}>R$ {currentGoal.toFixed(2)}</Text>
      </View>
    </View>
  )
}



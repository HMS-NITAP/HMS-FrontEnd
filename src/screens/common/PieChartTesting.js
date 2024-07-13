import React from 'react';
import { Text, View } from 'react-native';
import { VictoryPie } from 'victory-native';


const graphicData = [{ y: 10 }, { y: 50 }, { y: 40 }];
const graphicColor = ['#388087', '#6fb3b8', '#badfe7'];

function PieChartTesting() {
  return (
    <View style={{}}>
      <VictoryPie data={graphicData} width={250} height={250} colorScale={graphicColor} innerRadius={50} />
      <Text>HELLO</Text>
    </View>
  );
}

export default PieChartTesting;
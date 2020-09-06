import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import MacbookPro from './pages/macbookPro'
import BasicComponent from './pages/basicComponent/index'
import FlexBox from './pages/flexBox/index'
import PositionReact from './pages/positionReact/index';
import PropDinamis from './pages/propsDinamis';
import StateDinamis from './pages/stateDinamis';
import Comunication from './pages/comunication';

//funcional Component => Arrow function
const App = () => {
  return (
    <ScrollView>
      {/* <BasicComponent />
      <FlexBox /> */}
      {/* <MacbookPro />
      <PositionReact /> */}
      {/* <PropDinamis /> */}
      {/* <StateDinamis /> */}
      <Comunication />
    </ScrollView>
  )
}

export default App;
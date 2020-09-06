import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, ScrollView } from 'react-native';

const BasicComponent = () => {
    return (
      <View>
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}></View>
        <Text style={styles.text}>Coba</Text>
        <Text>lagi</Text>
        <SiapaTau />
        <Gambar />
        <TextInput style={{ borderWidth: 1 }} />
        <Tekno />
      </View>
    )
  }
  
  //Functional Component
  const SiapaTau = () => {
    return (
      <Text>Siapa Tau Bisa</Text>
    )
  }
  
  const Gambar = () => {
    return (
      <Image source={{ uri: 'https://placeimg.com/100/100/tech' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}></Image>
    )
  }
  
  //class Component
  class Tekno extends Component {
    render() {
      return (
        <View>
          <Text style={{ color: 'red', fontSize: 40, fontStyle: 'italic', fontWeight: 'bold' }}>Ini adalah Class Component</Text>
          <Gambar />
        </View>
      )
    }
  }
  
  //styling
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      color: '#10ac84',
      fontWeight: 'bold',
      marginLeft: 200,
      marginTop: 20
    }
  })

  export default BasicComponent;
import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const MacbookPro = (props) => {
  return (
    <View style={styles.wraper} >
      <Image source={macbook} style={styles.product} />
      <Text style={styles.tittleProduct}>New Macbook Pro 2020</Text>
      <Text style={styles.tempat}>Jakarta Utara</Text>
      <TouchableHighlight onPress={props.onPressBeli} >
      <View style={styles.wraperButton}>
        <Text style={styles.textButton}>BELI</Text>
      </View>
      </TouchableHighlight>      
    </View>
  )
}

const styles = StyleSheet.create({
  wraper: {
    padding: 12,
    backgroundColor: '#2f2f2f2f',
    width: 212,
    borderRadius: 8,
    alignSelf: 'center'
  },
  product: {
    width: 188,
    height: 107,
    borderRadius: 8
  },
  tittleProduct: {
    color: 'orange',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12
  },
  tempat: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 5
  },
  wraperButton: {
    paddingVertical: 6,
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    marginTop: 20
  },
  textButton: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800'
  }
})

export default MacbookPro;

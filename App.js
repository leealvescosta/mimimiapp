import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class mimimi extends Component {
  render() {
    return <View style={styles.body}>
      <View>
        <Text style={styles.titulo}>Qual seu mimimi?</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder="Digite aqui seu mimimi ..." />
      </View>
      <View style={styles.area}>

      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  iputArea: {
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 40,
    margin: 20,
    padding: 10
  }
});
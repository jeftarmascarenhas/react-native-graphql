import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

export default class Input extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

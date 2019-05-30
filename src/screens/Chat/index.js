import React from 'react';
import { Text, View, ScrollView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

StatusBar.setBarStyle('light-content')
StatusBar.setBackgroundColor('#069')

import styles from './styles'
import Input from './Component/input'

const Chat = ({
    params,
}) => (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'IOS' ? 'padding' : null}>
      <ScrollView contentContainerStyle={styles.conversation}>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleRight]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleRight]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleRight]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleLeft]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
        <View style={[styles.buddle, styles.bubbleRight]}>
          <Text style={styles.author}>Jeftar Mascarenhas</Text>
          <Text style={styles.message}>Message Text</Text>
        </View>
      </ScrollView>
      <Input />
    </KeyboardAvoidingView>
);

export default Chat;

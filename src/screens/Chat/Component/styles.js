import { StyleSheet, Platform, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  inputContainer: {
    height: 42,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#fafafa',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: statusBarHeight,
  },
  input: {
    flex: 1,
    height: 30, // Cause Height of 42 - paddingVertical(6) = 30
    paddingHorizontal: 10,
    paddingVertical: 0, // The android heve a default
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
  },
  button: {
    marginLeft: 10,
    color: '#358CFF',
    fontWeight: 'bold', // fontSize default is 14 on React Native
  }
})

export default styles
import { StyleSheet, Platform, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const statusBarHeight = Platform.OS === 'ios' ? 20 : 0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#068',
    paddingTop: statusBarHeight,
  },
  conversation: {
    padding: 10,
  },
  buddle: {
    padding: 6,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 0,
    marginTop: 10,
    maxWidth: width - 60,
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#333',
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
  bubbleLeft: {
    alignSelf: 'flex-start',
  },
  bubbleRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#D1EDC1',
  }
})

export default styles
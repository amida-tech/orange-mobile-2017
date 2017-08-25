import { StyleSheet } from 'react-native';

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  authContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    padding: 30,
    flex: 1,
  },
  inputIcon: {
    width: 30,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    width: 150,
  },
  logContainer: {
     flex: 1,
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
  },
  logText: {
    fontWeight: 'bold',
    fontSize: 45,
    color: '#ffffff',
  },
  text: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default styles;
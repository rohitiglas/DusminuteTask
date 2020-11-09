import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexGrow: 1,
  },
  errorText: {
    marginVertical: 10,
    color: 'red',
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: 'white',
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#01d0c0',
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#01d0c0',
    paddingVertical: 12,
  },
  signupContainer: {
    margin: 20,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#2980b6',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  line1: {
    fontFamily: 'bold',
    marginBottom: 10,
    fontSize: 25,
    color: '#F5692C',
    textAlign: 'center',
    fontWeight: '700',
  },
  line2: {
    marginBottom: 40,
    fontSize: 22,
    color: '#CACACA',
    textAlign: 'center',
    fontWeight: '700',
  },
  line3: {
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
    color: '#696969',
    textAlign: 'center',
  },
});

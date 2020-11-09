import React, {useState} from 'react';
import {
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {appColor} from '../../utils/Color';

const Login = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const onLogin = () => {
    navigation.navigate('ProductPage');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <StatusBar barStyle="light-content" backgroundColor={appColor} />
        <Image source={require('../../assets/dus_minute.jpeg')} />
        <Text style={styles.line1}>LOG IN</Text>
        <Text style={styles.line2}>Good to see you</Text>
        <Text style={styles.line3}>Facing trouble logging in? Click here</Text>
        <TextInput
          maxLength={10}
          keyboardType="numeric"
          testID={'input-mobile-number'}
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
          placeholder={'Enter your mobile number'}
          placeholderTextColor="#B6B6B6"
          style={styles.input}
        />
        <TouchableOpacity
          testID={'submit-button'}
          style={styles.buttonContainer}
          onPress={onLogin}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

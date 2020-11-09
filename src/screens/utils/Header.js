import {appColor} from '../../utils/Color';
import {
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Header = ({title, isBack, cartPress, cartQuantity, backPress}) => (
  <View
    style={{
      alignItems: 'center',
      backgroundColor: appColor,
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: !isBack ? 'space-between' : null,
    }}>
    {isBack && (
      <TouchableNativeFeedback
        style={{
          marginLeft: 10,
          width: 40,
          height: 40,
          justifyContent: 'center',
        }}
        onPress={backPress}>
        <Image
          style={{marginRight: 10, width: 30, height: 30}}
          source={require('../../assets/backArrow.png')}
        />
      </TouchableNativeFeedback>
    )}

    <Text
      style={{
        marginLeft: 20,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      }}>
      {title}
    </Text>

    {!isBack && (
      <View>
        <TouchableOpacity
          style={{marginRight: 20, width: 40, height: 40}}
          onPress={cartPress}>
          <Image
            style={{marginRight: 20, width: 40, height: 40}}
            source={require('../../assets/cart.png')}
          />
        </TouchableOpacity>
        {cartQuantity !== 0 && (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: 25,
              width: 25,
              borderRadius: 12.5,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              justifyContent: 'center',
              bottom: 25,
              position: 'absolute',
              right: 18,
            }}>
            <Text style={{textAlign: 'center'}}>{cartQuantity}</Text>
          </View>
        )}
      </View>
    )}
  </View>
);
export default Header;

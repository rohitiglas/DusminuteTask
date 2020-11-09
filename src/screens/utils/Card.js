import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 0.5,
    borderRadius: 1,
    borderColor: '#fffafa',
    borderBottomWidth: 0,
    shadowColor: '#f1ecec',
    shadowOffser: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default Card;

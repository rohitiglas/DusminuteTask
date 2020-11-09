import React, {Component} from 'react';
import {Button, Text, View, StatusBar, Alert} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './styles';
import {fetchAllMealData} from '../actions/loginActions';
import CartList from './FoodCartList';
import {appColor} from '../../utils/Color';
import Header from '../utils/Header';

class FoodCart extends Component {
  backPress = () => {
    this.props.navigation.pop();
  };
  onOrder = () => {
    Alert.alert('', 'Order Successfully');
      this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={appColor} />
        <Header title="Food Cart" isBack={true} backPress={this.backPress} />

        {this.props.cartList.length === 0 && (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                marginLeft: 20,
                color: '#525252',
                fontSize: 26,
                fontWeight: 'bold',
              }}>
              Cart Empty
            </Text>
          </View>
        )}

        <CartList navigation={this.props.navigation} />

        {this.props.cartList.length > 0 && (
          <View style={styles.buttonContainer}>
            <Button onPress={this.onOrder} title="Order" color={appColor} />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.login.cart,
    cartQuantity: state.login.cartQuantity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      fetchAllMealData: bindActionCreators(fetchAllMealData, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodCart);

import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

import {setAddItemToCart, setRemoveItemToCart} from '../actions/loginActions';
import Card from '../utils/Card';

const addItem = (item, props, quantity) => {
  let value = quantity + 1;
  props.addItemToCart(Object.assign(item, {quantity: value}));
};
const removeItem = (item, props, quantity) => {
  let value = quantity - 1;
  props.removeItemToCart(Object.assign(item, {quantity: value}));
};

const CartList = (props) => {
  return (
    <FlatList
      data={props.cartList}
      renderItem={({item}) => (
        <Card>
          <View style={styles.rowView}>
            <Image
              source={{uri: item.strCategoryThumb}}
              resizeMode="stretch"
              style={styles.imageStyle}
            />
            <View style={styles.rowViewStyle}>
              <Text style={styles.nameStyle}>{item.strCategory}</Text>
              <Text style={styles.productBrand}>{item.strCategory}</Text>
              <Text style={styles.productWeight}>{item.strCategory}</Text>

              {item.quantity === 0 && (
                <TouchableOpacity onPress={() => addItem(item, props, 0)}>
                  <View style={styles.addViewStyle}>
                    <Text style={styles.addTextStyle1}>ADD</Text>
                  </View>
                </TouchableOpacity>
              )}
              {item.quantity !== 0 && (
                <View style={styles.plusMinusViewStyle}>
                  <TouchableOpacity
                    onPress={() => addItem(item, props, item.quantity)}>
                    <View style={styles.plusView}>
                      <Text style={styles.plusTextStyle}>+</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.plusView}>
                    <Text style={styles.addTextStyle}>{item.quantity}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => removeItem(item, props, item.quantity)}>
                    <View style={styles.plusView}>
                      <Text style={styles.plusTextStyle}>-</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </Card>
      )}
      numColumns={1}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    allMealData: state.login.allMealData,
    cartList: state.login.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => {
      dispatch(setAddItemToCart(item));
    },
    removeItemToCart: (item) => {
      dispatch(setRemoveItemToCart(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

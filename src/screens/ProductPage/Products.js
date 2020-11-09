import React, {Component} from 'react';
import {ActivityIndicator, View, Alert, StatusBar} from 'react-native';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import styles from './styles';
import {fetchAllMealData} from '../actions/loginActions';
import MealList from './MealDataList';
import {appColor} from '../../utils/Color';
import Header from '../utils/Header';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      mealData: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.props.actions.fetchAllMealData(this.onSuccess, this.onError);
  }

  onSuccess = (data) => {
    this.setState({mealData: data.categories, isLoading: false});
  };
  onError = (error) => {
    this.setState({isLoading: false});
    Alert.alert('', 'Some error in api');
  };

  cartPress = () => {
    if (this.props.cartQuantity > 0) {
      this.props.navigation.navigate('FoodCart');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={appColor} />
        <Header
          title="Food Category"
          isBack={false}
          cartPress={this.cartPress}
          cartQuantity={this.props.cartQuantity}
        />

        {this.state.isLoading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}

        <MealList
          mealData={this.state.mealData}
          navigation={this.props.navigation}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

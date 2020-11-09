// In AppNavigation.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/LoginScreen/Login';
import Products from '../screens/ProductPage/Products';
import FoodCart from '../screens/ProductPage/FoodCart';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductPage"
          component={Products}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="FoodCart"
          component={FoodCart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

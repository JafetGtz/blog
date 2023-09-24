
// src/navigation/Navigation.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddPublicationForm from '../screens/formBlog';

const Stack = createStackNavigator();

const Navigation = () => {
  const navigationOptions = (title) => ({
    title,
  });

  const HomeStack = () => (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={navigationOptions('Blog Home')}
      />
      <Stack.Screen
        name="add"
        component={AddPublicationForm}
        options={navigationOptions('Nueva publicación')}
      />
      <Stack.Screen
        name="detail"
        component={DetailsScreen}
        options={navigationOptions('Blog Details')}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Navigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
// import HomeScreen from '../screens/HomeScreen';
// import AddJournalScreen from '../screens/AddJournalScreen';
// import JournalDetailScreen from '../screens/JournalDetailScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddJournal" component={AddJournalScreen} />
        <Stack.Screen name="JournalDetail" component={JournalDetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

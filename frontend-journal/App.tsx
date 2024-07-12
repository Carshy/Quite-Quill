import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/configStore';
import MainNavigation from './src/navigations/MainNavigation';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: "#fff",
//   }
// });

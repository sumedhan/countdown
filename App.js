import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StartCountdown from './button';
import MyDatePicker from './datePickerComp';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Select Date</Text>
        <MyDatePicker />
        <StartCountdown />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

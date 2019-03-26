import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyDatePicker from './datePickerComp';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Select Date</Text>
        <MyDatePicker styles={styles}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FFC4',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 40,
  }
});

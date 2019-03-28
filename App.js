import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import MyDatePicker from './datePickerComp';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appHeader}>Countdown</Text>
        <Text style={styles.appSubTitle}>A simple way to find out how many days until or ago.</Text>
        <MyDatePicker/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
    color: 'white',
  },
  appHeader: {
    fontSize: 50,
    color: '#FFBF46',
    margin: 10,
  },
  appSubTitle: {
    fontSize: 10,
    margin: 2,
  },
});



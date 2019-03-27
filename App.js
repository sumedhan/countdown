import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import MyDatePicker from './datePickerComp';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appHeader}>Day Counter</Text>
        <MyDatePicker/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#575761',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  }
});



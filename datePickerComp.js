import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View, Button, DatePickerIOS } from 'react-native';
import moment from "moment";
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      displayMsg: '',
      dispDatePicker: false,
      dateSelected: '',
    }
  }

  onDateChangeHandler = (date) => {
    this.setState({date});
  }

  toggleDatePickerVisibility = () => {
    if(this.state.dispDatePicker) {
      this.setState({dispDatePicker: false})
    } else {
      this.setState({
        dispDatePicker: true,
        date: new Date()
      })
    }
  }

  onConfirmHandler = () => {
    const diffInDays = this.differenceinDays();
    const dateSelected = `Date: ${moment(this.state.date).format("MMMM Do YYYY")}`;
    this.textDisplay(diffInDays);
    this.setState({dateSelected});
    this.toggleDatePickerVisibility();
  }

  textDisplay =(days) => {
    if(days > 1) {
      displayMsg = `${days} days to go!`;
    } else if (days < -1) {
      displayMsg = `${Math.abs(days)} days ago.`;
    } else if (days === 1) {
      displayMsg = `Tomorrow`;
    } else if (days === -1) {
      displayMsg = 'It was yesterday';
    } else {
      displayMsg = 'Today';
    }
    this.setState({displayMsg})
  }

  differenceinDays = () => {
    const eventDate = moment(this.state.date, "DD-MMM-YYYY");
    const todayDate = moment(Date.now())
    return eventDate.diff(todayDate, 'days');
  }

  render(){
    const today =  `Today: ${moment(new Date()).format("MMMM Do YYYY")}`;
    return (
      <View style={styles.container}>
        <Button title='Select your event date' onPress={this.toggleDatePickerVisibility} color="#007aff"/>
        {this.state.dispDatePicker ?
        <View>
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            onDateChange= {this.onDateChangeHandler}
            style={styles.dateInput}
          />
          <View style={styles.buttonsContainer}>
            <Button title='Confirm' onPress={this.onConfirmHandler} color="#4cd964"/>
            <Button title='Cancel' onPress={this.toggleDatePickerVisibility} color="#ff3b30" />
          </View>
        </View>
        :
        null }
        <Text style={styles.date}>{today}</Text>
        <Text style={styles.date}>{this.state.dateSelected}</Text>
        <Text style={styles.output}>{this.state.displayMsg}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  output: {
    fontSize: 35,
    color: '#320D6D',
    margin: 30,
  },
  dateInput: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
  },
});

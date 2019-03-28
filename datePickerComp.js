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
    }
  }

  displayDaysTo = (date) => {
    this.setState({date});
  }

  toggleDatePickerVisibility = () => {
    if(this.state.dispDatePicker) {
      this.dateChangeHandler();
      this.setState({dispDatePicker: false})
    } else
    {
      this.setState({dispDatePicker: true})
    }
  }

  textDisplay =(days) => {
    let displayMsg = '';
    if(days > 1) {
      displayMsg = `${days} days to go!`;
    } else if (days < -1) {
      displayMsg = `${Math.abs(days)} days ago.`;
    } else if (days === 1) {
      displayMsg = `Tomorrow`;
    } else if (days === -1) {
      displayMsg = 'It was yesterday';
    } 
    this.setState({displayMsg})
  }

  daysFromToday = () => {
    const eventDate = moment(this.state.date, "DD-MMM-YYYY");
    const todayDate = moment(Date.now())
    const dispDays = eventDate.diff(todayDate, 'days');
    this.textDisplay(dispDays);
  }

  render(){
    const selectedDate = this.state.date ? moment(this.state.date).format("MMMM Do YYYY") : null;
    return (
      <View style={styles.container}>
        <Button title='Select your event date' onPress={this.toggleDatePickerVisibility} />
        {this.state.dispDatePicker ?
        <View>
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            onDateChange= {this.displayDaysTo}
            style={styles.dateInput}
          /> 
          <Button title='Confirm' onPress={this.toggleDatePickerVisibility} />
        </View>
        :
        null }
        <Text style={styles.date}>{selectedDate}</Text>
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

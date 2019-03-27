import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View, Button, DatePickerIOS } from 'react-native';
import moment from "moment";
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      dispDays: '',
      dispDatePicker: false,
    }
  }

  displayDaysTo = (date) => {
    this.setState({date});
  }

  toggleDatePickerVisibility = () => {
    if(this.state.dispDatePicker) {
      const eventDate = moment(this.state.date, "DD-MMM-YYYY");
      const todayDate = moment(Date.now())
      const dispDays = eventDate.diff(todayDate, 'days');
      this.setState({
        dispDatePicker: false,
        dispDays
      })
    } else
    {
      this.setState({dispDatePicker: true})
    }
  }


 
  render(){
    const todaysDate= new Date();
    return (
      <View>
        <Button title='Select your event date:' onPress={this.toggleDatePickerVisibility} />
        {this.state.dispDatePicker ?
        <View>
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            onDateChange= {this.displayDaysTo}
            style={stylesT.dateInput}
          /> 
          <Button title='Confirm' onPress={this.toggleDatePickerVisibility} />
        </View>
        :
        null }
      <Text style={stylesT.text}>{this.state.dispDays}</Text>
      </View>
    )
  }
}

const stylesT = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#E4FDE1',
    margin: 10,
  },
  dateInput: {
    width: 300,
    height: 200,
    color: 'white',
  },
});

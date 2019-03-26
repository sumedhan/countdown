import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View, Button } from 'react-native';
import StartCountdown from './button';
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date: new Date() }
  }
 
  render(){
    const todaysDate= new Date();
    return (
      <View>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MMM-YYYY"
        minDate={todaysDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <StartCountdown eventDate={this.state.date}/>
      </View>
    )
  }
}

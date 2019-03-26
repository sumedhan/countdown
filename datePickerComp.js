import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View, Button } from 'react-native';
import moment from "moment";
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      dispDays: ''
    }
  }

  displayDaysTo = (date) => {
    this.setState({date});
    const dispDays = moment(date, "DD-MMM-YYYY").fromNow();
    this.setState({dispDays})
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
        onDateChange= {this.displayDaysTo}
      />
      <Text style={this.props.styles.text}>{this.state.dispDays}</Text>
      </View>
    )
  }
}

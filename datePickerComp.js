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
      const eventDate = moment(this.state.date, "DD-MMM-YYYY");
      const todayDate = moment(Date.now())
      const dispDays = eventDate.diff(todayDate, 'days');
      this.textDisplay(dispDays);
      this.setState({dispDatePicker: false})
    } else
    {
      this.setState({dispDatePicker: true})
    }
  }

  textDisplay =(days) => {
    let displayMsg = '';
    if(days > 1) {
      displayMsg = `There are ${days} days to go!`;
    } else if (days < -1) {
      displayMsg = `It was ${Math.abs(days)} days ago.`;
    } else if (days === 1) {
      displayMsg = `It is tomorrow`;
    } else if (days === -1) {
      displayMsg = 'It was yesterday';
    } else if(days === 0) {
      displayMsg = 'Your wait is over. It is today!';
    }
    this.setState({displayMsg})
  }


 
  render(){
    const todaysDate= new Date();
    return (
      <View style={styles.container}>
        <Button title='Select your event date' onPress={this.toggleDatePickerVisibility} color= "#EEC643"/>
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
        <Text style={styles.text}>{this.state.displayMsg}</Text>
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
  text: {
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
  dateInput: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
  },
});

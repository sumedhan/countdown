import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import moment from "moment";


export default class StartCountdown extends React.Component {
  constructor () {
    super ();
    this.state = {
     dispDays: '',
    }
  }
  displayDaysTo = () => {
    var dispDays = moment(this.props.eventDate, "DD-MMM-YYYY").fromNow();
    this.setState({dispDays})
  }
  render() {
    return (
      <View>
        <Button
          onPress={this.displayDaysTo}
          title="Start"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.state.dispDays}</Text>
      </View>
    );
  }
}


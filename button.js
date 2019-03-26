import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class StartCountdown extends React.Component {
  constructor () {
    super ();
    this.state = {
      displayCountdown: false,
      startNum: 10,
    }
  }
  increment = () => {
    this.setState({
      startNum: this.state.startNum + 1,
    })

  }
  render() {
    return (
      <View>
        <Button
          onPress={this.increment}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}


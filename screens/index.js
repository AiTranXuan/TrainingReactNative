import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Day02 from './day02/'
export default class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Day02 />
      </View>
    );
  }
}

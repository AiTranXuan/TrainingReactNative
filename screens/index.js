import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Day02 from './day02/';
import Day05 from './day05/';

export default class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Day05 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {height: '100%'},
});

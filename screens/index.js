import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Day02 from './day02/';
export default class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Day02 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {flex: 1},
});

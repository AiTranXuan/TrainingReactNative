import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ComponentAndProps from './ComponentAndProps';
import ConditionalRendering from './ConditionalRendering';
import JSX from './JSX';
import StateAndLifeCycle from './StateAndLifeCycle';

export default class Day02 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        {/* <JSX /> */}
        {/* <ComponentAndProps /> */}
        <StateAndLifeCycle />
        {/* <ConditionalRendering /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {flex: 1},
});

import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
      <View style={{flex: 1}}>
        <JSX />
        <ComponentAndProps />
        <StateAndLifeCycle/>
        <ConditionalRendering />
      </View>
    );
  }
}

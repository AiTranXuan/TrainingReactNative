import React, {Component} from 'react';
import {Text} from 'react-native';
import Child from './Child';

// 1. Function and Class Components
function Welcome() {
  return (
    <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
      Hello AE
    </Text>
  );
}

export default class ComponentAndProps extends Component {
  constructor(props) {
    super(props);
    // 2. state và props
    this.state = {
      showUI1: true,
      showUI1Detail: false,
    };
  }
  handleActionButton = () => {
    this.setState({showUI1Detail: !this.state.showUI1Detail});
  };
  render() {
    return (
      <>
        <Welcome />
        <Child
          title="Day 02"
          time={new Date()}
          onPress={this.handleActionButton}
          showUI1Detail={this.state.showUI1Detail}
        />
      </>
    );
  }
}

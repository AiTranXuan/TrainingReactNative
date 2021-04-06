import React, {Component} from 'react';
import {Text} from 'react-native';
import ChildComponent from './ChildComponent';

// https://viblo.asia/p/react-native-lifecycle-gAm5yXY8ldb
export default class StateAndLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      visable: true,
    };
  }

  upCount = () => {
    this.setState({count: this.state.count + 1});
  };

  showChildComponent = () => {
    this.setState({visable: !this.state.visable});
  };
  componentDidMount() {
    console.log('componentDidMount StateAndLifeCycle component');
  }

  render() {
    return (
      <>
        <Text
          style={{
            backgroundColor: 'yellow',
            padding: 4,
            maxWidth: '50%',
            textAlign: 'center',
          }}
          onPress={
            this.upCount
          }>{`III.State And Life Cycle  ${this.state.count}`}</Text>
        {this.state.visable && (
          <ChildComponent onPress={this.showChildComponent} />
        )}
      </>
    );
  }
}

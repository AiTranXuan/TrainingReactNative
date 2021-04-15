import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
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
    this.showChildComponent();
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
          style={styles.main}
          onPress={
            this.upCount
          }>{`III.State And Life Cycle  ${this.state.count}`}</Text>
        {this.state.visable && (
          <ChildComponent
            containerStyles={{backgroundColor: 'blue', width: 250, height: 250}}
            onPress={this.showChildComponent}
          />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'yellow',
    padding: 4,
    maxWidth: '50%',
    textAlign: 'center',
  },
});

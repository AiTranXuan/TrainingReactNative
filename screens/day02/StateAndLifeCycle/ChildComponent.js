import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
export default class ChildComponent extends React.PureComponent {
  componentWillUnmount() {
    console.log('componentWillUnmount ChildComponent');
  }
  render() {
    const {onPress,containerStyles} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.main, containerStyles]}>
        <Text>{'ChildComponent '}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '50%',
    borderRadius: 10,
    borderWidth: 2,
    padding: 4,
    alignSelf: 'center',
    backgroundColor: 'pink',
  },
});

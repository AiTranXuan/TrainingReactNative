import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
export default class ChildComponent extends React.PureComponent {
  componentWillUnmount() {
    console.log('componentWillUnmount ChildComponent');
  }
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '50%',
          borderRadius: 10,
          borderWidth: 2,
          padding: 4,
          alignSelf: 'center',
          backgroundColor: 'pink',
        }}>
        <Text>{'ChildComponent '}</Text>
      </TouchableOpacity>
    );
  }
}

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
export default class Child extends React.PureComponent {
  render() {
    const {title, time, onPress, showUI1Detail} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{width:'50%',borderRadius:10,borderWidth:2,padding:4,alignSelf:'center', backgroundColor: 'pink'}}>
        <Text>{`Click me: `+title}</Text>
        {showUI1Detail && (
          <Text>{moment(time).format('HH:mm DD/MM/YYYY')}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

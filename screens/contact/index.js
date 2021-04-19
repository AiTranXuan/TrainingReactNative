import React from 'react';
import {View, StyleSheet} from 'react-native';
export default class ContactScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {width: '100%', paddingLeft: 12,backgroundColor:'red'},
});

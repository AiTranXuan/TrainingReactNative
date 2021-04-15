import React from 'react';
import {View, StyleSheet} from 'react-native';
import Content from './Content';
import Header from './Header';
export default class Day05 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Header />
        <Content />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {width: '100%', paddingLeft: 12},
});

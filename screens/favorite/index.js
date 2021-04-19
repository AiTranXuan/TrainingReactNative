import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Content from './Content';
import Header from './Header';
export default class FavoriteScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.child}>
          <Header />
          <Content />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {width: '100'},
  child: {paddingLeft: 12},
});

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
export default class Header extends Component {
  render() {
    return (
      <>
        <View style={styles.main}>
          <TouchableOpacity style={styles.btn}>
            <FastImage
              source={require('../../assets/images/ic_plus.png')}
              style={styles.img}
              resizeMode="contain"
              tintColor="#3478F6"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Mục ưa thích</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 12,
  },
  img: {width: 20, height: 20},
  btn: {
    width: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {height: 44, width: '100%', justifyContent: 'center'},
});

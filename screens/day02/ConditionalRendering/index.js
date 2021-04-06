import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUI1: true,
      showUI1Detail: false,
    };
  }

  handleActionButton = () => {
    this.setState({showUI1Detail: !this.state.showUI1Detail});
  };

  renderNumberOfNgocTrinh = total => {
    // 4. Switch Case
    const uri =
      'https://nld.mediacdn.vn/thumb_w/540/291774122806476800/2021/3/30/img5498-16170881242321217552107.jpg';
    switch (total) {
      case 1:
        return (
          <>
            <Image
              source={{uri}}
              resizeMode="contain"
              style={{width: 10, height: 10}}
            />
          </>
        );
      case 2:
        return (
          <>
            <Image
              source={{uri}}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
            <Image
              source={{uri}}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </>
        );
      default:
        return null;
    }
  };

  renderUI1 = () => {
    const {showUI1Detail} = this.state;
    const uri =
      'https://nld.mediacdn.vn/thumb_w/540/291774122806476800/2021/3/30/img5498-16170881242321217552107.jpg';
    return (
      <TouchableOpacity
        onPress={this.handleActionButton}
        style={{
          backgroundColor: 'red',
          width: 200,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* 2. Ternary Operation(Phép toán 3 ngôi): condition ? trueExpression : falseExpression  */}
        <Text>{showUI1Detail ? 'Show' : "Don't show"}</Text>
        {/* 3.Logical && operator(Toán tử logic): expression01 && expression02  */}
        {showUI1Detail && (
          <>
            <Image
              source={{uri}}
              resizeMode="contain"
              style={{width: 100, height: 100}}
            />

            {this.renderNumberOfNgocTrinh(2)}
          </>
        )}
      </TouchableOpacity>
    );
  };

  renderUI2 = () => {
    return (
      <View style={{backgroundColor: 'blue', width: 200, height: 200}}>
        <Text>renderUI2</Text>
      </View>
    );
  };

  render() {
    //1. if else
    if (this.state.showUI1) {
      return this.renderUI1();
    }
    return this.renderUI2();
  }
}

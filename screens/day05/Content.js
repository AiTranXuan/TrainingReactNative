import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Nguyễn Văn An',
    type: {id: 'phone', name: 'Điện thoại'},
    avatar:
      'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Nguyễn Tố Uyên',
    type: {id: 'phone', name: 'Điện thoại'},
    avatar: null,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Trần Trung Quân',
    type: {id: 'phone', name: 'Điện thoại'},
    avatar: null,
  },
];

const Avatar = ({item}) => {
  const isShowImage = item?.avatar || false;
  if (isShowImage) {
    return (
      <View style={styles.viewAvatarImage}>
        <FastImage
          style={styles.avatar}
          resizeMode="cover"
          source={{uri: item?.avatar}}
        />
      </View>
    );
  }

  return (
    <View style={styles.ViewAvatarTxt}>
      <Text style={styles.txtAvatar}>{item?.name.charAt(0)}</Text>
    </View>
  );
};

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Avatar item={item} />
    <View style={styles.rowRightMain}>
      <View style={styles.rowChildRightMain}>
        <Text style={styles.name}>{item?.name}</Text>
        <View style={styles.viewIconPhone}>
          <FastImage
            source={require('../../assets/images/ic_phone.png')}
            style={styles.iconPhone}
            resizeMode="contain"
            tintColor="#C4C4C7"
          />
          <Text style={styles.typeName}>{item?.type?.name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnInfo}>
        <FastImage
          source={require('../../assets/images/ic_info.png')}
          style={styles.iconInfo}
          resizeMode="contain"
          tintColor="#3478F6"
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {};

  renderItem = ({item}) => {
    return <Item item={item} onPress={this.handleClick} />;
  };

  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  iconInfo: {width: 24, height: 24},
  btnInfo: {
    width: 40,
    height: 40,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeName: {fontSize: 12, color: '#C4C4C7'},
  iconPhone: {width: 12, height: 12, marginRight: 8},
  viewIconPhone: {flexDirection: 'row', marginTop: 4, alignItems: 'center'},
  name: {fontSize: 16, fontWeight: 'bold'},
  rowChildRightMain: {flex: 1, paddingHorizontal: 12},
  rowRightMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderTopColor: '#C6C6C8',
    borderTopWidth: 0.5,
  },
  txtAvatar: {color: '#fff', fontSize: 16},
  ViewAvatarTxt: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8F939E',
  },
  avatar: {width: 40, height: 40},
  viewAvatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {width: 20, height: 20},
  btn: {
    width: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {flex: 1},
});

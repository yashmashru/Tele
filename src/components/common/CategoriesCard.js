import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class CategoriesCard extends Component {
  render() {
    const {mainViewStyle} = styles;
    const {image, Name, detailsOnPress} = this.props;
    return (
      <TouchableOpacity onPress={detailsOnPress}>
        <View style={mainViewStyle}>
          <Image source={image} style={{height: 60, width: 60}} />
          <Text style={{color: 'black', fontWeight: '500'}}>{Name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  mainViewStyle: {
    height: 100,
    width: 120,
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    borderWidth: 0.6,
    elevation: 5,
    // marginVertical: '1%',
  },
});

// export default CategoriesCard;

export {CategoriesCard};

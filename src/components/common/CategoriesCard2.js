import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

class CategoriesCard2 extends Component {
  render() {
    const {mainViewStyle, leftviewStyle, rightViewStyle} = styles;
    const {image, category, description} = this.props;
    return (
      <View style={mainViewStyle}>
        <View style={leftviewStyle}>
          <View
            style={{
              height: '80%',
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRightWidth: 1,
            }}>
            <Image
              source={image}
              style={{height: 70, width: 70, marginBottom: '5%'}}
            />
            <Text style={{fontSize: 18, color: 'black'}}>{category}</Text>
          </View>
        </View>
        <View style={rightViewStyle}>
          <View
            style={{
              height: '90%',
              width: '95%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black'}}>{description}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainViewStyle: {
    height: 170,
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    elevation: 10,
  },
  leftviewStyle: {
    height: '100%',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightViewStyle: {
    height: '100%',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default CategoriesCard2;
export {CategoriesCard2};

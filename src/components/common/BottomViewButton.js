import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

class BottomViewButton extends Component {
  render() {
    const {mainViewStyle} = styles;
    const {image} = this.props;
    return (
      <TouchableOpacity style={mainViewStyle}>
        <View>
          <Image source={image} />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  mainViewStyle: {
    height: '100%',
    width: '25%',
    backgroundColor: '#ffffff',
    // marginHorizontal: '1%',
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderTopWidth: 0.2,
    borderRightWidth: 0.4,
    backgroundColor: 'white',
  },
});

// export default BottomViewButton;
export {BottomViewButton};

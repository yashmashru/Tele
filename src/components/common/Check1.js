import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Check1 extends Component {
  render() {
    const {textStyle} = styles;
    const {style, text, mainViewStyle} = this.props;
    return (
      <View style={mainViewStyle}>
        <Text style={[textStyle, style]}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#333333',
  },
});

export {Check1};

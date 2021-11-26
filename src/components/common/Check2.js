import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Check2 extends Component {
  render() {
    const {textStyle} = styles;
    const {style, title} = this.props;
    return (
      <View>
        <Text style={[textStyle, style]}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#1B5ADE',
  },
});

export {Check2};

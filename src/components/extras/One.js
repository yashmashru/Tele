import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Check1, Check2} from '../common';

export class one extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Check1
            style={{
              fontFamily: 'Satoshi',
              fontSize: 15,
            }}
            text="Call us at "
          />
          <Check1
            style={{
              fontWeight: 'bold',
              fontFamily: 'Satoshi',
              fontSize: 15,
              flexDirection: 'column',
            }}
            text="+91 7350801010"
          />
        </View>
      </View>
    );
  }
}

export default one;

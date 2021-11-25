import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {BottomViewButton} from '.';

class BottomTabBar extends Component {
  render() {
    return (
      <View
        style={{
          height: '7%',
          width: '100%',
          backgroundColor: 'transparent',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <BottomViewButton image={require('../../images/home.png')} />
        <BottomViewButton image={require('../../images/people.png')} />
        <BottomViewButton image={require('../../images/note.png')} />
        <BottomViewButton image={require('../../images/profile.png')} />
      </View>
    );
  }
}

// export default BottomTabBar;
export {BottomTabBar};

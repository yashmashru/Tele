import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

class TopTabBar extends Component {
  render() {
    const {headerViewStyle, headerLeftStyle, headerRightStyle} = styles;
    const {Name, heading, image, image2, detailsOnPress, style} = this.props;
    return (
      <View style={[headerViewStyle, style]}>
        <View style={headerLeftStyle}>
          <Text style={{color: 'black', fontSize: 20}}>{heading}</Text>
          <Text style={{color: 'black', fontSize: 30}}>{Name}</Text>
        </View>
        <View style={headerRightStyle}>
          <TouchableOpacity
            style={{marginRight: '20%'}}
            onPress={detailsOnPress}>
            <Image source={image} style={{height: 30, width: 30}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={image2} style={{height: 30, width: 30}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerViewStyle: {
    height: '12%',
    width: '100%',
    backgroundColor: 'Transparentt',
    flexDirection: 'row',
  },
  headerLeftStyle: {
    marginTop: '1%',
    marginLeft: '3%',

    height: '90%',
    width: '47%',
  },
  headerRightStyle: {
    flexDirection: 'row',
    marginTop: '3%',
    height: '60%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '23%',
  },
});

// export default TopTabBar;
export {TopTabBar};

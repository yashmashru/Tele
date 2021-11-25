import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TopTabBar} from '../common';

export class BookAppointmentScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#D8F9FF'}}>
        <TopTabBar
          heading="Book"
          Name="Appointment"
          style={{borderBottomWidth: 0.4, borderColor: 'grey'}}
        />
        <View style={{height: '86%', width: '100%', marginTop: '2%'}}>
          <View
            style={{
              height: '10%',
              width: '100%',
              //   backgroundColor: 'grey',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                marginLeft: '5%',
                color: 'black',
                fontWeight: 'bold',
              }}>
              Jul
            </Text>
          </View>
          <View
            style={{
              height: '15%',
              width: '90%',
              marginTop: '1%',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: '2%',
            }}>
            <View
              style={{
                height: '90%',
                width: '20%',
                backgroundColor: 'white',
                marginHorizontal: '4%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#2682D7',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>16</Text>
              <Text style={{color: 'white', fontSize: 18}}>Mon</Text>
            </View>
            <View
              style={{
                height: '90%',
                width: '20%',

                marginRight: '4%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#2682D7',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>17</Text>
              <Text style={{color: 'white', fontSize: 18}}>Tue</Text>
            </View>
            <View
              style={{
                height: '90%',
                width: '20%',
                backgroundColor: 'white',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#2682D7',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>18</Text>
              <Text style={{color: 'white', fontSize: 18}}>Wed</Text>
            </View>
            <View
              style={{
                height: '90%',
                width: '20%',
                backgroundColor: 'white',
                marginHorizontal: '4%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#2682D7',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>19</Text>
              <Text style={{color: 'white', fontSize: 18}}>Tur</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BookAppointmentScreen;

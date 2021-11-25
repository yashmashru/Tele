import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {TopTabBar, BottomTabBar, AppointmentsCard} from '../common';

export class AppointmentScreen extends Component {
  render() {
    const {mainViewStyle, centerViewStyle, scrollCardStyle} = styles;
    return (
      <View style={mainViewStyle}>
        <TopTabBar
          heading="All"
          Name="Appointments"
          image={require('../../images/search.png')}
          image2={require('../../images/chat.png')}
          detailsOnPress={() => {
            this.props.navigation.navigate('Doctor3 Screen');
          }}
        />
        <View style={centerViewStyle}>
          <View>
            <ScrollView>
              <View style={scrollCardStyle}>
                <AppointmentsCard
                  date="12/11/21"
                  time="11:00 am"
                  doctor="Dr.ABCDEF"
                  type="Dentist"
                  hospital="sion hospital"
                />
                <AppointmentsCard
                  date="12/11/21"
                  time="11:00 am"
                  doctor="Dr.ABCDEF"
                  type="Dentist"
                  hospital="sion hospital"
                />
                <AppointmentsCard
                  date="12/11/21"
                  time="11:00 am"
                  doctor="Dr.ABCDEF"
                  type="Dentist"
                  hospital="sion hospital"
                />
                <AppointmentsCard
                  date="12/11/21"
                  time="11:00 am"
                  doctor="Dr.ABCDEF"
                  type="Dentist"
                  hospital="sion hospital"
                />
                <AppointmentsCard
                  date="12/11/21"
                  time="11:00 am"
                  doctor="Dr.ABCDEF"
                  type="Dentist"
                  hospital="sion hospital"
                />
                <AppointmentsCard
                  date="12/11/21"
                  time="11:00 am"
                  doctor="Dr.ABCDEF"
                  type="Dentist"
                  hospital="sion hospital"
                />
                <AppointmentsCard
                  date="12/11/21"
                  time="11:00 am"
                  doctor="Dr.ABCDEF"
                  type="Dentist"
                  hospital="sion hospital"
                />
              </View>
            </ScrollView>
          </View>
        </View>
        {/* <BottomTabBar /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: '#D8F9FF',
  },
  centerViewStyle: {
    height: '88%',
    width: '100%',
  },
  //   scrollCardStyle: {
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
});

export default AppointmentScreen;

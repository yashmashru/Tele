import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import One from '../extras/One';
import Two from '../extras/Two';

const Tab = createMaterialTopTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#1B5ADE',
        tabBarIndicatorContainerStyle: {height: '100%', width: '100%'},
        tabBarIndicatorStyle: {
          backgroundColor: '#1B5ADE',
          height: '100%',
        },
        tabBarStyle: {
          marginTop: '2%',
          marginHorizontal: '2%',
          borderWidth: 1,
          borderColor: '#1B5ADE',
          height: 40,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
          position: 'absolute',
          bottom: -6,
          alignSelf: 'center',
        },
      })}>
      <Tab.Screen
        name="One"
        component={One}
        options={{
          tabBarLabel: 'INSPIRATIONS',
        }}
      />
      <Tab.Screen
        name="Two"
        component={Two}
        options={{
          tabBarLabel: 'TEMPLATES',
        }}
      />
      {/* <Tab.Screen name="Three" component={Three} /> */}
    </Tab.Navigator>
  );
}

export default function PatientProfile() {
  return <MyTab />;
}

// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   BackHandler,
// } from 'react-native';
// import {TopTabBar, BottomTabBar} from '../common';

// export class PatientProfile extends Component {
//   render() {
//     const {mainViewStyle} = styles;
//     return (
//       <View style={mainViewStyle}>
//         <TopTabBar
//           heading="My"
//           Name="Profile"
//           image2={require('../../images/setting.png')}
//         />
//         <View style={{height: '88%', width: '100%'}}>
//           <View
//             style={{
//               height: '10%',
//               width: '90%',
//               marginTop: '5%',
//               alignSelf: 'center',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text style={{color: '#2682D7', fontSize: 25}}>
//               Personal Details
//             </Text>
//           </View>
//           <View
//             style={{
//               height: '22%',
//               width: '90%',
//               backgroundColor: 'white',
//               marginVertical: '1%',
//               borderRadius: 10,
//               alignSelf: 'center',
//             }}>
//             <View
//               style={{
//                 height: '75%',
//                 width: '100%',
//                 borderTopStartRadius: 10,
//                 borderTopEndRadius: 10,
//                 flexDirection: 'row',
//                 borderBottomWidth: 0.3,
//               }}>
//               <View
//                 style={{
//                   height: '100%',
//                   width: '30%',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={require('../../images/profile2.png')}
//                   style={{height: 70, width: 70}}
//                 />
//               </View>
//               <View
//                 style={{
//                   height: '100%',
//                   width: '50%',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                 }}>
//                 <Text style={{color: 'black', fontSize: 25, marginTop: '10%'}}>
//                   Patient Admin
//                 </Text>
//                 <Text style={{color: 'grey', fontSize: 15}}>
//                   abcd@gmail.com
//                 </Text>
//               </View>
//               <TouchableOpacity
//                 style={{
//                   height: '100%',
//                   width: '20%',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRadius: 70,
//                 }}>
//                 <Image
//                   source={require('../../images/Edit.png')}
//                   style={{height: 30, width: 30}}
//                 />
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 height: '25%',
//                 width: '100%',
//                 borderBottomEndRadius: 10,
//                 borderBottomStartRadius: 10,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Text style={{color: 'black', marginRight: '2%'}}>
//                 Phone No :-
//               </Text>
//               <Text style={{color: 'grey'}}>+91 1234567890</Text>
//             </View>
//           </View>
//           <View
//             style={{
//               height: '40%',
//               width: '90%',
//               marginVertical: '5%',
//               alignSelf: 'center',
//             }}>
//             <View
//               style={{
//                 height: '25%',
//                 width: '100%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={{color: '#2682D7', fontSize: 25}}>Options</Text>
//             </View>
//             <View
//               style={{
//                 height: '25%',
//                 width: '60%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderBottomWidth: 0.3,
//                 alignSelf: 'center',
//               }}>
//               <TouchableOpacity>
//                 <Text style={{color: 'black', fontSize: 18}}>Contact us</Text>
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 height: '25%',
//                 width: '60%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderBottomWidth: 0.3,
//                 alignSelf: 'center',
//               }}>
//               <TouchableOpacity>
//                 <Text style={{color: 'black', fontSize: 18}}>Share</Text>
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 height: '25%',
//                 width: '60%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//               }}>
//               <TouchableOpacity>
//                 <Text style={{color: 'black', fontSize: 18}}>Log out</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         {/* <BottomTabBar /> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainViewStyle: {
//     backgroundColor: '#D8F9FF',
//   },
// });

// export default PatientProfile;

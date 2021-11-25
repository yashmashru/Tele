import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import AuthScreen from '../components/screens/AuthScreen';
// import LoginScreen from '../components/screens/LoginScreen';
// import RegisterScreen from '../components/screens/RegisterScreen';
import PatientHomeScreen from '../components/screens/PatientHomeScreen';
import SearchScreen from '../components/screens/SearchScreen';
import Doctor3Screen from '../components/screens/Doctor3Screen';
import Doctor4Screen from '../components/screens/Doctor4Screen';
import DoctorDetailsScreen from '../components/screens/DoctorDetailsScreen';
import AppointmentScreen from '../components/screens/AppointmentScreen';
import PatientProfile from '../components/screens/PatientProfile';
import AllCategories from '../components/screens/AllCategories';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from '../components/screens/SplashScreen';

const Tab1StackNav = createNativeStackNavigator();
const Tab2StackNav = createNativeStackNavigator();
const Tab3StackNav = createNativeStackNavigator();
const Tab4StackNav = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab1Stack() {
  return (
    <Tab1StackNav.Navigator screenOptions={{headerShown: false}}>
      <Tab1StackNav.Screen
        name="Patient Home Screen"
        component={PatientHomeScreen}
        options={{headerShown: false}}
      />
      <Tab1StackNav.Screen name="Search Screen" component={SearchScreen} />
      <Tab1StackNav.Screen name="Doctor3 Screen" component={Doctor3Screen} />
      <Tab1StackNav.Screen name="Doctor4 Screen" component={Doctor4Screen} />

      <Tab1StackNav.Screen
        name="Appointment Screen"
        component={AppointmentScreen}
      />
      <Tab1StackNav.Screen
        name="Doctor Details Screen"
        component={DoctorDetailsScreen}
      />

      <Tab1StackNav.Screen
        name="All Categories Screen"
        component={AllCategories}
      />
    </Tab1StackNav.Navigator>
  );
}

function Tab2Stack() {
  return (
    <Tab2StackNav.Navigator screenOptions={{headerShown: false}}>
      <Tab2StackNav.Screen
        name="DoctorDetailsScreen"
        component={DoctorDetailsScreen}
      />
      <Tab2StackNav.Screen
        name="Doctor Details Screen"
        component={DoctorDetailsScreen}
      />
      <Tab2StackNav.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
      />
      <Tab2StackNav.Screen name="Doctor3 Screen" component={Doctor3Screen} />
      <Tab2StackNav.Screen name="Doctor4 Screen" component={Doctor4Screen} />

      <Tab2StackNav.Screen name="Search Screen" component={SearchScreen} />
    </Tab2StackNav.Navigator>
  );
}

function Tab3Stack() {
  return (
    <Tab3StackNav.Navigator screenOptions={{headerShown: false}}>
      <Tab3StackNav.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
      />
    </Tab3StackNav.Navigator>
  );
}

function Tab4Stack() {
  return (
    <Tab4StackNav.Navigator screenOptions={{headerShown: false}}>
      <Tab4StackNav.Screen
        name="Patient Profile Page"
        component={PatientProfile}
      />
    </Tab4StackNav.Navigator>
  );
}

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Tab1Stack"
        component={Tab1Stack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tab2Stack"
        component={Tab2Stack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tab3Stack"
        component={Tab3Stack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tab4Stack"
        component={Tab4Stack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Splash Screen" component={SplashScreen} />
        <MainStack.Screen name="HomeScreen" component={TabStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;

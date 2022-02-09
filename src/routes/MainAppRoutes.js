import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthScreen from '../components/screens/AuthScreen';
import LoginScreen from '../components/screens/LoginScreen';
import RegisterScreen from '../components/screens/RegisterScreen';
import PatientHomeScreen from '../components/screens/PatientHomeScreen';
import SearchScreen from '../components/screens/SearchScreen';
import Doctor3Screen from '../components/screens/Doctor3Screen';
import Doctor4Screen from '../components/screens/Doctor4Screen';
import DoctorDetailsScreen from '../components/screens/DoctorDetailsScreen';
import AppointmentScreen from '../components/screens/AppointmentScreen';
import PatientProfile from '../components/screens/PatientProfile';
import AllCategories from '../components/screens/AllCategories';
import SplashScreen from '../components/screens/SplashScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthStackNav = createNativeStackNavigator();
const Tab1StackNav = createNativeStackNavigator();
const Tab2StackNav = createNativeStackNavigator();
const Tab3StackNav = createNativeStackNavigator();
const Tab4StackNav = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <AuthStackNav.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Auth Screen">
      <AuthStackNav.Screen name="Auth Screen" component={AuthScreen} />
      <AuthStackNav.Screen name="Login Screen" component={LoginScreen} />
      <AuthStackNav.Screen name="Register Screen" component={RegisterScreen} />
    </AuthStackNav.Navigator>
  );
}

function Tab1Stack() {
  return (
    <Tab1StackNav.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Patient Home Screen">
      <Tab1StackNav.Screen
        name="Patient Home Screen"
        component={PatientHomeScreen}
      />
      <Tab1StackNav.Screen name="Search Screen" component={SearchScreen} />
      <Tab1StackNav.Screen name="Doctor3 Screen" component={Doctor3Screen} />
      <Tab1StackNav.Screen name="Doctor4 Screen" component={Doctor4Screen} />
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
      screenOptions={{
        // tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: '#2682D7',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Tab1Stack"
        component={Tab1Stack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {fontSize: 13},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2Stack"
        component={Tab2Stack}
        options={{
          headerShown: false,
          tabBarLabel: 'Doctors',
          tabBarLabelStyle: {fontSize: 13},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="doctor" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3Stack"
        component={Tab3Stack}
        options={{
          headerShown: false,
          tabBarLabel: 'Appointment',
          tabBarLabelStyle: {fontSize: 13},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="pen" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Tab4Stack"
        component={Tab4Stack}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {fontSize: 13},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="face" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* <MainStack.Screen
          name="Doctor3 Screens"
          component={Doctor3Screen}
          options={{headerShown: false}}
        /> */}
        <MainStack.Screen
          name="Auth Screens"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="HomeScreenS"
          component={TabStack}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;

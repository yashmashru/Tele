import React, {Component} from 'react';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import ReduxTunk from 'redux-thunk';
// import reducers from './reducers';

// import OnboardingScreen from './components/screens/OnboardingScreen';
import AuthScreen from './components/screens/AuthScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
// import PatientHomeScreen from './components/screens/PatientHomeScreen';
// import DoctorDetailsScreen from './components/screens/DoctorDetailsScreen';
// import AppointmentScreen from './components/screens/AppointmentScreen';
// import PatientProfile from './components/screens/PatientProfile';
// import Doctor3Screen from './components/screens/Doctor3Screen';
// import Doctor4Screen from './components/screens/Doctor4Screen';
// import SearchScreen from './components/screens/SearchScreen';
// import AllDoctorScreen from './components/screens/AllDoctorScreen';
// import AllCategories from './components/screens/AllCategories';
import SplashScreen from './components/screens/SplashScreen';
import MainAppRoutes from './routes/MainAppRoutes';
// import BookAppointmentScreen from './components/screens/BookAppointmentScreen';
import One from './components/extras/One';
import Two from './components/extras/Two';
import Three from './components/extras/Three';
import Four from './components/extras/Four';

export class App extends Component {
  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxTunk));
    // <Provider store={store}>
    return <MainAppRoutes />;
    // </Provider>;
  }
}

export default App;

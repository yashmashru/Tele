import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({}) => {
  return (
    <Onboarding
      // onSkip={() => navigation.replace('Login')}
      // onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#ffffff',
          image: (
            <Image
              source={require('../../images/Logo.jpeg')}
              style={{height: 200, width: 200, borderRadius: 10}}
            />
          ),
          title: 'K.J.Somaioya, Hospital & Reasearch center',
          subtitle:
            'Videocalling Application for interaction between patient and the physician',
        },
        {
          backgroundColor: '#ffffff',
          image: (
            <Image
              source={require('../../images/TLogo.png')}
              style={{height: 190, width: 250, borderRadius: 10}}
            />
          ),
          title: '"Presented By Somaiya trust"',
        },
        {
          backgroundColor: '#6fb2dd',
          image: (
            <Image
              source={require('../../images/S2.png')}
              style={{height: 300, width: 300, borderRadius: 200}}
            />
          ),
          title: 'Meet best Doctors Online',
        },
        {
          backgroundColor: '#dd700b',
          image: (
            <Image
              source={require('../../images/S3.jpg')}
              style={{height: 300, width: 300, borderRadius: 200}}
            />
          ),
          title: 'Chat and Videoconference with doctors',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

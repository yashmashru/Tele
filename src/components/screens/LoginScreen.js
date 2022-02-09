import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{backgroundColor: '#2682D7', height: '100%', width: '100%'}}>
        <View style={{marginLeft: '4%', marginTop: '4%'}}>
          <Text
            style={{
              fontSize: 40,
              color: 'white',
            }}>
            Sign In
          </Text>
          <View style={{marginTop: '2%', flexDirection: 'row'}}>
            <Text style={{fontSize: 15, color: 'white', marginRight: '2%'}}>
              Don'n have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                console.log(this.props);
                this.props.navigation.navigate('Register Screen');
              }}>
              <Text style={{fontSize: 15, color: 'lightblue'}}>Sign Up!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView
          style={{
            marginLeft: '4%',
            marginTop: '10%',
            flexDirection: 'column',
          }}>
          <TextInput
            placeholder="Email*"
            placeholderTextColor="white"
            style={{
              borderWidth: 1,
              borderColor: 'white',
              width: '90%',
              marginBottom: '5%',
              color: 'white',
            }}
          />
          <TextInput
            placeholder="Password*"
            placeholderTextColor="white"
            secureTextEntry={true}
            style={{
              borderWidth: 1,
              borderColor: 'white',
              width: '90%',
              color: 'white',
            }}
          />
          <TouchableOpacity style={{marginTop: '5%'}}>
            <Text style={{color: 'lightblue', fontSize: 15}}>
              Forgot your Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: '18%',
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              marginTop: '5%',
              borderRadius: 10,
            }}
            onPress={() => {
              console.log(this.props);
              this.props.navigation.navigate('HomeScreenS');
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Sign In</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;

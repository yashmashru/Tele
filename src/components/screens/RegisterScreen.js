import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export class RegisterScreen extends Component {
  render() {
    return (
      <View style={{height: '100%', width: '100%', backgroundColor: '#2682D7'}}>
        {/* <ImageBackground
          source={require('../../images/Hospital.jpg')}
          style={[{height: '100%', width: '100%'}]}
          blurRadius={2}> */}
        <ScrollView>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: '5%',
              marginTop: '5%',
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>Sign Up</Text>
            <View style={{flexDirection: 'row', marginTop: '2%'}}>
              <Text style={{fontSize: 15, color: 'white', marginRight: '2%'}}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log(this.props);
                  this.props.navigation.navigate('Login Screen');
                }}>
                <Text style={{fontSize: 15, color: 'lightblue'}}>Sign In!</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: '10%'}}>
              <TextInput
                placeholder="Username*"
                placeholderTextColor="white"
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  width: '90%',
                  color: 'white',
                }}
              />
              <TextInput
                placeholder="Email*"
                placeholderTextColor="white"
                textContentType={'emailAddress'}
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  width: '90%',
                  marginTop: '5%',
                  color: 'white',
                }}
              />
              <TextInput
                placeholder="Phone Number*"
                placeholderTextColor="white"
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  width: '90%',
                  marginTop: '5%',
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
                  marginTop: '5%',
                  color: 'white',
                }}
              />
              <TextInput
                placeholder="Confirm Password*"
                placeholderTextColor="white"
                secureTextEntry={true}
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  width: '90%',
                  marginTop: '5%',
                  color: 'white',
                }}
              />
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 50,
                  marginTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'black',
                  borderRadius: 10,
                }}
                onPress={() => {
                  console.log(this.props);
                  this.props.navigation.navigate('HomeScreenS');
                }}>
                <Text style={{fontSize: 20, color: 'white'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default RegisterScreen;

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';

export class SearchScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{backgroundColor: '#D8F9FF', height: '100%', width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            height: '12%',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              height: '80%',
              width: '30%',
              marginLeft: '3%',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Find your
            </Text>
            <Text style={{fontSize: 25, color: 'black'}}>Specialist</Text>
          </View>
          <TouchableOpacity
            style={{
              marginLeft: '55%',
              height: '50%',
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../images/chat.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={{
            marginLeft: '4%',
            marginTop: '10%',
            flexDirection: 'column',
          }}>
          <TextInput
            placeholder="Select Area"
            placeholderTextColor="black"
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              marginBottom: '5%',
              color: 'black',
            }}
            onChangeText={value => {
              console.log('value change to:', value);
            }}
          />
          <TextInput
            placeholder="Doctor, Specialist"
            placeholderTextColor="black"
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              color: 'black',
            }}
            onChangeText={value => {
              console.log('value change to:', value);
            }}
          />
          <TouchableOpacity
            style={{
              height: '15%',
              width: '90%',
              alignItems: 'center',
              marginTop: '5%',
              borderWidth: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: '2%',
                marginRight: '65%',
              }}>
              Select Date
            </Text>
            <Image
              source={require('../../images/calander.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: '15%',
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2682D7',
              marginTop: '5%',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Search</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({});

export default SearchScreen;

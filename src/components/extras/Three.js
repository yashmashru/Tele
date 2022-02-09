import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class Three extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Three;

// import React, {Component} from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Image,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// export class Three extends Component {
//   render() {
//     const {
//       onChangeText,
//       placeholder,
//       placeholderTextColor,
//       onfocus,
//       autofocus,
//       keyboardtype,
//       maxlength,
//       value,
//       style,
//       editable,
//     } = this.props;
//     const {} = styles;
//     return (
//       <SafeAreaView>
//         <KeyboardAvoidingView
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//             width: '100%',
//           }}>
//           <View
//             style={{
//               height: '10%',
//               width: '95%',
//               backgroundColor: 'white',
//               flexDirection: 'row',
//             }}>
//             <View
//               style={{
//                 height: '100%',
//                 width: '10%',
//                 backgroundColor: 'white',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Image
//                 source={require('../../assets/Icons/Other/search/search.png')}
//                 style={{height: 30, width: 30}}
//               />
//             </View>
//             <TextInput
//               style={[
//                 {
//                   height: '100%',
//                   width: '90%',
//                   // backgroundColor: 'pink',
//                   color: 'black',
//                 },
//                 style,
//               ]}
//               onChangeText={onChangeText}
//               placeholder={placeholder}
//               placeholderTextColor={placeholderTextColor}
//               onFocus={onfocus}
//               autoFocus={autofocus}
//               keyboardType={keyboardtype}
//               maxLength={maxlength}
//               value={value}
//               editable={editable}
//             />
//           </View>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({});

// export default Three;

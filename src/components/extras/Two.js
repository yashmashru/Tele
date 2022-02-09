import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class Two extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#f3f3f5',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}> textInComponent </Text>
      </View>
    );
  }
}

export default Two;

// // import React, {Component} from 'react';
// // import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
// // import {Four} from './Four';

// // export class Two extends Component {
// //   constructor() {
// //     super();
// //     this.state = {uri: require('../../images/background.png')};
// //   }

// //   Load_New_Image = () => {
// //     this.setState({
// //       uri: require('../../images/brain.png'),
// //     });
// //   };

// //   render() {
// //     return (
// //       <View
// //         style={{
// //           flex: 1,
// //           height: '100%',
// //           width: '100%',
// //           backgroundColor: 'lightblue',
// //         }}>
// //         <View
// //           style={{
// //             height: '10%',
// //             width: '100%',
// //             backgroundColor: 'white',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //           }}>
// //           <Text style={{color: 'black'}}> textInComponent </Text>
// //         </View>
// //         <View
// //           style={{
// //             height: '35%',
// //             width: '100%',
// //             backgroundColor: '#f3f3f5',
// //           }}></View>
// //         <View style={{height: '55%', width: '100%'}}>
// //           <View
// //             style={{
// //               height: '15%',
// //               width: '100%',
// //               backgroundColor: 'black',
// //             }}></View>
// //           <ScrollView
// //             style={{
// //               height: '65%',
// //               width: '100%',
// //               backgroundColor: 'pink',
// //             }}
// //             horizontal={true}>
// //             <View></View>
// //           </ScrollView>
// //           <View
// //             style={{
// //               backgroundColor: 'white',
// //               height: '20%',
// //               width: '100%',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               flexDirection: 'row',
// //             }}>
// //             <TouchableOpacity
// //               style={{
// //                 backgroundColor: '#f3f3f5',
// //                 height: '100%',
// //                 width: '23.75%',
// //                 marginHorizontal: '1%',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //               }}>
// //               {/* onPress={this.Load_New_Image} */}
// //               {/* <Image source={this.state.uri} /> */}
// //               <Text style={{color: 'black'}}>Background</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity
// //               style={{
// //                 backgroundColor: 'grey',
// //                 height: '100%',
// //                 width: '23.75%',
// //                 marginRight: '1%',
// //               }}></TouchableOpacity>
// //             <TouchableOpacity
// //               style={{
// //                 backgroundColor: 'grey',
// //                 height: '100%',
// //                 width: '23.75%',
// //               }}></TouchableOpacity>
// //             <TouchableOpacity
// //               style={{
// //                 backgroundColor: 'grey',
// //                 height: '100%',
// //                 width: '23.75%',
// //                 marginHorizontal: '1%',
// //               }}></TouchableOpacity>
// //           </View>
// //         </View>
// //       </View>
// //     );
// //   }
// // }

// // export default Two;

// import React, {Component} from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// export default class Two extends Component {
//   state = {
//     color: '#1B5ADE',
//     color2: 'black',
//     backgroundColor: '#f3f3f5',
//     backgroundColor2: '#f3f3f5',
//     pressed: false,
//   };

//   changeColor2() {
//     if (!this.state.pressed) {
//       this.setState({
//         pressed: true,
//         color: 'white',
//         color2: 'white',
//       });
//     } else {
//       this.setState({
//         pressed: false,
//         color: 'white',
//         color2: 'white',
//       });
//     }
//   }

//   changeColor() {
//     if (!this.state.pressed) {
//       this.setState({
//         pressed: true,
//         backgroundColor: '#1B5ADE',
//         backgroundColor2: 'black',
//       });
//     } else {
//       this.setState({
//         pressed: false,
//         backgroundColor: '#333333',
//         backgroundColor2: '#1B5ADE',
//       });
//     }
//   }

//   render() {
//     const {detailsOnPress} = this.props;
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={{backgroundColor: this.state.backgroundColor, padding: 15}}
//           onPress={() =>
//             this.changeColor() + this.changeColor2() + detailsOnPress
//           }>
//           <Text style={{color: this.state.color}}>1 Button</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{backgroundColor: this.state.backgroundColor2, padding: 15}}
//           onPress={() =>
//             this.changeColor() + this.changeColor2() + detailsOnPress
//           }>
//           <Text style={{color: this.state.color2}}>2 button!</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{backgroundColor: this.state.backgroundColor, padding: 15}}
//           onPress={() =>
//             this.changeColor() + this.changeColor2() + detailsOnPress
//           }>
//           <Text style={{color: this.state.color}}>3 Button</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{backgroundColor: this.state.backgroundColor, padding: 15}}
//           onPress={() =>
//             this.changeColor() + this.changeColor2() + detailsOnPress
//           }>
//           <Text style={{color: this.state.color}}>4 Button</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });

// // import React, {Component, useState} from 'react';
// // import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// // const Two = () => {
// //   const [textcolor, setTextcolor] = useState('background');

// //   return (
// //     <PreviewLayout
// //       selectedValue={textcolor}
// //       values={['background', 'Edit text']}
// //       setSelectedValue={setTextcolor}></PreviewLayout>
// //   );
// // };

// // const PreviewLayout = ({values, selectedValue, setSelectedValue}) => (
// //   <View style={{padding: 10, flex: 1}}>
// //     <View style={styles.row}>
// //       {values.map(value => (
// //         <TouchableOpacity
// //           key={value}
// //           onPress={() => setSelectedValue(value)}
// //           style={[styles.button, selectedValue === value && styles.selected]}>
// //           <Text
// //             style={[
// //               styles.buttonLabel,
// //               selectedValue === value && styles.selectedLabel,
// //             ]}>
// //             {value}
// //           </Text>
// //         </TouchableOpacity>
// //       ))}
// //     </View>
// //   </View>
// // );

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     marginTop: 8,
// //     backgroundColor: 'aliceblue',
// //   },
// //   box: {
// //     width: 50,
// //     height: 50,
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //   },
// //   button: {
// //     paddingHorizontal: 8,
// //     paddingVertical: 6,
// //     borderRadius: 4,
// //     backgroundColor: 'white',
// //     borderWidth: 1,
// //     alignSelf: 'flex-start',
// //     marginHorizontal: '1%',
// //     marginBottom: 6,
// //     minWidth: '48%',
// //     textAlign: 'center',
// //   },
// //   selected: {
// //     backgroundColor: 'white',
// //     borderWidth: 1,
// //   },
// //   buttonLabel: {
// //     fontSize: 12,
// //     fontWeight: '500',
// //     color: 'black',
// //   },
// //   selectedLabel: {
// //     color: '#1B5ADE',
// //   },
// // });

// // export default Two;

// //

//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Share, Linking} from 'react-native';

const teste = 'Rodrigo'

const baseUrl = 'chart.googleapis.com/chart?cht=qr&chs=300x300&chl='
 
class QrCode extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      // Default Value of the TextInput
      valueForQRCode: '',
      // Default value for the QR Code
    };
  }
  getTextInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    this.setState({ valueForQRCode: this.state.inputValue });
    console.log(this.state.valueForQRCode)
  }

  onShare = async () => {

    const value = baseUrl + this.state.valueForQRCode
    alert(value)
    console.log(value)
    Linking.openURL(`whatsapp://send?text=chart.googleapis.com/chart?cht=qr&chs=300x300&chl=` )
    

    // try {
    //   const result = await Share.share({
    //     message:
    //       value,
    //   })

    //   if (result.action === Share.sharedAction) {
    //     if (result.activityType) {
    //       // shared with activity type of result.activityType
    //     } else {
    //       // shared
    //     }
    //   } else if (result.action === Share.dismissedAction) {
    //     // dismissed
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          style={{ width: 350, height: 350 }}
          source={{ uri: `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${this.state.valueForQRCode}`}}
        />
        <TextInput
          // Input to get the value to set on QRCode
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ inputValue: text })}
          underlineColorAndroid="transparent"
          placeholder="Enter text to Generate QR Code"
        />
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QR Code </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onShare}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Compartilhar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default QrCode;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#F44336',
    marginBottom: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Share, Linking, AsyncStorage} from 'react-native'

const baseUrlAxios = 'https://servidor-catraca.herokuapp.com/enviarQRCode'

const baseUrl = 'https%3A%2F%2Fapi.qrserver.com%2Fv1%2Fcreate-qr-code%2F%3Fsize%3D150x150%26data%3D'
 
class QrCode extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      valueForQRCode: 'teste',
      typeService: 0,
      name: '',
      email: '',
      phoneNumber: '',      
      wasGenerated: false,
      wasSaved: false,
      isLoading: false,
    };
    this.getData()
    // this.getValue()
  }

  getData = async () => {
    this.setState({
        name: await AsyncStorage.getItem('name'),
        phoneNumber: await AsyncStorage.getItem('phone'),
        email: await AsyncStorage.getItem('email'),
        typeService: await AsyncStorage.getItem('guest_type') 
    })
  }
  getTextInputValue = async () => {
    const date = new Date()
    const text = await 'mob' + date.getMonth() +
                       date.getFullYear() + date.getHours() +
                       date.getMinutes() +  date.getSeconds()

    await this.setState({ valueForQRCode: text, wasGenerated: true, wasSaved: false });
  }

  onShare = async () => {

    const value = `${baseUrl}${this.state.valueForQRCode}`
    this.setState({isLoading: true})
    try{
    if(!this.state.wasSaved){
      const results = await fetch(baseUrlAxios, {
        method: 'POST',headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: this.state.valueForQRCode,
          guest_type: this.state.typeService,
          guest_name: this.state.name,
          guest_email: this.state.email,
          guest_fone: this.state.phoneNumber
        }),
      })
      console.log(results)
      this.setState({wasSaved: true, isLoading: false})      
    }
    Linking.openURL(`whatsapp://send?text=${value}&phone=55${this.state.phoneNumber}` )
  } catch(err){
    console.log(err)
  }
    

    
  
  }
  render() {
    return (
        <View style={styles.MainContainer}>
        <Image
          style={styles.qrCode}
          source={
            { uri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.state.valueForQRCode}`
            }}
        />
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Gerar</Text>
        </TouchableOpacity>
        {this.state.wasGenerated ?
        <TouchableOpacity
          onPress={this.onShare}
          activeOpacity={0.7}
          style={styles.button}
          disabled={this.state.isLoading}>
          <Text style={styles.TextStyle}> {this.state.isLoading ? 'Aguarde...' : 'Compartilhar'} </Text>
        </TouchableOpacity> 
        : null}
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
    paddingTop: 30
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    margin: 10,
    borderWidth: 1,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 30,
    borderRadius: 20
  },
  TextStyle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 'auto'
  },
  qrCode: {
    margin:5,
    width: 250,
    height: 250
  }
  
});
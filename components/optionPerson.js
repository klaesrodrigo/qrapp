import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';
const mockData = [
    {
        label: 'Visitante',
        RNchecked: false
    },
    {
        label: 'Prestador de Serviços',
        RNchecked: false
    },
    {
      label: 'Múltiplos visitantes (Festas e eventos)',
      RNchecked: false
    }
];

export default class optionPerson extends Component {
    _onSelect = ( item ) => {
      console.log(item);
    };

  render() {
    return (
      <View style={styles.MainContainer}>
      <Text style={styles.Text}>Quem você gostaria de autorizar a entrar no condomínio?</Text>
          <View style={{ fontSize: 40, flex: 1}} >
              <CheckboxFormX
                  style={styles.CheckboxFormX}
                  dataSource={mockData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={16}
                  onChecked={(item) => this._onSelect(item)}
              />
          </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 40,
  },
  Text: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 100
  },
  CheckboxFormX: {
    marginBottom: 20
  }
})

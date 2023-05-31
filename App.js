import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from 'react-native'


export default function app(){
  const [alcool, setAlcool] = useState(0.00)
  const [gasolina, setGasolina] = useState(0.00)
  const [modalVisible, setModalVisible] = useState(false)
  const [resultadoCalculo, setResultadoCalculo] = useState('')
  
  function calculo(){
    let precoAlcool = parseFloat(alcool)
    let precoGasolina = parseFloat(gasolina)
    let resultado = precoAlcool / precoGasolina
  
    if(resultado < 0.7){
      console.log(resultado.toFixed(2))
      return 'Compensa usar alcool'
    }else if(resultado >= 0.7){
      console.log(resultado.toFixed(2))
      return 'Compensa usar gasolina'
    }
  }

  function abrirModal(){
    setModalVisible(true)
  }

  function fecharModal(){
    setModalVisible(false)
  }

 function resultado(){
    if(alcool == '' || gasolina == ''){
      alert('Preencha os dois campos para calcular')
      return
    }
    const resultado = calculo();
    setResultadoCalculo(resultado)
    abrirModal();
  };

  return(
    <View style={styles.container}>
      <View style={styles.areaTitle}>
        <Image 
         style={styles.image}
         source={ require('./src/images/logo.png')}
        />
        <Text style={styles.title}>Qual melhor opção?</Text>
      </View>
      <Text style={styles.text}>Álcool (preço por litro):</Text>
      <TextInput 
       style={styles.textInput}
       onChangeText={ (value)=> setAlcool(value)}
       keyboardType='numeric'
      />
      <Text style={styles.text}>Gasolina (preço por litro):</Text>
      <TextInput 
       style={styles.textInput}
       onChangeText={ (value)=> setGasolina(value)}
       keyboardType='numeric'
      />
      
      <TouchableOpacity 
      style={styles.btn}
      onPress={ 
        resultado
      }
      >
        <Text  style={styles.textBtn}>Calcular</Text>
      </TouchableOpacity>

       
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.areaTitleModal}>
            <Image 
              style={styles.modalImage}
              source={ require('./src/images/gas.png')}/>
            <Text style={styles.resultado}>{ resultadoCalculo }</Text>
          </View>
            <Text style={styles.comPreco}>Com os preços:</Text>
            <Text style={styles.preco}>Alcool: R$ {parseFloat(alcool).toFixed(2)}</Text>
            <Text style={styles.preco}>Gasolina: R$ {parseFloat(gasolina).toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.btnModal}
              onPress={ fecharModal }
            >
              <Text style={styles.textoBtnModal}>Calcular Novamente</Text>
            </TouchableOpacity>
        </View>
      </Modal>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525659'
  },
  areaTitle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 50,
    marginBottom: 20
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 12,
    marginTop: 5,
  },
  textInput: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  btn: {
    backgroundColor: '#FF0000',
    height: 50,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  modalContainer: {
    backgroundColor: '#525659',
    width: '100%',
    height: '100%',
  },
  areaTitleModal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalImage: {
    width: 250,
    height: 250,
    marginTop: 50,
    marginBottom: 20
  },
  resultado: {
    color: '#00FF00',
    fontSize: 25,
    fontWeight: 'bold'
  },
  comPreco: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#FFF'
  },
  preco: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    marginTop: 5
  },
  btnModal: {
    borderWidth: 1,
    borderColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 10,
    borderRadius: 5,
    marginTop: 15
  },
  textoBtnModal: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 25,
  }
})
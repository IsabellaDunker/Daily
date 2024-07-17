import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput, Modal, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons/faCircle'
import { Link } from 'expo-router';

export default function EditTask(){
	const [iconClikedC, setIconClikedC] = useState(false);

	const buttons = [
    { id: 'button1', label: 'Diariamente' },
    { id: 'button2', label: 'Semanalmente' },
    { id: 'button3', label: 'Mensalmente' },
  ];

  const [selectedButton, setSelectedButton] = useState(buttons[0].id);

	// const handleButtonPress = (buttonId) => {
  //   setRepeat(true)
  //   console.log(repeat)
  //   setSelectedButton(buttonId);
  // };

  const toogleIcon = () => {
    setIconClikedC(!iconClikedC);
  }
  const taskReminder = () => {
    // pega a dateTime do db
    // autoriza notificação no celular
  }

  const taskImage = () => {
    // pickImage()
    // adiciona imagem no db
  }

	const taskDelete = () => {
    // apaga
    // volta pro inicio
  }

  return (
		<View style={styles.editTask}>
			<View style={styles.header}>
				<Pressable>
          <Link href={"/home"}><Ionicons name='chevron-back' size={30} style={styles.iconC}/></Link>
        </Pressable>
			</View>

			<View>
				<View style={styles.row}>
					<Pressable onPress={toogleIcon}>
					{iconClikedC ? (
            <FontAwesomeIcon size={27} style={styles.iconC} icon={ faCircleSolid } />
          ) : (
            <FontAwesomeIcon size={27} style={styles.iconC} icon={ faCircle } />
          )}
					</Pressable>
					<Text style={styles.maintext}>Nome tarefa</Text>
				</View>

				<View>
					<Pressable 
						onPress={() => {
							taskReminder()
						}}
						style={styles.buttonEdit}>
						<Ionicons name='notifications' size={23} style={styles.icon}/>
						<Text style={styles.buttonEditT}>Lembrar-me </Text>
					</Pressable>

					<Pressable 
            onPress={() => {
              //setModalVisible(!modalVisible)
            }}
            style={styles.buttonEdit}>
             	<Ionicons name='calendar' size={23} style={styles.icon}/>
              <Text style={styles.buttonEditT}>Data de conclusão</Text>
					</Pressable>

					<Pressable 
            onPress={() => {
              //setModalRepeatVisible(true)
            }}
            style={styles.buttonEdit}>
             	<Ionicons name='repeat' size={23} style={styles.icon}/>
              <Text style={styles.buttonEditT}>Repetir</Text>
					</Pressable>

					{/* Aqui tem que arrumar a imagem primeiro */}
					<View style={styles.container}>
            {/* {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
            {selectedImage && <Pressable onPress={deleteImage}><Text style={styles.delete}>X</Text></Pressable>} */}
          </View>
					<Pressable 
            onPress={taskImage}
            style={styles.buttonEdit}>
             	<Ionicons name='image' size={23} style={styles.icon}/>
              <Text style={styles.buttonEditT}>Adicionar imagem</Text>
					</Pressable>
				</View>
			</View>
		</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 20,
    marginBottom: 30,
  },
  delete: {
    color:'#6A6A6A',
    fontSize: 18,
    marginRight: 40,
    marginTop: 30,
  },
  editTask: {
    backgroundColor: '#282727',
    height: 1000,
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
  },
  maintext: {
    color: '#fff',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Opensans'
  },
  icon: {
    color:'#6A6A6A',
    marginRight: 15,
    marginTop: 3,
    marginBottom: 10,
  },
  iconC: {
    color: '#fff',
    fontSize: 32,
  },
  input: {
    height: 60,
		width: 200,
		borderRadius: 6,
    padding: 15,
		fontSize: 20,
    color:'white'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 35,
    marginTop: 30,
    marginLeft: 20,
  },
  buttonEdit: {
    flexDirection: 'row',
    marginBottom: 35,
    marginLeft: 20,
    borderBottomWidth : 0.8,
    borderColor: '#3D3D3D',
    marginRight: 20,
  },
  buttonEditT: {
    color:'#6A6A6A',
    fontFamily: 'Opensans',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: 350,
    margin: 20,
    backgroundColor: '#363636',
    borderRadius:10,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    marginTop: 2,
    marginBottom: 20,
  },
  rowModal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    color: '#434AED',
    fontWeight: 'bold',
    fontSize: 17,
  },
  cancelStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
  selectedRepeat: {
    color: '#434AED',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
  textRemoveStyle : {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 17,
  }
});

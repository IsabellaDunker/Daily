import React, { useState, useEffect } from 'react';
import {TextInput, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function NewTask(){
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = React.useState('');

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.centeredView}>
          <View style={styles.inputView}>
						<TextInput
						style={styles.input}
						value={task}
						placeholder="Nova tarefa  +"
						placeholderTextColor={'#6A32E1'}/>
          </View>
        </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputView: {
    height: 62,
    backgroundColor: '#363636',
    marginStart: 45,
    marginEnd: 45,
    marginBottom: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
	input: {
    height: 60,
		width: 200,
		borderRadius: 6,
    padding: 15,
    fontFamily: 'Opensans',
		fontSize: 24,
    color:'white'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
		color: 'white',
		fontFamily: 'Opensans',
		fontSize: 30,
  },
	icon: {
    color: '#6A32E1',
  },
	textbt: {
    color: '#6A32E1',
    fontSize: 24,
    fontFamily: 'Opensans',
    marginStart: 24,
		marginEnd: 6,
    marginBottom: 3,
  },
});

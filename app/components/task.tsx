import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'
import { faRepeat } from '@fortawesome/free-solid-svg-icons/faRepeat'

export default function Task({name}: {name:string }){
  const [iconClikedS, setIconClikedS] = useState(false);
  const [iconClikedC, setIconClikedC] = useState(false);
  const iconClickedRef = useRef(false); 
  const [taskStyle, setTaskStyle] = useState(false);
  let [repeat, setRepeat] = useState(false)

  const taskFavorite = () => {
    setIconClikedS(!iconClikedS);
    // mover task para 'favorites'
    // update no db type = 'favorites'
  }

  const taskDone = () => {
    setTaskStyle(!taskStyle);
    setIconClikedC(!iconClikedC);
    iconClickedRef.current = true;
  }

  useEffect(() => {
    if (iconClickedRef.current) {
      //updateData();
      iconClickedRef.current = false; // Reseta para o próximo clique
    }
  }, [iconClikedC]); 

  return(
    <View style={styles.container}>
      
      <View style={styles.row}>
        <Pressable onPress={taskDone}>
          {iconClikedC ? (
            <FontAwesomeIcon size={27} style={styles.iconC} icon={ faCircleSolid } />
          ) : (
            <FontAwesomeIcon size={27} style={styles.iconC} icon={ faCircle } />
          )}
        </Pressable>
        <View style={styles.taskText}>
            <Text style={taskStyle ? styles.maintextDone : styles.maintext}>{name}</Text>
          <View style={styles.rowModal}>
            <Text style={styles.bottomDate}>{"13/07/2024"}</Text>
          </View>
        </View>
      </View>
      <Pressable onPress={taskFavorite}>
        {iconClikedS ? (
          <FontAwesomeIcon size={23} style={styles.iconS} icon={ faStarSolid } />
        ) : (
          <FontAwesomeIcon size={23} style={styles.iconS} icon={ faStar } />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363636',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: 15,
    marginStart: 10,
    marginEnd: 10,
    height: 62,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  maintext: {
    color: '#fff',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Opensans',
  },
  maintextDone: {
    color: '#DEDEDE',
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Opensans',
    textDecorationLine: 'line-through',
  },
  iconC: {
    color: '#fff',
    marginTop: 10,
  },
  iconS: {
    color: '#6A32E1',
  },
  taskText: {
    flexDirection: 'column',
  },
  bottomDate: {
    fontFamily: 'Opensans',
    color: '#D3CFCF',
    marginLeft: 22,
    fontSize: 13,
    marginRight: 10
  },
  bottomDateLate: {
    fontFamily: 'Opensans',
    color: 'red',
    marginLeft: 22,
    fontSize: 13,
    marginRight: 10
  },
  rowModal: {
    flexDirection: 'row',
  },
})
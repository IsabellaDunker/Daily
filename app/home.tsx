import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import background1 from '../assets/images/background1.png'
import Header from './components/header';
import Task from './components/task';
import NewTask from './components/Modal/NewTask';
import { Link } from 'expo-router';

export default function Home() {
  return (
   <View style={styles.container}>
      <ImageBackground source={background1} resizeMode="cover" style={styles.image}>
        <View>
          <Header/>
        </View>
        <View>
        <Link href={"/components/editTask"} asChild>
          <TouchableOpacity>     
              <Task name={"Lavar as roupa"}/>
          </TouchableOpacity>
        </Link>
        </View>
        <View style={styles.footer}>
          <NewTask/>
        </View>
      </ImageBackground> 
   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

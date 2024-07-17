import React from "react";
import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
  return(
    <View style={styles.container}>
      <View style={styles.iconsView}>
        <Pressable>
          <Link href={"/"}><Ionicons name='chevron-back' size={30} style={styles.icon}/></Link>
        </Pressable>
      </View>
      <Text style={styles.mainText}>Tarefas</Text>
      <Text style={styles.date}>13/07/24</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarHeight,
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    color: '#6A32E1',
  },
  mainText: {
    color: '#6A32E1',
    fontSize: 32,
    fontFamily: 'Opensans',
    marginStart: 24,
    marginBottom: 3,
  },
  date: {
    color: '#6A32E1',
    fontSize: 20,
    fontFamily: 'Opensans',
    marginStart: 24,
  }
});
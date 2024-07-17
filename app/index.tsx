import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import NewList from './components/Modal/NewTask';

export default function List(){
  return(
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity>
          <View style={styles.cardContent}>
            <Ionicons name='calendar' size={30} color="#fff"/>
            <Link href={"/home"}>
              <Text style={styles.cardText}>Para hoje</Text>
            </Link>
          </View>
        </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.cardContent}>
            <Ionicons name='list' size={30} color="#fff"/>
            <Link href={"/home"}>
              <Text style={styles.cardText}>Tarefas</Text>
            </Link>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardContent}>
            <Ionicons name='star' size={30} color="#fff"/>
            <Link href={"/home"}>
              <Text style={styles.cardText}>Importantes</Text>
            </Link>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardContent}>
            <Ionicons name='checkbox' size={30} color="#fff"/>
            <Link href={"/home"}>
              <Text style={styles.cardText}>Concluídas</Text>
            </Link>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <NewList/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  card: {
    marginVertical: 10,
    paddingHorizontal: 100,
    backgroundColor: '#333',
    borderRadius: 15,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 20,
  },
  cardContainer: {
    marginTop:20,
    gap: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardText: {
    marginLeft: 10,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
  },
});
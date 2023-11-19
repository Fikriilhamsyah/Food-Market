import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICButtonMin, ICButtonPlus } from '../../../assets'

const Counter = () => {
  return (
    <View style={styles.containter}>
      <TouchableOpacity activeOpacity={0.6}>
        <ICButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity activeOpacity={0.6}>
        <ICButtonPlus />
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    containter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        fontSize: 16,
        color: '#020202',
        marginHorizontal: 10
    }
})
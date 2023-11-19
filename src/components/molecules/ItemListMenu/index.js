import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICNext } from '../../../assets'

const ItemListMenu = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <ICNext />
    </View>
  )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
    },
    text: {
        fontSize: 14,
        color: '#020202'
    }
})
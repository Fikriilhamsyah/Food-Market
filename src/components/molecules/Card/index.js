import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Rating from '../Rating'

const Card = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text>
        <Rating />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 24,
    },
    image: {
        width: 200,
        height: 140,
        resizeMode: 'cover',
    },
    content: {
        padding: 12,
    },
    text: {
        fontSize: 16,
        color: '#020202'
    },
})
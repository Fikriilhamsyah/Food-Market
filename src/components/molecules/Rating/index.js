import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICStartOn, ICStartOff } from '../../../assets'

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
        <View style={styles.startContainer}>
            <ICStartOn />
            <ICStartOn />
            <ICStartOn />
            <ICStartOn />
            <ICStartOff />
        </View>
        <Text style={styles.rating}>4.5</Text>
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
    },
    startContainer: {
        flexDirection: 'row',
    },
    rating: {
        color: '#8D92A3',
        marginLeft: 4
    }
})
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileDummy } from '../../../assets'

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
        <View>
            <Text style={styles.appName}>FoodMarket</Text>
            <Text style={styles.desc}>Let's get some food</Text>
        </View>
        <Image source={ProfileDummy} styles={styles.profile} />
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white',
      },
      appName: {
        fontSize: 22,
        color: '#020202',
      },
      desc: {
        fontSize: 14,
        color: '#8D92A3',
      },
      profile: {
        width: 50,
        height: 50,
        borderRadius: 8,
      },
})
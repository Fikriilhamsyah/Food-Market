import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5, FoodDummy6, ProfileDummy } from '../../assets'
import { Card, Gap } from '../../components'

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let's get some food</Text>
        </View>
        <Image source={ProfileDummy} styles={styles.profile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Gap width={24} />
          <Card image={FoodDummy1} />
          <Card image={FoodDummy2} />
          <Card image={FoodDummy3} />
          <Card image={FoodDummy4} />
          <Card image={FoodDummy5} />
          <Card image={FoodDummy6} />
          {/* <Gap width={24} /> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

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
  card: {
    flexDirection: 'row',
    marginVertical: 12,
  }
})
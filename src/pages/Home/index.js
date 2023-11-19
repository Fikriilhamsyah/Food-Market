import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
  FoodDummy6,
} from '../../assets';
import { Card, Gap, HomeProfile, HomeTabSection } from '../../components';

const screenHeight = Dimensions.get('window').height
const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.page}>
          <HomeProfile />
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.card}>
                <Gap width={24} />
                <Card image={FoodDummy1} />
                <Card image={FoodDummy2} />
                <Card image={FoodDummy3} />
                <Card image={FoodDummy4} />
                <Card image={FoodDummy5} />
                <Card image={FoodDummy6} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.tabContainer}>
            <HomeTabSection />
          </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  }
})
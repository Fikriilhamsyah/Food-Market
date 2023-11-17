import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import {
  ProfileDummy,
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
  FoodDummy6,
 }
 from '../../assets'
import { Card, Gap } from '../../components'
import { TabView, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => (
  <View style={{ backgroundColor: '#ff4081', flex: 1 }} />
);

const SecondRoute = () => (
  <View style={{ backgroundColor: '#673ab7', flex: 1 }} />
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: FirstRoute,
});

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'New Taste' },
    { key: '2', title: 'Popular' },
    { key: '3', title: 'Recommended' },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let's get some food</Text>
        </View>
        <Image source={ProfileDummy} styles={styles.profile} />
      </View>
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
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'yellow',
  },
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
  },
  tabContainer: {
    flex: 1,
  }
})
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5, FoodDummy6 } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#020202', width: '0.20%', height: 3 }}
      style={{ backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}
      tabStyle = {{width: 'auto'}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? '#020202' : '#8D92A3', margin: 8 }}>{route.title}</Text>
      )}
    />
  );
  
  const NewTaste = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood rating={3} image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
        <ItemListFood rating={3} image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
        <ItemListFood rating={3} image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
        <ItemListFood rating={3} image={FoodDummy5} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
        <ItemListFood rating={3} image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
        <ItemListFood rating={3} image={FoodDummy6} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
      </View>
    )
  }
  
  const Popular = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
          <ItemListFood rating={3} image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy6} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy5} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
        </View>
      )
    };

  const Recommended = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
          <ItemListFood rating={3} image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy5} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy6} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
          <ItemListFood rating={3} image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} type="product" name="Sop Bumil" price="380.000" />
        </View>
      )
    };
  
  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

const HomeTabSection = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{backgroundColor: 'white'}}
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({})
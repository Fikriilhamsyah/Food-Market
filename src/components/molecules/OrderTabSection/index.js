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
  
  const InProgress = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood rating={3} image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} type="in-progress" name="Sop Bumil" items={3} price="2.000.000" />
        <ItemListFood rating={3} image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} type="in-progress" name="Sop Bumil" items={3} price="2.000.000" />
        <ItemListFood rating={3} image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')} type="in-progress" name="Sop Bumil" items={3} price="2.000.000" />
        <ItemListFood rating={3} image={FoodDummy5} onPress={() => navigation.navigate('FoodDetail')} type="in-progress" name="Sop Bumil" items={3} price="2.000.000" />
        <ItemListFood rating={3} image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} type="in-progress" name="Sop Bumil" items={3} price="2.000.000" />
        <ItemListFood rating={3} image={FoodDummy6} onPress={() => navigation.navigate('FoodDetail')} type="in-progress" name="Sop Bumil" items={3} price="2.000.000" />
      </View>
    )
  }
  
  const PastOrders = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
          <ItemListFood rating={3} image={FoodDummy1} onPress={() => navigation.navigate('OrderDetail')} type="past-orders" name="Sop Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" status="Cancel" />
          <ItemListFood rating={3} image={FoodDummy3} onPress={() => navigation.navigate('OrderDetail')} type="past-orders" name="Sop Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" />
          <ItemListFood rating={3} image={FoodDummy2} onPress={() => navigation.navigate('OrderDetail')} type="past-orders" name="Sop Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" status="Cancel" />
          <ItemListFood rating={3} image={FoodDummy4} onPress={() => navigation.navigate('OrderDetail')} type="past-orders" name="Sop Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" />
          <ItemListFood rating={3} image={FoodDummy6} onPress={() => navigation.navigate('OrderDetail')} type="past-orders" name="Sop Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" status="Cancel" />
          <ItemListFood rating={3} image={FoodDummy5} onPress={() => navigation.navigate('OrderDetail')} type="past-orders" name="Sop Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" />
        </View>
      )
    };
  
  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });

const OrderTabSection = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' },
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

export default OrderTabSection

const styles = StyleSheet.create({})
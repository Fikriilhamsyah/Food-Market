import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Rating from '../Rating';

/*
TYPE:
1. Product
2. Order-Summary
3. In-Progress
4. Past-Orders
*/

const ItemListFood = ({image, onPress, type, name, price, items, rating, date, status}) => {
  const renderContent = () => {
    switch(type){
      case 'product':
        // item list product seperti di home page
        return (
          <>
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        )
        return
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        )
      case 'in-progress':
        // item in-progress
        return (
          <>
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>{items} items. IDR {price}</Text>
            </View>
          </>
        )
      case 'past-orders':
        // item past orders
        return (
          <>
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>{items} items. IDR {price}</Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        )
      default:
        // item product
        return (
          <>
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        )
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          {renderContent()}
      </View>
    </TouchableOpacity>
  )
}

export default ItemListFood

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12
  },
  content:  {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#020202'
  },
  price: {
    fontSize: 13,
    color: '#8D92A3'
  },
  items: {
    fontSize: 13,
    color: '#8D92A3'
  },
  date: {
    fontSize: 10,
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    color: '#D9435E',
  }
})
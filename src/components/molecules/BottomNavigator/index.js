import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICHomeOff, ICHomeOn, ICOrderOff, ICOrderOn, ICProfileOff, ICProfileOn } from '../../../assets';

const Icon = ({label, focusIc}) => {
    // switch(label){
    //     case 'Home':
    //         if(focusIc === true){
    //             <ICHomeOn />
    //         }else{
    //             <ICHomeOff />
    //         }
    //     case 'Order':
    //         if(focusIc === true){
    //             <ICOrderOn />
    //         }else{
    //             <ICOrderOff />
    //         }
    //     case 'Profile':
    //         if(focusIc === true){
    //             <ICProfileOn />
    //         }else{
    //             <ICProfileOff />
    //         }
    //     default :
    //     return <ICOrderOn />;
    // }

    switch(label){
        case 'Home':
            return focusIc ? <ICHomeOn /> : <ICHomeOff />
        case 'Order':
            return focusIc ? <ICOrderOn /> : <ICOrderOff />
        case 'Profile':
            return focusIc ? <ICProfileOn /> : <ICProfileOff />
        default :
        return <ICOrderOn />;
    }
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });
        
                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params);
                }
                };
        
                const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
                };
        
                return (
                <TouchableOpacity
                    key={index}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    activeOpacity={0.7}
                    style={styles.navTab}
                >
                    <Icon label={label} focusIc={isFocused} />
                    <Text style={styles.navTabText}>{label}</Text>
                </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 13,
        paddingHorizontal: 50,
        justifyContent: 'space-between'
    },
    navTab: {
        alignItems: 'center',
    },
    navTabText: (navTabTextColor) => (
        {
            color: navTabTextColor,
            marginTop: 2,
        }
    ),
})
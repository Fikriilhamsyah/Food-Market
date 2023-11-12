import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SuccessSignUp, SignUpAddress, SignUp, SignIn, SplashScreen } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplasScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={{headerShown: false}} />
            <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default Router;
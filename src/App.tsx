import React from 'react';
import { SplashScreen, SignIn } from './pages';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;

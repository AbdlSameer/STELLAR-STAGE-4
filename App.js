import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';
import HomeScreen from './screens/Home'

const Stack = createStackNavigator();

function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name = "Home" component={HomeScreen}/>
          <Stack.Screen name = "DailyPic" component={DailyPicScreen}/>
          <Stack.Screen name = "SpaceCrafts" component={SpaceCraftsScreen}/>
          <Stack.Screen name = "StarMap" component={StarMapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
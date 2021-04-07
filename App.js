import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Homescreen'
import SettingScreen from './src/screens/SettingScreen'
import Data from './src/screens/Data'



const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerTitle:'LoginPage',
                 headerTitleAlign:"center",
                 headerStyle: { backgroundColor: '#48bab1' },
                 headerTintColor: 'white', }} />

        <Stack.Screen name="Settings" component={SettingScreen} 
         options={{headerTitle:'RegisterPage',
         headerTitleAlign:"center",
         headerStyle: { backgroundColor: '#48bab1' },
         headerTintColor: 'white', }}/>
         <Stack.Screen name="Data" component={Data}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default App;
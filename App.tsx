import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import New1Screen from './src/screens/New1Screen';
import New2Screen from './src/screens/New2Screen';

export default function App() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="New1" component={New1Screen}/>
        <Tab.Screen name="New2" component={New2Screen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



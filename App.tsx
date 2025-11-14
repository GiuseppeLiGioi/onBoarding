import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/contexts/AppContext";
import HomeScreen from "./src/screens/HomeScreen";
import New1Screen from "./src/screens/New1Screen";
import New2Screen from "./src/screens/New2Screen";
import { SafeAreaView } from "react-native-safe-area-context"; /*Si usa per evitare che gli elementi vengano disposti in punti non visbili sul dispositivo, dal nome li posiziona nelle parti visibili delo schermo.  */

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    /*Wrap degli screens dentro il Provider in modo che possano accedere ai valori definiti nel context */
    <AppProvider>
      {/*Attualmente sfondo nero + icone bianche */}
      <SafeAreaView style={{ padding: 3, backgroundColor: "#0e0d0dff" }} />
      {/*Mi consente di modificare il colore delle icone nella parte alta del dispositivo (impo, batteria, wi-fi, orario etc etc) */}
      <StatusBar style="light" />

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="New1" component={New1Screen} />
          <Tab.Screen name="New2" component={New2Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

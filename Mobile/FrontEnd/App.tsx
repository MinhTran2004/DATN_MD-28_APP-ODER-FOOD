import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from "./src/View/ScreenLogin";
import { NavigationContainer } from "@react-navigation/native";
import ScreenRegister from "./src/View/ScreenRegister";
import ScreenHome from "./src/View/ScreenHome";
import ScreenCart from "./src/View/ScreenCart";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ScreenProfile from "./src/View/ScreenProfile";
import ScreenNotification from "./src/View/ScreenNotification";
import ScreenMessenger from "./src/View/ScreenMessenger";
import ScreenOrder from "./src/View/ScreenOrder";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Register" component={ScreenRegister} />
        <Stack.Screen name="Cart" component={ScreenCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ScreenHome} options={{}}/>
      <Tab.Screen name="Order" component={ScreenOrder} />
      <Tab.Screen name="Messenger" component={ScreenMessenger} />
      <Tab.Screen name="Notification" component={ScreenNotification} />
      <Tab.Screen name="Profile" component={ScreenProfile} />
    </Tab.Navigator>
  )
}
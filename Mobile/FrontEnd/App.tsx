import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, LogBox, TouchableOpacity, View } from "react-native";
import ScreenLogin from "./src/view/ScreenLogin";
import { NavigationContainer } from "@react-navigation/native";
import ScreenRegister from "./src/view/ScreenRegister";
import ScreenHome from "./src/view/ScreenHome";
import ScreenCart from "./src/view/ScreenCart";
import ScreenAccount from "./src/view/ScreenAccount";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ScreenProfile from "./src/view/ScreenProfile";
import ScreenNotification from "./src/view/ScreenNotification";
import ScreenMessenger from "./src/view/ScreenMessenger";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScreenOrderWaiting from "./src/view/ScreenOrderWaiting";
import ScreenOrderCompleted from "./src/view/ScreenOrderCompleted";
import ScreenOrderCancelled from "./src/view/ScreenOrderCancelled";
import ScreenPayment from "./src/view/ScreenPayment";
import ScreenCategoryProduct from "./src/view/ScreenCategoryProduct";
import ScreenInforProduct from "./src/view/ScreenInforProduct";
import ScreenFavourite from "./src/view/ScreenFavourite";
import ScreenAddress from "./src/view/ScreenAddress";
import ScreenEditAddress from "./src/view/ScreenEditAddress";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ScreenStoreRegistrantion from "./src/view/ScreenStoreRegistrantion";
import ScreenMessengerDetail from "./src/view/ScreenMessengerDetail";
import ScreenSearch from "./src/view/ScreenSearch";
import ScreenInForOder from "./src/view/ScreenInForOder";
import { Provider } from "react-redux";
import store from "./src/redux/store";

LogBox.ignoreLogs(['Warning: A props object containing a "key" prop is being spread into JSX']);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomTabs} />
            <Stack.Screen name="Login" component={ScreenLogin} />
            <Stack.Screen name="Register" component={ScreenRegister} />
            <Stack.Screen name="InforProduct" component={ScreenInforProduct} />
            <Stack.Screen name="Cart" component={ScreenCart} />
            <Stack.Screen name="Payment" component={ScreenPayment} />
            <Stack.Screen name="Address" component={ScreenAddress} />
            <Stack.Screen name="EditAddress" component={ScreenEditAddress} />
            <Stack.Screen name="Favourite" component={ScreenFavourite} />
            <Stack.Screen name="StoreRegistrantion" component={ScreenStoreRegistrantion} />
            <Stack.Screen name="CategoryProduct" component={ScreenCategoryProduct} />
            <Stack.Screen name="MessengerDetail" component={ScreenMessengerDetail} />
            <Stack.Screen name="Search" component={ScreenSearch} />
            <Stack.Screen name="InForOder" component={ScreenInForOder} />
            <Stack.Screen name="OrderCancelled" component={ScreenOrderCancelled} />
            <Stack.Screen name="OrderCompleted" component={ScreenOrderCompleted} />
            <Stack.Screen name="Account" component={ScreenAccount} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator activeColor="#5b2bb2" initialRouteName="Profile" shifting={true} labeled={true} activeIndicatorStyle={{ backgroundColor: 'none' }} barStyle={{ backgroundColor: 'white', height: 70 }}>
      <BottomTab.Screen name="Home" component={ScreenHome} options={{ tabBarIcon: ({ color }: any) => <Image source={require("./src/Image/icon_home.png")} style={{ width: 20, height: 20, tintColor: color }} /> }} />
      <BottomTab.Screen name="Notification" component={ScreenNotification} options={{ tabBarBadge: true, tabBarIcon: ({ color }: any) => (<Image source={require("./src/Image/icon_notification.png")} style={{ width: 20, height: 20, tintColor: color }} />) }} />
      <BottomTab.Screen name="Messenger" component={ScreenMessenger} options={{ tabBarBadge: true, tabBarIcon: ({ color }: any) => (<Image source={require("./src/Image/icon_messenger.png")} style={{ width: 20, height: 20, tintColor: color }} />) }} />
      <BottomTab.Screen name="Order" component={TopTabs} options={{ tabBarIcon: ({ color }: any) => (<Image source={require("./src/Image/icon_order.png")} style={{ width: 20, height: 20, tintColor: color }} />) }} />
      <BottomTab.Screen name="Profile" component={ScreenProfile} options={{ tabBarIcon: ({ color }: any) => (<Image source={require("./src/Image/icon_profile.png")} style={{ width: 20, height: 20, tintColor: color }} />) }} />
    </BottomTab.Navigator>
  )
}

const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Chờ xác nhận" component={ScreenOrderWaiting} />
      <TopTab.Screen name="Hoàn thành" component={ScreenOrderCompleted} />
      <TopTab.Screen name="Đã hủy" component={ScreenOrderCancelled} />
    </TopTab.Navigator>
  )
}
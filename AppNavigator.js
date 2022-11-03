import "react-native-gesture-handler";
import React from "react";
import { StatusBar, Image, View, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "./src/utils/colors";
import { scale, verticalScale } from "./src/utils/responsiveScaling";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "./src/splashScreen";
import Home from "./src/Home";
// import Tracking from "./src/Tracking";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeIcon = require("./src/images/home.png");
// const trackIcon = require("./src/images/location.png");

export default function AppNavigator() {

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLORS.PRIMARY_LIGHT} />
      {Platform.OS === 'ios' && <View style={{ height: verticalScale(28), backgroundColor: COLORS.PRIMARY_LIGHT }} />}
      <NavigationContainer>
        {/* {!authStatus && (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
          </Stack.Navigator>
        )} */}
        {(
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              "tabBarShowLabel": false,
              "tabBarStyle": [
                {
                  "display": "none"
                },
                null
              ]
            }
            }
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                header: () => null,
                tabBarIcon: ({ }) => (
                  <Image
                    source={homeIcon}
                    style={{ width: scale(24), height: scale(24) }}
                  />
                ),
              }}
            />
            {/* <Tab.Screen
              name="Tracking"
              component={Tracking}
              options={{
                header: () => null,
                tabBarIcon: ({ }) => (
                  <Image
                    source={trackIcon}
                    style={{ width: scale(24), height: scale(24) }}
                  />
                ),
              }}
            /> */}
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

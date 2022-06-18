import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { scale } from "../constants/Layout";
import ProfileScreen from "../screens/ProfileScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: "modal" }}
      />
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].accentstroke,
        tabBarInactiveTintColor: Colors[colorScheme].black,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { paddingBottom: scale(4) },
        // tabBarItemStyle: { marginBottom: scale(4) },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={scale(24)} color={color} name="home-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="chatbox-outline" size={scale(24)} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: scale(54),
                height: scale(54),
                backgroundColor: Colors[colorScheme].black,
                position: "relative",
                bottom: scale(14),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: scale(14),
                transform: [{ rotate: "45deg" }],
              }}
            >
              <Ionicons
                color={Colors[colorScheme].white}
                name="add-circle-outline"
                size={scale(28)}
                style={{ transform: [{ rotate: "45deg" }] }}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourite"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="heart-outline" size={scale(24)} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" color={color} size={scale(24)} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome size={scale(24)} style={{ marginBottom: -3 }} {...props} />
  );
}

// headerRight: () => (
//   <Pressable
//     onPress={() => navigation.navigate("Modal")}
//     style={({ pressed }) => ({
//       opacity: pressed ? 0.5 : 1,
//     })}
//   >
//     <FontAwesome
//       name="info-circle"
//       size={25}
//       color={Colors[colorScheme].text}
//       style={{ marginRight: 15 }}
//     />
//   </Pressable>
// ),

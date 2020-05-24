import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ViewMarkers from "../screens/ViewMarkers";
import AddMarker from "../screens/addMarker";
import Marker from "../models/Marker";

export enum Screen {
  VIEW_MARKERS = "ViewMarkers",
  ADD_MARKER = "AddMarker",
}

export type RootStackParamList = {
  [Screen.VIEW_MARKERS]: undefined;
  [Screen.ADD_MARKER]: { addMarker: (marker: Omit<Marker, "id">) => void };
};

const Stack = createStackNavigator<RootStackParamList>();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screen.VIEW_MARKERS}
        headerMode="none"
        mode="modal"
      >
        <Stack.Screen name={Screen.VIEW_MARKERS} component={ViewMarkers} />
        <Stack.Screen name={Screen.ADD_MARKER} component={AddMarker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;

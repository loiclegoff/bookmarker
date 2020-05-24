import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, TextInput, FAB } from "react-native-paper";
import Header from "../components/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Screen } from "../navigation";
import { RouteProp } from "@react-navigation/native";

type AddMarkerScreenRouteProp = RouteProp<
  RootStackParamList,
  Screen.ADD_MARKER
>;

type AddMarkerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screen.ADD_MARKER
>;

type Props = {
  route: AddMarkerScreenRouteProp;
  navigation: AddMarkerScreenNavigationProp;
};

function AddMarker({ navigation, route }: Props) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  function onSaveMarker() {
    route.params.addMarker({ title, value });
    navigation.goBack();
  }

  return (
    <>
      <Header titleText="Add a new note" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Title Here"
          value={title}
          mode="outlined"
          onChangeText={setTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Link Here"
          value={value}
          onChangeText={setValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={title == "" ? true : false}
          onPress={() => onSaveMarker()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconButton: {
    backgroundColor: "rgba(46, 113, 102, 0.8)",
    position: "absolute",
    right: 0,
    top: 40,
    margin: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddMarker;

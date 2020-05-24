import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Screen } from "../navigation";
import Header from "../components/Header";
import Marker from "../models/Marker";

type ViewMarkersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screen.VIEW_MARKERS
>;

type Props = {
  navigation: ViewMarkersScreenNavigationProp;
};

function ViewMarkers({ navigation }: Props) {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const addMarker = (marker: Omit<Marker, "id">) => {
    const newMarker = { ...marker, id: markers.length + 1 };
    setMarkers([...markers, newMarker]);
  };

  return (
    <>
      <Header titleText="Simple Marker Taker" />
      <View style={styles.container}>
        {markers.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any markers</Text>
          </View>
        ) : (
          <FlatList
            data={markers}
            renderItem={({ item }) => (
              <List.Item
                title={item.title}
                description={item.value}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add new marker"
          // add a second parameter object
          onPress={() =>
            navigation.navigate(Screen.ADD_MARKER, {
              addMarker,
            })
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
});

export default ViewMarkers;

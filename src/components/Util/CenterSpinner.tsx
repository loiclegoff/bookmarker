import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

function CenterSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CenterSpinner

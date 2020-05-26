import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ViewMarkers from '../screens/ViewMarkers'
import AddMarker from '../screens/addMarker'
import Marker from '../models/Marker'
import { ApolloProvider } from 'react-apollo'
import makeApolloClient from '../apollo'
import { ApolloClient } from 'apollo-client'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import CenterSpinner from '../components/Util/CenterSpinner'

export enum Screen {
  VIEW_MARKERS = 'ViewMarkers',
  ADD_MARKER = 'AddMarker',
}

export type RootStackParamList = {
  [Screen.VIEW_MARKERS]: undefined
  [Screen.ADD_MARKER]: { addMarker: (marker: Omit<Marker, 'id'>) => void }
}

const Stack = createStackNavigator<RootStackParamList>()

function Nav() {
  const [client, setClient] = React.useState<
    ApolloClient<NormalizedCacheObject> | undefined
  >(undefined)

  function initApolloClient() {
    const client = makeApolloClient()
    setClient(client)
  }

  React.useEffect(() => {
    initApolloClient()
  }, [])

  if (!client) {
    return <CenterSpinner />
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screen.VIEW_MARKERS}
          headerMode='none'
          mode='modal'>
          <Stack.Screen name={Screen.VIEW_MARKERS} component={ViewMarkers} />
          <Stack.Screen name={Screen.ADD_MARKER} component={AddMarker} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default Nav

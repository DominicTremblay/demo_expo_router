import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Stack, Link} from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Liste Films',
          headerRight: () => {
            return (
              <Link href="/films/publications">
                <MaterialCommunityIcons
                  name="movie-roll"
                  size={24}
                  color="grey"
                />
              </Link>
            )
          },
        }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({})

export default Layout

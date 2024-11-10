import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="films" options={{ title: 'Films' }} />
      <Stack.Screen name="utilisateurs" options={{ title: 'Utilisateurs' }} />
      <Stack.Screen
        name="session"
        options={{ title: 'Ouvrir session', presentation: 'modal', animation: 'slide_from_bottom' }}
      />
    </Stack>
  )
}

export default Layout

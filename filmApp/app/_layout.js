import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
      <Tabs.Screen name="films" options={{ title: 'Films' }} />
      <Tabs.Screen
        name="utilisateurs"
        options={{
          title: 'Utilisateurs',

          tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />,
        }}
      />
      <Tabs.Screen name="session" options={{ title: 'Ouvrir session' }} />
    </Tabs>
  )
}

export default Layout

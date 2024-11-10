import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import { StateProvider } from '../context/StateContext'

const Layout = () => {
  return (
    <StateProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
        <Tabs.Screen name="Films" options={{ title: 'Films' }} />
        <Tabs.Screen
          name="utilisateurs"
          options={{
            title: 'Utilisateurs',

            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen name="session" options={{ title: 'Ouvrir session' }} />
      </Tabs>
    </StateProvider>
  )
}

export default Layout

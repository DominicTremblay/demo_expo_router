import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const FilmsScreen = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>Vue Films</Text>
      <TouchableOpacity onPress={() => router.push('/utilisateurs')}>
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Voir les utilisateurs
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/films/1')}>
        <Text style={{ fontSize: 24 }}>Voir le film 1</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
})

export default FilmsScreen

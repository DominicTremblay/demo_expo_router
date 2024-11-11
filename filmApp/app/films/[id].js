import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const FilmScreen = () => {
  const { id } = useLocalSearchParams()

  console.log({ id })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Titre du film {id}</Text>
      <Text style={styles.description}>Description du film {id}</Text>
      <Text style={styles.details}>Date de sortie du films {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: 'grey',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
})

export default FilmScreen

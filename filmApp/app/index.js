import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Demo Routeur Expo</Text>
      <Link href="/films" style={styles.link}>Voir les films</Link>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontSize: 24,
  },
})

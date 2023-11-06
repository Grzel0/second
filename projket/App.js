import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './PolsihKing';

export default function App() {
  return (
    <View style={styles.container}>
      <PolishKing name="Bolesław Chrobry" />
      <PolishKing name="Przemysław II" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

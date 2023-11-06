import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './PolsihKing';
import Kingslist from '../Kingslist';

export default function App() {
  kings =[
    {id:1, name:"Bolesław Chrobry", reignDate:"992-1025"},
    {id:2, name:"Mieszko II Lambert", reignDate:"1025-1031"},
    {id:3, name:"Bolesław Smiały", reignDate:"1031-1079"},
    {id:4, name:"Przemysław II", reignDate:"1079-1121"},
  ]
  return (
    <View style={styles.container}>
      <Kingslist kingslist={kings}/>
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

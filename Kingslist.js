import {Text, View} from 'react-native';

const Kingslist = (props) => {
    const {id, name, reignDate} = props
    Kingslist[0]
    return(
        <View>
            <Text>{id} {name} {reignDate}</Text>
        </View>
    )
}

export default Kingslist;
import {Text, View} from 'react-native';

const Kingslist = ({kingsList}) => {
    const {id, name, reignDate} = kingsList[0];
    
    return(
        <View>
            <Text>{id}, {name}, {reignDate}</Text>
        </View>
    )
}

export default Kingslist;
import React from 'react'
import { View ,Text} from 'react-native'

const Data = ({route}) => {
    console.log(route)
    const {data}=route.params;
    return (
        <View>
            <Text>Username:{data}</Text>
        </View>
    )
}

export default Data

import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Dashboard extends Component{

    static navigationOptions = {
        header:null
    }
    
    render(){
        return(
            <View>
                <Text>Dashboard</Text>
            </View>
        )
    }
}

export default Dashboard
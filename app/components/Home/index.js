import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

class Home extends Component{

    static navigationOptions = {
        header:null
    }
    
    render(){
        return(
            <View>
                <Image style={{widh:250, height:300}} 
                source={{uri:'https://codedamn.com/logo.png'}} />
                <Text>Home</Text>
            </View>
        )
    }
}

export default Home
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'

class Sidebar extends Component {

	navigate(route){
		this.props.navigation.navigate(route)
	}

	render() {
		const routes=[{route:"home", title:"Home"}, {route:"dashboard", title:"Dashboard"}]

		return (
			<View>
				<Image style={{widh:250, height:300}} source={{uri:'https://codedamn.com/logo.png'}} />
				
				{routes.map(e=>(
					<TouchableOpacity style={styles.link} onPress={_=>this.navigate(e.route)}>
						<Text>{e.title}</Text>
					</TouchableOpacity>
				)				
				)}				
			</View>
		);
	}
}

export default Sidebar
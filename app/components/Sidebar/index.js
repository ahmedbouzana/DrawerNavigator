import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Sidebar extends Component {
	render() {
		return (
			<View>
				<Image style={{widh:250, height:300}} source={{uri:'https://codedamn.com/logo.png'}} />
				<Text>Hello there!</Text>
                <Text>Nice sidebar!</Text>
			</View>
		);
	}
}

export default Sidebar
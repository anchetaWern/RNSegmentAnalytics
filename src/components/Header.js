import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.header_text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingTop: 10,
		backgroundColor: "#3e3e3e"
	},
	header_text: {
		fontWeight: "bold",
		color: "#FFF",
		fontSize: 17,
		textAlign: "center",
		padding: 10
	}
});

export default Header;

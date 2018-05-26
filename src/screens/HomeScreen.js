/**
 * Created by remypeyre on 26/05/2018.
 */

import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

const HomeScreen = props => {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Le TEST mon BRO
            </Text>
            <Button
                onPress={() => navigate("Profile")}
                title="Go to Profile"
            />
        </View>
    );
};

export default HomeScreen;
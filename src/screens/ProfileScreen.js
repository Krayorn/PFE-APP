/**
 * Created by remypeyre on 26/05/2018.
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    }
});

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                THIS IS THE PROFILE SCREEN!
            </Text>
        </View>
    );
};

ProfileScreen.navigationOptions = {
    title: "Profile Screen Title"
};

export default ProfileScreen;
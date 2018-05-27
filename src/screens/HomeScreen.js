/**
 * Created by remypeyre on 26/05/2018.
 */

import React, { Component } from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

import { restGet } from '../services/api'

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
})

export default class HomeScreen  extends Component {
    state = {value: ''}

    async componentDidMount() {
        const apiRes = await restGet('/users')
        this.setState({value: apiRes.title})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Here is the data from the API => {this.state.value}
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Profile")}
                    title="Go to Profile"
                />
            </View>
        )
    }
}

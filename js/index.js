'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // Change showText value every second.
        // In real project, we update the state value in callback of network operations.
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class AwesomeProject extends Component {
    render() {
        return (
        <View style={{alignItems: 'center'}}>
            <Greeting name='Rexxar' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />
            <Greeting name='CHJ' />
            <Blink text='This is a blink and should be appear/disappear every second' />
        </View>
        );
    }
}

module.exports = AwesomeProject;
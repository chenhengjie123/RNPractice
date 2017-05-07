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

class AwesomeProject extends Component {
    render() {
        return (
        <View style={{alignItems: 'center'}}>
            <Greeting name='Rexxar' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />
            <Greeting name='CHJ' />
        </View>
        );
    }
}

module.exports = AwesomeProject;
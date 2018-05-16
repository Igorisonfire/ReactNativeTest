import React from 'react';

import  { Tabs } from "./modules/router";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

import {
    Router,
    Stack,
    Scene,
} from  'react-native-router-flux';

import Login from "./modules/login";
import AnimatePage from "./modules/test-animate-page";

class App extends  React.Component {
    render() {
        return (
            <AnimatePage/>
        );
    }
}

export default App;
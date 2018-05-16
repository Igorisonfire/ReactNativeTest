import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Image,
} from 'react-native'

class Login extends React.Component {
    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.header}>
                    SIGN IN
                </Text>
                <View style={styles.input_container}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placeholder='Email'
                        returnKeyType='next'
                        placeholderTextColor='#9C9C9C'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType='email-address'
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity style={styles.clear_input}>
                        <Image source={require('../shared/images/clear.png')} style={{width: 14, height: 14}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.input_container}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placeholder='Password'
                        returnKeyType='go'
                        placeholderTextColor='#9C9C9C'
                        secureTextEntry
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.clear_input}>
                        <Image source={require('../shared/images/clear.png')} style={{width: 14, height: 14}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.under_inputs}>
                    <TouchableOpacity>
                        <Text style={styles.link}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.button_container, styles.sign_button]}>
                    <Text style={styles.button_text}>Sign In</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={[styles.button_container, styles.social_button]}>
                        <Text style={styles.button_text}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button_container, styles.social_button]}>
                        <Text style={styles.button_text}>Twitter</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default  Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 24,
        lineHeight: 28,
        paddingBottom: 52,
        textAlign: 'center',
        marginTop: 100,
        fontWeight: '600',
        color: '#9C9C9C'
    },
    input_container: {
        flexDirection: 'row',
        height: 44,
        marginBottom: 20,
        backgroundColor: '#EBEBEB'
    },
    input: {
        backgroundColor: '#EBEBEB',
        height: 44,
        paddingHorizontal: 10,
        flex: 1,
    },
    clear_input: {
        width: 34,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
    },
    under_inputs: {
        paddingTop: 20,
        paddingBottom: 38,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    link: {
        color: '#000000',
        textDecorationLine: 'underline',
    },
    button_container: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    sign_button: {
        backgroundColor: '#4F4F4F',
        marginBottom: 60,
    },
    social_button: {
        backgroundColor: '#9C9C9C',
        marginBottom: 20,
    },
    button_text: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff'
    }
});
import React from 'react';

import {
    View,
    Animated,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Image, LayoutAnimation,
} from 'react-native'

import Swipeout from 'react-native-swipeout'


export default class AnimatePage extends React.Component {

    state = {
        // style: styles.list,
        w: 500,
        h: 100,
    };



    onScroll = (event) => {
        LayoutAnimation.easeInEaseOut();
        const currentOffset = event.nativeEvent.contentOffset.x;
        const style = currentOffset > this.offset ? styles.list2 : styles.list;
        this.offset = currentOffset;
        this.setState({style: style});
        this.setState({w: this.state.w + 15, h: this.state.h + 15});
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>


                <TouchableOpacity>
                    <Text style={styles.header}>Header</Text>
                </TouchableOpacity>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal
                            onScroll={this.onScroll}>
                    <Animated.View style={[{width: this.state.w, height: this.state.h}]}>
                        <Text style={styles.header}>Item1</Text>
                    </Animated.View>
                    <View style={styles.listdel}>
                        <Text style={styles.header}>Delete</Text>
                    </View>
                </ScrollView>


            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    header: {
        fontSize: 44,
        lineHeight: 48,
        paddingBottom: 52,
        textAlign: 'left',
        fontWeight: '700',
        color: 'black'
    },
    list: {
        backgroundColor: 'red',
        elevation: 0,
        borderRadius: 10,
        zIndex: 10,
    },
    list2: {
        width: 400,
        height: 100,
        backgroundColor: 'blue',
        elevation: 70,
        borderRadius: 10,
        zIndex: 10,
    },
    listdel: {
        width: 200,
        height: 100,
        zIndex: 1,
    },


});
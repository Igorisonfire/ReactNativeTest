import React from 'react';
import {
    NativeModules,
    Animated,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
    state = {
        w: 100,
        h: 100,
        color: '#000000',
        style: styles.button
    };

    _onSwipe = (event) => {
        LayoutAnimation.spring();
        var currentOffset = event.nativeEvent.contentOffset.x;
        var direction = currentOffset > this.offset ? -1 : 1;
        this.offset = currentOffset;
        this.setState({w: this.state.w + direction, h: this.state.h + direction, color:'#ffffff'})
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, {width: this.state.w, height: this.state.h, backgroundColor: this.state.color}]} />
                <Animated.ScrollView showsHorizontalScrollIndicator={false} horizontal onScroll={this._onSwipe}>
                    <Text>arfsghfrwdsatw5eyjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</Text>
                </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

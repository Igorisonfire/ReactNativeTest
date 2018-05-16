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
        color: 'red',
        opacity: 1,
        duration: 3000,
    };

    _onScroll = (event) => {
        Animated.timing();
        var currentOffset = event.nativeEvent.contentOffset.x;
        var direction = currentOffset > this.offset ? -1 : 1;
        var colorium = currentOffset > this.offset ? 'green' : 'red';
        this.offset = currentOffset;
        this.setState({w: this.state.w + direction, h: this.state.h + direction, color: colorium, opacity: 0.5})
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={ {width: this.state.w, height: this.state.h, backgroundColor: this.state.color, opacity: this.state.opacity}} />
                <Animated.ScrollView showsHorizontalScrollIndicator={false} horizontal onScroll={this._onScroll}>
                    <Text style={styles.scrollText}>AAA</Text>
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
    scrollText: {
        height: 100,
        width: 700,
        backgroundColor: 'orange'
    }
});

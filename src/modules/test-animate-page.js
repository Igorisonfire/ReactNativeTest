import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    StyleSheet,
    View, Animated,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
    state = {
        w: 100,
        h: 100,
        c: 'red'
    };

    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15, c: 'green'})
    };

    _onScroll = (event) => {
        LayoutAnimation.easeInEaseOut();
        var currentOffset = event.nativeEvent.contentOffset.x;
        var direction = currentOffset > this.offset ? 1 : -1;
        var color = currentOffset > this.offset ? 'green' : 'red';
        this.offset = currentOffset;
        this.setState({w: this.state.w + direction, h: this.state.h + direction, c: color, });

    };



    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, {width: this.state.w, height: this.state.h, backgroundColor: this.state.c}]} />
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
                <Animated.ScrollView showsHorizontalScrollIndicator={false} horizontal onScroll={this._onScroll} pagingEnabled={true} >
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
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'blue'
    }
});

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Easing,
    TouchableWithoutFeedback,
} from 'react-native';

class Loop2 extends Component {

    state = {
        animation: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.loop(
            Animated.timing(
                this.state.animation,
                {
                    useNativeDriver: true,
                    duration: 2400,
                    toValue: 1,
                    easing: Easing.linear,
                }
            )
        ).start();
    };

    render() {
        const interpolation = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        const animatedStyles = {
            transform: [{
                rotate: interpolation,
            }],
        };

        return (
            <View style={styles.container} >
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.Image
                        source={require('../assets/react-logo.png')}
                        style={[styles.myBox, animatedStyles]}
                    />
                </TouchableWithoutFeedback>
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
    myBox: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loop2;

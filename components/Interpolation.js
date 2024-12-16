import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class Interpolation extends Component {

    state = {
        animation: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.timing(
            this.state.animation,
            {
                useNativeDriver: false,
                duration: 500,
                toValue: 1,

            }
        )
            .start();
    };

    render() {
        const interpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['red', 'black'],
        });

        const animatedStyles = {
            backgroundColor: interpolate,
        };

        return (
            <View style={styles.container} >
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.myBox, animatedStyles]}>
                        <Text>New App</Text>
                    </Animated.View>
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
        height: 200,
        width: 200,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Interpolation;

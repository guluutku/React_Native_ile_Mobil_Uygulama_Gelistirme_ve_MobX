import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class Parallel extends Component {

    state = {
        animationScale: new Animated.Value(1),
        animationOpacity: new Animated.Value(0.4),
    };

    startAnimation = () => {
        Animated.parallel([
            Animated.timing(this.state.animationScale, {
                useNativeDriver: false,
                toValue: 1.3,
                duration: 120,
            }),

            Animated.timing(this.state.animationOpacity, {
                useNativeDriver: false,
                toValue: 1,
                duration: 500,
            }),
        ]).start();
    };

    render() {
        const animatedStyles = {
            opacity: this.state.animationOpacity,
            transform: [{
                scale: this.state.animationScale,
            }],
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
        width: 200,
        height: 200,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Parallel;

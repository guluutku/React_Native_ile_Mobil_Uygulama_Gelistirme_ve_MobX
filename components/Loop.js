import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class Loop extends Component {

    state = {
        topValue: new Animated.Value(0),
        leftValue: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.loop(
           Animated.sequence([
            Animated.timing(
                this.state.topValue,
                {
                    useNativeDriver: false,
                    duration: 300,
                    toValue: 300,
                }
            ),
            Animated.timing(
                this.state.topValue,
                {
                    useNativeDriver: false,
                    duration: 300,
                    toValue: 0,
                }
            ),
           ]),
            {
                iterations: 3,
            }
        ).start();
    };

    render() {
        const animatedStyles = {
            top: this.state.topValue,
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
        position: 'absolute',
        left: 0,
        top: 0,
    },
});

export default Loop;

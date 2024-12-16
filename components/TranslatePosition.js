import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';
import { transformer } from '../metro.config';

class TranslatePosition extends Component {

    state = {
        animation: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.timing(
            this.state.animation,
            {
                toValue: 300,
                duration: 300,
            }
        ).start();
    };

    render() {
        const animatedStyles = {
            transform: [
                {
                    translateY: this.state.animation,
                },
            ],
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

export default TranslatePosition;

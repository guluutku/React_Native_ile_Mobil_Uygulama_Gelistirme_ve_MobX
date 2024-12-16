import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class AbsolutePosition extends Component {

    state = {
        animation: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.timing(
            this.state.animation,
            {
                useNativeDriver: false,
                duration: 500,
                toValue: 40,
            }
        )
            .start();
    };

    render() {
        const animatedStyles = {
            left: this.state.animation,
            right: this.state.animation,
            bottom: this.state.animation,
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
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default AbsolutePosition;

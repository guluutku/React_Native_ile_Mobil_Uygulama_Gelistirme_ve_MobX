import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class Spring2 extends Component {

    state = {
        animation: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.spring(
            this.state.animation,
            {
                useNativeDriver: false,
                duration: 300,
                toValue: 30,
            }
        )
            .start();
    };

    render() {
        const animatedStyles = {
            bottom: this.state.animation,
            right: this.state.animation,
            left: this.state.animation,
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
        height: 100,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default Spring2;

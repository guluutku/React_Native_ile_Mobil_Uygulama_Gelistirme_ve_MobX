import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class Spring extends Component {

    state = {
        animation: new Animated.Value(1),
    };

    startAnimation = () => {
        Animated.spring(
            this.state.animation,
            {
                useNativeDriver: false,
                duration: 200,
                toValue: 2,
            }
        )
            .start();
    };

    render() {
        const animatedStyles = {
            transform: [{
                scale: this.state.animation,
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
        height: 200,
        width: 200,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Spring;

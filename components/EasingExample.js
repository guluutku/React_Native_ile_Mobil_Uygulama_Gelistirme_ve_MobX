import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
    Easing,
    Dimensions,
} from 'react-native';

class EasingExample extends Component {

    state = {
        animation: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.timing(
            this.state.animation,
            {
                useNativeDriver: false,
                duration: 1000,
                toValue: Dimensions.get('window').width - 200,
                // easing: Easing.bounce,
                // easing: Easing.back(4),
                easing: Easing.elastic(20),
            }
        )
            .start();
    };

    render() {
        const animatedStyles = {
            transform: [{
                translateX: this.state.animation,
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

export default EasingExample;

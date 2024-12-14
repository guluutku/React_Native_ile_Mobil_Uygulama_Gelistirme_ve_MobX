import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class Timing extends Component {

    state = {
        animation: new Animated.Value(1),
    };

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            useNativeDriver: true,
            toValue: 0.2,
            duration: 500,
        }).start(() => {
            Animated.timing(this.state.animation, {
                useNativeDriver: true,
                toValue: 1,
                duration: 500,
            }).start();
        });
    };

    render() {
        const animatedStyles = {
            opacity: this.state.animation,
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

export default Timing;

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

class MultiField extends Component {

    state = {
        animationWidth: new Animated.Value(200),
        animationHeight: new Animated.Value(200),
    };

    startAnimation = () => {
        Animated.timing(
            this.state.animationWidth,
            {
                useNativeDriver: false,
                toValue: 350,
                duration: 300,
            }
        ).start(
            /*
            () => {
            Animated.timing(
                this.state.animationHeight,
                {
                    useNativeDriver: false,
                    toValue: 350,
                    duration: 300,
                }
            ).start();
        }
            */
        );

        Animated.timing(
            this.state.animationHeight,
            {
                useNativeDriver: false,
                toValue: 350,
                duration: 300,
            }
        ).start();
    };

    render() {
        const animatedStyles = {
            width: this.state.animationHeight,
            height: this.state.animationHeight,
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
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MultiField;

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class GamePad extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.props.onPressButton(0)}>
                    <Text style={styles.textButton}>
                        Rock
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.props.onPressButton(1)}>
                    <Text style={styles.textButton}>
                        Paper
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.props.onPressButton(2)}>
                    <Text style={styles.textButton}>
                        Scissors
                    </Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonWrapper: {
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButton: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500'
    }
});
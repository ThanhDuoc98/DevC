import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class GameStatus extends React.Component {
    render() {

        let colorStatus = 'black';
        if (this.props.result === "TIE GAME") {
            colorStatus = 'black';
        } else if (this.props.result === "VICTORY") {
            colorStatus = 'green';
        } else {
            colorStatus = 'red';
        }
        const color = { color: colorStatus };

        return (
            <View style={styles.container}>
                <Text style={[
                    styles.textStatus,
                    color]}
                >
                    {this.props.result}
                </Text>
                <View style={styles.historyContainer}>
                    <Text style={styles.textStatus}>
                        {this.props.playerStatus}
                    </Text>
                    <Text style={styles.textStatus}>
                        {this.props.computerStatus}
                    </Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30
    },
    textStatus: {
        color: 'red',
        fontSize: 30,
        fontWeight: '500',
    },
    historyContainer:{
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
import React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';


export default class MoreScreen extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>
                    Message Screen
                </Text>
            </View>
        );
    }
}


MoreScreen.navigationOptions = {
    title: "More",
    header: null
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
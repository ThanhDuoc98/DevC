import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text ,TouchableOpacity, Image} from 'react-native';

const MessageCard = (props) => (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => props.onGoToConversation('Conversation', { ...props })}>
        <Image style={{width:100,height:100}}
        source={{uri: props.uri}}>
        </Image>
        <Text style={{alignItems: 'center'}}>
        {props.name} {props.first_name} {props.last_name}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container:{
        width: 300,
        height: 100,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default MessageCard;
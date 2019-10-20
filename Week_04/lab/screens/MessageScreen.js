import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, ScrollView , Image} from 'react-native';
import messages from "../messages.json";
import MessageCard from '../components/MessageCard';


export default function MessageScreen(props) {
    return (
                messages.map(msg => {
            return (
                <MessageCard
                    onGoToConversation={props.navigation.navigate}
                    first_name={msg.first_name}
                    last_name = {msg.last_name}
                    uri={msg.avatar_url}/>);
        })
    );
}


MessageScreen.navigationOptions = props => {
    return {
    title: "Messages",
    headerLeft: () => {
        return (
          <TouchableOpacity onPress={props.navigation.openDrawer}>
            <Image
              style ={{width:28, height:28, marginLeft:10}}
              source={{
                uri:
                  "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
              }}
            />
          </TouchableOpacity>
        );
      }
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
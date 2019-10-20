import React from 'react';
import { Text, View, Platform, Image } from 'react-native';
import {createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MessageScreen from '../screens/MessageScreen';
import GroupScreen from '../screens/GroupScreen';
import ContactScreen from '../screens/ContactScreen';
import MoreScreen from '../screens/MoreScreen';
import TimelineScreen from '../screens/TimelineScreen';
import ConversationScreen from '../screens/ConversationScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
    Conversation: ConversationScreen
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

MessageStack.path = '';

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen,
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: 'Contact',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ContactStack.path = '';

const GroupStack = createStackNavigator(
  {
    Group: GroupScreen,
  },
  config
);

GroupStack.navigationOptions = {
  tabBarLabel: 'Group',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

GroupStack.path = '';

const TimelineStack = createStackNavigator(
  {
    Timeline: TimelineScreen,
  },
  config
);

TimelineStack.navigationOptions = {
  tabBarLabel: 'Timeline',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

TimelineStack.path = '';

const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

MoreStack.path = '';


const tabNavigator = createBottomTabNavigator({
  MessageStack,
  ContactStack,
  GroupStack,
  TimelineStack,
  MoreStack
});

tabNavigator.path = '';


const Drawer = () => (
  <View style>
    <Text>Drawer Item 1</Text>
    <Text>Drawer Item 2</Text>
  </View>
);

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;
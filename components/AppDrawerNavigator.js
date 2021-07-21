  
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';
export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    MyDonations : {
        screen : MyDonationScreen
      },
      Notification : {
        screen : NotificationScreen
      },
      MyReceivedBooks :{
        screen : MyReceivedBooksScreen
      },
    Setting: {
        screen: SettingScreen
    },
},
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    })


    // i am not getting recieverDetails screeen "myDonation" okay mam
    //just a moment, engaged in multiple chats
    
// import React from 'react';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import { AppTabNavigator } from './AppTabNavigator'
// import CustomSideBarMenu  from './CustomSideBarMenu';

// export const AppDrawerNavigator = createDrawerNavigator({
//   Home : {
//     screen : AppTabNavigator
//     },
//   },
//   {
//     contentComponent:CustomSideBarMenu
//   },
//   {
//     initialRouteName : 'Home'
//   })



    // i am not getting recieverDetails screeen "myDonation" okay mam
    //just a moment, engaged in multiple chats
    
// import React from 'react';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import { AppTabNavigator } from './AppTabNavigator'
// import CustomSideBarMenu  from './CustomSideBarMenu';

// export const AppDrawerNavigator = createDrawerNavigator({
//   Home : {
//     screen : AppTabNavigator
//     },
//   },
//   {
//     contentComponent:CustomSideBarMenu
//   },
//   {
//     initialRouteName : 'Home'
//   })

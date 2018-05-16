import React from 'react';
import { TabNavigator  } from 'react-navigation';
import { TabBarBottom } from 'react-navigation'

import AnimatePage from "./test-animate-page";
import Login from "./login";


export const Tabs = TabNavigator({

    One: {
        screen: Login,
    },
    Two: {
        screen: AnimatePage,
    },
    Three: {
        screen: Login,
    },
    Four: {
        screen: AnimatePage,
    },
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false
});


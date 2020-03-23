import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="SignIn" component={SignIn} options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }} />
                <Tab.Screen name="SingUp" component={SignUp} options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cloud" color={color} size={size} />
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
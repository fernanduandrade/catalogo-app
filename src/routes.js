import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Header from './components/Header/';
import Catalogo from './pages/Catalogo/';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
        		screenOptions={{
        			headerShown: true,
        			cardStyle: { backgroundColor: '#313746'},
        	}}
        		initialRouteName="Catálogo"
            >
                <Stack.Screen name='Catálogo' component={Catalogo} 
                    options={{
                    	headerShown: true, 
                    	headerTransparent: true,
                    	headerTitle: () => <Header />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

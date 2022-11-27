import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splash from './src/pages/Splash';
import Main from './src/pages/Main';

const Stack = createNativeStackNavigator();

function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="SplashPage" component={Splash} />
            <Stack.Screen name="MainPage" component={Main} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
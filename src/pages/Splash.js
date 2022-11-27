import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

function Splash({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: 'red', flex: 1}}>
            <Text>Hello Splash DiaryApp</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("MainPage")
                }}>
                <Text>SONRAKİİ</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Splash;

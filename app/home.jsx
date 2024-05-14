import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {gStyle} from './styles/global';

const  Home= ()=>{
return(
    <>
        <Stack.Screen
        options={{
            headerShown: true,

            headerRight: ()=>(
                <View>
                    <TouchableOpacity></TouchableOpacity>
                </View>
            ),
        }}
        />
        <ScrollView>
            <View style={gStyle.row}>
                <Text>Player Cards</Text>
            </View>
        </ScrollView>
    </>
)
}
export default Home;
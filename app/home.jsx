import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import {gStyle} from './styles/global';
import images from './styles/images';

const playercardcontent = [
    {
        id: '0',
        image: images.home.playercard.gleamor,
        name: 'Player Card Number',
        number: '0123491235',
        pw: 'Powered by: ',
        pwimg: images.home.playercard.pw.g
    },
    {
        id: '1',
        image: images.home.playercard.nexyra,
        name: 'Player Card Number',
        number: '4578370689',
        pw: 'Powered by: ',
        pwimg: images.home.playercard.pw.a
    },
]
const  Home= ()=>{
    const itemSeparator = () =>{
        return <View style={{height: 1, marginVertical: 8}} />;
      }
return(
    <>
        <Stack.Screen
        options={{
            headerShown: true,
            headerTitle: '',

            headerLeft: ()=>(
                <View style={{marginLeft: 24}}>
                    <Image source={images.header.logo}/>
                </View>
            ),
            headerRight: ()=>(
                <View style={{marginRight: 24}}>
                    <TouchableOpacity style={gStyle.morebtn}>
                        <Image source={images.header.morebtn}/>
                    </TouchableOpacity>
                </View>
            ),
        }}
        />
        <ScrollView>
            <View style={[gStyle.row, {marginBottom: 18}]}>
                <Text className="font-aventaSemiBold">Player Cards</Text>
                <TouchableOpacity style={gStyle.plusbtn}>
                    <Image source={images.home.plus} />
                </TouchableOpacity>
            </View>

            {/* player card number */}
            <FlatList
                data={playercardcontent}
                renderItem={({item, index})=>
                <TouchableOpacity style={[gStyle.playercard, gStyle.fdirection]}>
                    <View>
                        <Image source={item.image} style={{borderRadius: 6, marginRight: 16, width: 116}}/>
                    </View>
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.number}</Text>
                        <View style={[gStyle.fdirection, gStyle.pwcard]}>
                            <Text>{item.pw}</Text>
                            <Image source={item.pwimg} />
                        </View>
                    </View>
                </TouchableOpacity>
                }
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={itemSeparator}
            />
        </ScrollView>
    </>
)
}
export default Home;
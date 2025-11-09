import { AntDesign, Entypo, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";

export class jaksi extends Component {
  render() {
    return (
    <SafeAreaView>
           <View style={tw`w-[90%] h-200 mx-auto`}>
                  <Text style={tw` text-3xl font-bold`}>
                    JakSiaga
                  </Text>
                  <View style={tw`w-100% h-10 bg-neutral-300  flex flex-row rounded-xl items-center`}>
                    <AntDesign name='search1' size={24} color='' style={tw`ml-2`} />
                    <Text style={tw`text-xl ml-2`}>
                    Pencarian
                    </Text>
                  </View>

                <View style={tw`w-100% h-13 mt-7`}>
                <View style={tw`w-100% h-13 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <FontAwesome6 name='walkie-talkie' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>Jakarta Siaga</Text>
                </View>
                </View>

                <View style={tw`w-100% h-13 mt-5 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <Entypo name='book' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>Layanan informasi dan Nomor</Text>
                </View>  

                
                <View style={tw`w-100% h-13 mt-5 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <Ionicons name='water' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>PMI</Text>
                </View> 

                
                <View style={tw`w-100% h-13 mt-5 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <MaterialCommunityIcons name='police-badge-outline' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>Polisi</Text>
                </View> 

                <View style={tw`w-100% h-13 mt-5 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <FontAwesome name='bandcamp' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>Posko Bencana Alam</Text>
                </View>

                <View style={tw`w-100% h-13 mt-5 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <FontAwesome5 name='campground' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>Posko Kewaspadaan Nasional</Text>
                </View> 

                <View style={tw`w-100% h-13 mt-5 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <MaterialIcons name='sos' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>Sar</Text>
                </View> 
                
                <View style={tw`w-100% h-13 mt-5 flex flex-row`}>
                    <View style={tw`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center`}>
                        <MaterialCommunityIcons name='emoticon-dead' size={30} color='white' />
                    </View>
                    <Text style={tw` font-bold ml-2 text-lg mt-3`}>Senta Informasi Keracunan</Text>
                </View> 
            </View>
    </SafeAreaView>
    )
  }
}

export default jaksi

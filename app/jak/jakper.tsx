import React, { Component } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import tw from 'twrnc'

export class jakwifi extends Component {
  render() {
    return (
      <SafeAreaView style={tw`flex-1 bg-white`}>
        <ScrollView contentContainerStyle={tw`flex-1 items-center justify-center p-5`}>
          <Image 
            source={require('../../assets/images/perbaikan.png')} 
            style={tw`w-[300px] h-[300px] mb-5`}
          />
          <Text style={tw`text-2xl font-bold text-gray-800 mb-2.5 text-center`}>Lagi Diperbaiki</Text>
          <Text style={tw`text-base text-gray-600 text-center`}>JAVA akan segera kembali</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default jakwifi
import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export class JakLain extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {/* Header Section */}
          <View style={tw`bg-blue-500 w-full pt-12 pb-10 px-4 rounded-b-3xl`}>
            <Text style={tw`text-white text-2xl font-bold text-center`}>Jelajahi Jakarta dengan</Text>
            <Text style={tw`text-white text-xl font-light text-center mb-6`}>Berbagai Transportasi Umum</Text>

            {/* Search Section */}
            <View style={tw`bg-white p-4 rounded-lg shadow-lg flex-row items-center mx-auto w-[90%]`}>
              <TextInput
                style={tw`flex-1 text-base text-gray-700`}
                placeholder="Stasiun, halte, atau rute tujuan.."
                placeholderTextColor="#aaa"
              />
              <TouchableOpacity style={tw`bg-blue-500 p-3 rounded-md`}>
                <Text style={tw`text-white text-lg`}>🔍</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Available Transport Section */}
          <View style={tw`px-4 mt-8`}>
            <Text style={tw`text-black text-lg font-bold mb-4`}>Transportasi yang tersedia</Text>

            {/* MRTJ */}
            <View style={tw`flex-row items-center bg-white p-4 rounded-lg shadow mb-4  `}>
              <Image
                source={require('../../assets/images/mrt.jpg')}
                style={tw`w-20 h-12 mr-4 rounded-md`}
              />
              <View style={tw``}>
                <Text style={tw`text-black text-base font-bold`}>MRTJ</Text>
                <Text style={tw`text-gray-500 text-sm`}>Lihat jadwal</Text>
              </View>
            </View>

            {/* LRT Jakarta */}
            <View style={tw`flex-row items-center bg-white p-4 rounded-lg shadow mb-4`}>
              <Image
                source={require('../../assets/images/mrt2.jpg')}
                style={tw`w-20 h-12 mr-4 rounded-md`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-black text-base font-bold`}>LRT Jakarta</Text>
                <Text style={tw`text-gray-500 text-sm`}>Lihat jadwal</Text>
              </View>
            </View>

            {/* TransJakarta */}
            <View style={tw`flex-row items-center bg-white p-4 rounded-lg shadow mb-4`}>
              <Image
                source={require('../../assets/images/mrt3.jpg')}
                style={tw`w-20 h-12 mr-4 rounded-md`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-black text-base font-bold`}>TransJakarta</Text>
                <Text style={tw`text-gray-500 text-sm`}>Lihat koridor</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default JakLain;
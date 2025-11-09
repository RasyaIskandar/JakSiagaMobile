import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";

export class detail extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
            <View style={tw`w-90% h-200 mx-auto`}>
            <Text style={tw` text-3xl font-bold`}>
                Detail Laporan
            </Text>
            <Image source={require('../../assets/images/sapi.jpg')} style={tw`w-[100%] h-[60]`}/>

            <Text style={tw`mt-5 text-xl font-bold`}>
                Pemarsalahan:
            </Text>
            <Text style={tw`mt-2  font-bold`}>
            Banyak sapi di jalan berkeliaran dikarna di jakarta dan menggangu jalan raya dikarnakan banyak sapi di jalan kemacetan terjadi pada tanggal 5/12/2022 dan terjadi  berkeliaran sapi di jalan raya
            </Text>
            <Text style={tw`mt-4  text-xl font-bold`}>
                Lokasi:
            </Text>
            <Text style={tw` font-bold`}>
                Jakarta, Taman Kelinci di bagian barat
            </Text>
            <Text style={tw`mt-4  text-xl font-bold`}>
                Keterangan Tambahan:
            </Text>
            <Text style={tw` font-bold`}>
               Sapinya Banyak Mati dan banyak sapi yang lewat di jalan raya
            </Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default detail

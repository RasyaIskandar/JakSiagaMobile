import { View, Text, ScrollView, Image, TouchableOpacity,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';
import tw from "twrnc";
import { AntDesign, Fontisto } from '@expo/vector-icons';

const jakres = () => {
  return (
    <SafeAreaView>
        <ScrollView>
               <View style={tw`w-[90%] h-200 mx-auto`}>
                  <Text style={tw` text-3xl font-bold`}>
                    JakRespons
                  </Text>
                  <View style={tw`w-100% h-10 bg-neutral-300  flex flex-row rounded-xl items-center`}>
                    <AntDesign name='search1' size={24} color='' style={tw`ml-2`} />
                    <Text style={tw`text-xl ml-2`}>
                      Nomor Laporan
                    </Text>
                  </View>
            
                  <View style={tw`w-100% h-80 mt-4 flex flex-row justify-between`}>
                    <TouchableOpacity>  
                    <Link href="/jak/detail">                
                    <View style={tw`h-80 w-50 bg-white rounded-xl shadow-md`}>
                      <Image source={require('../../assets/images/sapi.jpg')} style={tw`w-[50] h-[40] rounded-xl`}/>
                      <View style={tw`absolute top-32 left-10 w-30 h-7 bg-red-500 rounded-xl items-center justify-center`}>
                      <Text style={tw`font-bold text-white`}>Menunggu</Text>
                      </View>                      
                      <Text style={tw`mt-2 text-gray-500 ml-2`}>No.JK2212060389</Text>
                      <Text style={tw`text-sm ml-2 mt-2`}>Permasalahan: Banyak Sapi lewat di jalan</Text>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-2`}>Cilandak Barat</Text>                      <View style={tw`flex flex-row justify-between items-center mx-1`}>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-5`}>38 Menit yang lalu</Text>
                      <Fontisto name='favorite' size={24} color="black" style={tw`mr-2 mt-6 `} />
                      </View>
                    </View>
                    </Link>
                    </TouchableOpacity>

                    <View style={tw`h-80 w-50 bg-white rounded-xl shadow-md`}>
                    <Image source={require('../../assets/images/kelas.jpg')} style={tw`w-[50] h-[40] rounded-xl`}/>
                      <View style={tw`absolute top-32 left-10 w-30 h-7 bg-red-500 rounded-xl items-center justify-center`}>
                      <Text style={tw`font-bold text-white`}>Menunggu</Text>
                      </View> 
                      <Text style={tw`mt-2 text-gray-500 ml-2`}>No.JK2212035256</Text>
                      <Text style={tw`text-sm ml-2 mt-2`}>Permasalahan: Beberapa hari yang sudah saya lalu susah</Text>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-2`}>Lentang Agung</Text>
                      <View style={tw`flex flex-row justify-between items-center mx-1`}>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-5`}>59 Menit yang lalu</Text>
                      <Fontisto name='favorite' size={24} color="black" style={tw`mr-2 mt-6 `} />
                      </View>
                    </View>
                  </View>

                  <View style={tw`w-100% h-80 mt-4 flex flex-row justify-between`}>
                  <View style={tw`h-80 w-50 bg-white rounded-xl shadow-md`}>
                      <Image source={require('../../assets/images/banjir.jpg')} style={tw`w-[50] h-[40] rounded-xl`}/>
                      <View style={tw`absolute top-32 left-10 w-30 h-7 bg-purple-500 rounded-xl items-center justify-center`}>
                      <Text style={tw`font-bold text-white`}>Koordinasi</Text>
                      </View>                      
                      <Text style={tw`mt-2 text-gray-500 ml-2`}>No.JK221204326</Text>
                      <Text style={tw`text-sm ml-2 mt-2`}>Permasalahan: Setiap Hujan lebat selalu banjir</Text>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-2`}>Setu</Text>                      <View style={tw`flex flex-row justify-between items-center mx-1`}>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-5`}>1 Jam yang lalu</Text>
                      <Fontisto name='favorite' size={24} color="black" style={tw`mr-2 mt-6 `} />
                      </View>
                    </View>
                    
                    <View style={tw`h-80 w-50 bg-white rounded-xl shadow-md`}>
                    <Image source={require('../../assets/images/lampu.jpg')} style={tw`w-[50] h-[40] rounded-xl`}/>
                      <View style={tw`absolute top-32 left-10 w-30 h-7 bg-red-500 rounded-xl items-center justify-center`}>
                      <Text style={tw`font-bold text-white`}>Menunggu</Text>
                      </View> 
                      <Text style={tw`mt-2 text-gray-500 ml-2`}>No.JK221437543</Text>
                      <Text style={tw`text-sm ml-2 mt-2`}>Permasalahan: Lampu Penerang Jalan di jakarta</Text>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-2`}>Duren Sawit</Text>
                      <View style={tw`flex flex-row justify-between items-center mx-1`}>
                      <Text style={tw`text-sm ml-2 text-gray-400 mt-5`}>2 Jam yang lalu</Text>
                      <Fontisto name='favorite' size={24} color="black" style={tw`mr-2 mt-6 `} />
                      </View>
                    </View>
                  </View>
            
                </View>
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default jakres
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import tw from 'twrnc';

const DATA_KOMODITAS = [
  {
    id: 1,
    category: 'Daging',
    name: 'Daging Ayam Segar',
    price: 'Rp 45.000/kg',
    market: 'Pasar Modern BSD',
    image: require('../../assets/images/dada.jpg'),
  },
  {
    id: 2,
    category: 'Sayuran',
    name: 'Bawang Merah Premium',
    price: 'Rp 35.000/kg',
    market: 'Pasar Modern BSD',
    image: require('../../assets/images/onion.jpg'),
  },
  {
    id: 3,
    category: 'Sayuran',
    name: 'Bawang Putih Import',
    price: 'Rp 28.000/kg',
    market: 'Pasar Modern BSD',
    image: require('../../assets/images/whiteo.jpg'),
  },
  {
    id: 4,
    category: 'Beras',
    name: 'Beras Premium',
    price: 'Rp 13.500/kg',
    market: 'Pasar Serpong',
    image: require('../../assets/images/udang.jpg'),
  },
  {
    id: 5,
    category: 'Beras',
    name: 'Beras Medium',
    price: 'Rp 10.500/kg',
    market: 'Pasar Serpong',
    image: require('../../assets/images/udang.jpg'),
  },
  {
    id: 6,
    category: 'Beras',
    name: 'Beras Super',
    price: 'Rp 16.000/kg',
    market: 'Pasar Serpong',
    image: require('../../assets/images/udang.jpg'),
  },
];

export default function InfoPanganScreen() {
  const [activeTab, setActiveTab] = useState('Komoditas');
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <View style={tw`flex-row items-center p-4 bg-white shadow-sm`}>
        <TouchableOpacity style={tw`mr-3`}>
          <Ionicons name="chevron-back" size={24} color="#1E40AF" />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold text-blue-900`}>Informasi Pangan</Text>
      </View>

      <View style={tw`px-4 mt-3`}>
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder="Cari produk "
          style={tw`border border-blue-200 rounded-xl px-4 py-3 text-sm bg-white shadow-sm`}
        />
      </View>

      <View style={tw`flex-row mt-4 px-4`}>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 rounded-xl border border-blue-200`,
            activeTab === 'Komoditas' && tw`bg-blue-500 border-0`
          ]}
          onPress={() => setActiveTab('Komoditas')}
        >
          <Text style={tw`${activeTab === 'Komoditas' ? 'text-white font-bold' : 'text-gray-600'}`}>
            Komoditas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 rounded-xl border border-blue-200 ml-2`,
            activeTab === 'Pasar' && tw`bg-blue-500 border-0`
          ]}
          onPress={() => setActiveTab('Pasar')}
        >
          <Text style={tw`${activeTab === 'Pasar' ? 'text-white font-bold' : 'text-gray-600'}`}>
            Pasar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`px-4 mt-4 flex-row items-center bg-white py-3 shadow-sm`}>
        <Entypo name="location-pin" size={18} color="#2563EB" style={tw`mr-2`} />
        <Text style={tw`text-sm text-gray-700 flex-1 font-medium`}>
          Cisauk, Tangerang, Banten
        </Text>
        <TouchableOpacity style={tw`bg-blue-50 px-3 py-2 rounded-xl`}>
          <Text style={tw`text-xs text-blue-700 font-medium`}>22 Jan 2025</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Komoditas' && (
        <ScrollView style={tw`mt-4 px-4`} showsVerticalScrollIndicator={false}>
          <View style={tw`flex-row flex-wrap justify-between`}>
            {DATA_KOMODITAS.map(item => (
              <TouchableOpacity
                key={item.id}
                style={tw`w-[48%] bg-white rounded-2xl mb-4 p-4 shadow-sm`}
              >
                <View style={tw`flex-row justify-between mb-3`}>
                  <Text style={tw`text-sm font-bold text-blue-900`}>{item.category}</Text>
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={16} color="#2563EB" />
                  </TouchableOpacity>
                </View>

                <View style={tw`items-center mb-3`}>
                  <Image
                    source={item.image}
                    style={tw`w-20 h-20 rounded-xl`}
                    resizeMode="cover"
                  />
                </View>

                <Text style={tw`text-sm text-gray-600 font-medium`}>{item.name}</Text>
                <Text style={tw`text-base font-bold mt-2 text-blue-600`}>{item.price}</Text>
                <View style={tw`flex-row items-center mt-2`}>
                  <Entypo name="location-pin" size={14} color="#4B5563" />
                  <Text style={tw`text-xs text-gray-500 ml-1`}>{item.market}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      {activeTab === 'Pasar' && (
        <View style={tw`p-4`}>
          <Text style={tw`text-base text-gray-600 text-center italic`}>
            Daftar pasar akan ditampilkan di sini...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
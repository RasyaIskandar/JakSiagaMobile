import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import tw from 'twrnc';

export default function JakWartaScreen() {
  const [activeTab, setActiveTab] = useState('Informasi');

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-50`}>
      <View style={tw`px-5 py-4 border-b border-slate-300 flex-row items-center`}>
        <Text style={tw`text-2xl font-extrabold text-indigo-700`}>InfoJakarta</Text>
      </View>

      <View style={tw`px-5 mt-4`}>
        <TextInput
          placeholder="Cari..."
          style={tw`border-2 border-indigo-200 rounded-lg px-4 py-3 text-base`}
        />
      </View>

      <View style={tw`flex-row mt-5 border-b border-slate-300`}>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center p-4`,
            activeTab === 'Informasi' && tw`border-b-3 border-indigo-600`,
          ]}
          onPress={() => setActiveTab('Informasi')}
        >
          <Text
            style={tw`${activeTab === 'Informasi' ? 'text-indigo-600 font-bold' : 'text-slate-600'}`}
          >
            Tombol Informasi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`flex-1 items-center p-4`,
            activeTab === 'Media' && tw`border-b-3 border-indigo-600`,
          ]}
          onPress={() => setActiveTab('Media')}
        >
          <Text
            style={tw`${activeTab === 'Media' ? 'text-indigo-600 font-bold' : 'text-slate-600'}`}
          >
            Tombol Media Sosial
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Informasi' && (
        <ScrollView style={tw`px-5 py-5`}>
          <Text style={tw`text-xl font-bold mb-5 text-slate-800`}>Informasi Wilayah</Text>
          <View style={tw`bg-white shadow-lg p-5 mb-5 rounded-xl`}>
            <View style={tw`flex-row items-center mb-3`}>
              <Text style={tw`text-base font-bold bg-emerald-100 px-3 py-2 rounded-lg text-emerald-700`}>
                AREA JAKARTA BARAT
              </Text>
            </View>
            <Text style={tw`text-base text-slate-700 leading-6`}>
              Kebon Jeruk, Palmerah, Grogol Petamburan, Tambora, Taman Sari, 
              Cengkareng, Kembangan, Kalideres
            </Text>
          </View>

          <View style={tw`bg-white shadow-lg p-5 mb-5 rounded-xl`}>
            <View style={tw`flex-row items-center mb-3`}>
              <Text style={tw`text-base font-bold bg-purple-100 px-3 py-2 rounded-lg text-purple-700`}>
                AREA JAKARTA UTARA
              </Text>
            </View>
            <Text style={tw`text-base text-slate-700 leading-6`}>
              Penjaringan, Tanjung Priok, Koja, Cilincing, Pademangan, 
              Kelapa Gading
            </Text>
          </View>

          <View style={tw`mt-5 bg-white p-5 rounded-xl`}>
            <Text style={tw`text-base font-bold text-slate-700`}>
              Pusat Pengendalian Operasi
            </Text>
            <Text style={tw`text-lg font-extrabold mt-2 text-indigo-700`}>
              LAPORAN SITUASI TERKINI KONDISI JAKARTA
            </Text>
            <Text style={tw`text-sm text-slate-500 mt-2`}>
              2 jam yang lalu • 15 pembaca
            </Text>
          </View>
        </ScrollView>
      )}

      {activeTab === 'Media' && (
        <ScrollView style={tw`px-5 py-5`}>
          <Text style={tw`text-xl font-bold mb-5 text-slate-800`}>Update Terkini</Text>

          <View style={tw`bg-white shadow-lg p-5 mb-5 rounded-xl`}>
            <Text style={tw`text-base font-bold text-slate-800`}>Dinas Perhubungan DKI</Text>
            <Text style={tw`text-sm text-slate-500`}>10 menit yang lalu</Text>
            <Text style={tw`text-base text-slate-700 mt-3 leading-6`}>
              INFO LALU LINTAS: Situasi terkini di kawasan Sudirman-Thamrin terpantau lancar...
            </Text>
            <Text style={tw`text-sm text-indigo-600 mt-3`}>
              #InfoLalin #JakartaLancar #UpdateJKT
            </Text>
          </View>

          <View style={tw`bg-white shadow-lg p-5 mb-5 rounded-xl`}>
            <Text style={tw`text-base font-bold text-slate-800`}>Pemprov DKI Jakarta</Text>
            <Text style={tw`text-sm text-slate-500`}>30 menit yang lalu</Text>
            <Text style={tw`text-base text-slate-700 mt-3 leading-6`}>
              PENGUMUMAN: Jadwal pelayanan publik selama libur akhir tahun...
            </Text>
            <Text style={tw`text-sm text-indigo-600 mt-3`}>
              #LayananPublik #JakartaInformasi #PemprovDKI
            </Text>
          </View>

        </ScrollView>
      )}
    </SafeAreaView>
  );
}
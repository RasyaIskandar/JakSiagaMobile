import { Image, StyleSheet, Platform, ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native';

import React, { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import tw from "twrnc";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
  <SafeAreaView>
    <ScrollView>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Image source={require('../../assets/images/jaki.png')} style={tw`w-[30] h-[40px] mt-2`} />
        
        <View style={tw`flex flex-row gap-3 mr-6`}>
        <MaterialCommunityIcons name='line-scan' size={24} color="black" />
        <AntDesign name='customerservice' size={24} color="black" />
        </View>

      </View>

    <View style={tw`w-100 ml-7 rounded-xl h-[170px] mt-2`}>
    <Image source={require('../../assets/images/merah.png')} style={tw`w-[100] h-[170px]`} />
    </View>

    <View style={tw`w-100 ml-7 rounded-xl bg-white h-[50px] mt-2 flex-row justify-between items-center px-4 shadow-md`}>

      <View style={tw`flex flex-row gap-3`}>
      <Text style={tw`text-xl font-bold`}>JakOne Pay</Text>
      <Text style={tw`text-sm text-blue-500 bg-blue-100 rounded-lg px-2 py-1`}>Belum Aktif</Text>
      </View>

      <Text style={tw`text-lg`}>
        <MaterialIcons name='arrow-forward-ios' size={24} />
      </Text>
    </View>

    <View style={tw`w-100 ml-7 rounded-xl h-[179px] mt-2 px-4 `}>

    <View style={tw`w-92 h-15 justify-between flex flex-row gap-3 mt-3 `}>
    <View style={tw`items-center`}>
    <Link href="/jak/jakwar">
    <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
    <Image source={require('../../assets/images/jaki1.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image>
    </View>
    </Link>
    <Text>JakWarta</Text>
    </View>

    <View style={tw`items-center`}>
    
      <Link href="/jak/jakres">
    <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
    <Image source={require('../../assets/images/jaki2.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image>
    </View>
    </Link>
    
    <Text>JakRespons</Text>
    </View>

    <View style={tw`items-center`}>
    <Link href="/jak/jakpan">
    <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
    <Image source={require('../../assets/images/jaki3.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image>
    </View>
    </Link>
    <Text>JakPangan</Text>
    </View>

    <View style={tw`items-center`}>
    <Link href="/jak/jaklain">
    <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
    <Image source={require('../../assets/images/jaki4.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image>
    </View>
    </Link>
    <Text>JakLingko</Text>
    </View>

    </View>

    /////////////////////////////////////////////////////////////////////////

    <View style={tw`w-92 h-15 justify-around flex flex-row gap-3 mt-7`}>
  <View style={tw`items-center`}>
    <Link href="/jak/jaksi">
      <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
        <Image source={require('../../assets/images/jak5.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
      </View>
    </Link>
    <Text style={tw`text-center mt-1`}>JakSiaga</Text>
  </View>

  <View style={tw`items-center`}>
  <Link href="/jak/jakper">
    <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
      <Image source={require('../../assets/images/jak6.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
    </View>
    </Link>
    <Text style={tw`text-center mt-1`}>JakWifi</Text>
  </View>

  <View style={tw`items-center`}>
  <Link href="/jak/jakper">
    <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
      <Image source={require('../../assets/images/jak7.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
    </View>
    </Link>
    <Text style={tw`text-center mt-1`}>JakEmisi</Text>
  </View>

  <View style={tw`items-center`}>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
        <Image source={require('../../assets/images/jak8.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
      </View>
    </TouchableOpacity>
    <Text style={tw`text-center mt-1`}>Lainnya</Text>
  </View>
</View>

     {/* Modal Lainnya */}
<Modal
  animationType="slide" // Animasi slide dari bawah ke atas
  transparent={true} // Membuat background modal transparan
  visible={modalVisible} // Kontrol visibilitas modal
  onRequestClose={() => setModalVisible(false)} // Tindakan ketika modal ditutup
>
  <View style={tw`flex-1 justify-end bg-black bg-opacity-50`}>
    <View style={tw`bg-white rounded-t-xl p-6 shadow-lg`}>
      <Text style={tw`text-lg font-bold mb-4`}>Satu Aplikasi Beragam Fungsi</Text>

      {/* Daftar Menu di Modal */}
      <View style={tw`w-92 h-15 justify-between flex flex-row gap-3 mt-3`}>
        <View style={tw`items-center`}>
          <Link href="/jak/jakwar">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jaki1.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakWarta</Text>
        </View>

        <View style={tw`items-center`}>
          <Link href="/jak/jakres">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jaki2.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakRespons</Text>
        </View>

        <View style={tw`items-center`}>
          <Link href="/jak/jakpan">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jaki3.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakPangan</Text>
        </View>

        <View style={tw`items-center`}>
          <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
            <Image source={require('../../assets/images/jaki4.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
          </View>
          <Text>JakLingko</Text>
        </View>
      </View>

      {/* Daftar Menu di Modal 2 */}

      <View style={tw`w-92 h-15 justify-between flex flex-row gap-3 mt-10`}>
        <View style={tw`items-center`}>
          <Link href="/jak/jakwar">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jak5.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakSiaga</Text>
        </View>

        <View style={tw`items-center`}>
          <Link href="/jak/jakres">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jak6.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakWifi</Text>
        </View>

        <View style={tw`items-center`}>
          <Link href="/jak/jakpan">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jak7.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakEmisi</Text>
        </View>

        <View style={tw`items-center`}>
          <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
            <Image source={require('../../assets/images/jak8.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
          </View>
          <Text>Jaki</Text>
        </View>
      </View>

      {/* Daftar Menu di Modal 3 */}

      <View style={tw`w-92 h-15 justify-between flex flex-row gap-3 mt-10`}>
        <View style={tw`items-center`}>
          <Link href="/jak/jakwar">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jak9.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakID</Text>
        </View>

        <View style={tw`items-center`}>
          <Link href="/jak/jakres">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jak10.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakLaporVid</Text>
        </View>

        <View style={tw`items-center`}>
          <Link href="/jak/jakpan">
            <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
              <Image source={require('../../assets/images/jak11.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
            </View>
          </Link>
          <Text>JakSurvei</Text>
        </View>

        <View style={tw`items-center`}>
          <View style={tw`h-15 w-15 bg-white rounded-2xl shadow-md flex items-center justify-center`}>
            <Image source={require('../../assets/images/jak12.webp')} style={tw`w-[10] h-[10] rounded-xl`} />
          </View>
          <Text>JakPay</Text>
        </View>
      </View>
      {/* Tombol Tutup Modal */}
      <TouchableOpacity
        style={tw`bg-red-500 rounded-lg px-4 py-2 mt-10`}
        onPress={() => setModalVisible(false)}
      >
        <Text style={tw`text-white text-center`}>Tutup</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


    </View>
    
    

    <View style={tw`w-100% h-63 mt-10 px-4 `}>
      <Text style={tw`text-xl font-bold mt-2`}>
        Ruang Ketiga
      </Text>
      <Text style={tw`text-sm`}>
        Jelajahi ruang publik favoritmu di Jakarta
      </Text>

      <View style={tw`flex flex-row gap-3 mt-2 bg-white h-44 w-100% rounded-xl shadow-md relative`}>
      <Image source={require('../../assets/images/tep.jpg')} style={tw`w-[30] h-[100%] rounded-xl`}></Image>
        <View>
      <Text style={tw`text-lg font-bold mt-3`}>
        Tebet Eco Park
      </Text>
      <Text style={tw`text-sm text-gray-500 w-70`}>
        Tebet Eco Park adalah sebuah wilayah yang terletak di sebelah Utara Tebet, Jakarta.
      </Text>
        </View>
        <TouchableOpacity style={tw`absolute bottom-3 right-3 bg-blue-500 px-4 py-2 rounded-lg`}>
          <Text style={tw`text-white font-semibold`}>Daftar Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={tw` w-100% h-20 mt-10  px-4 `}>
      <View style={tw`flex flex-row justify-between`}>      
        <Text style={tw`text-1xl font-bold mt-2`}>
        Jakarta Tanggap Covid-19
      </Text>
      <Text style={tw`text-1xl text-blue-500 font-bold mt-2`}>
        Lihat Semua
      </Text>
      </View>
    <View style={tw` w-100 h-14`}>
    <Text style={tw`text-sm text-gray-500 mt-2`}>
      Tetap aman,sehat dan produktif selama masa pandemi Covid-19
    </Text>
    </View>

    </View>

    <View style={tw`w-100% h-120 `}>
      <View style={tw`w-100% h-60  flex flex-row items-center justify-between`}>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/vak.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-sm ml-2`}>Daftar dan cek jadwal Vaksinasi Covid</Text>
        </View>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/sun.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Data Cakupan Vaksin</Text>
          <Text style={tw`text-sm ml-2`}>Cek Dasbord Cakupan Vaksinasi Wilayah</Text>
        </View>
      </View>
      <View style={tw`w-100% h-60  flex flex-row items-center justify-between `}>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/dok.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-sm ml-2`}>Untuk Pasien Covid 19 dan non-covid-19</Text>
        </View>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/big.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-sm ml-2`}>Tes Corona (CLM)</Text>
        </View>
      </View>
    </View>


    <View style={tw` w-100% h-20 mt-10  px-4 `}>
      <View style={tw`flex flex-row justify-between`}>      
        <Text style={tw`text-1xl font-bold mt-2`}>
        Plus Jakarta
      </Text>
      <Text style={tw`text-1xl text-blue-500 font-bold mt-2`}>
        Lihat Semua
      </Text>
      </View>
    <View style={tw` w-100 h-14`}>
    <Text style={tw`text-sm text-gray-500 mt-2`}>
    Wadah penggerak kolaborasi, ciptakan dampak positif bagi semua
    </Text>  
    </View>

    </View>

    <View style={tw`w-100% h-120 `}>
      <View style={tw`w-100% h-60  flex flex-row items-center justify-between`}>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/vak.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-sm ml-2`}>Daftar dan cek jadwal Vaksinasi Covid</Text>
        </View>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/vak.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-sm ml-2`}>Daftar dan cek jadwal Vaksinasi Covid</Text>
        </View>
      </View>
      <View style={tw`w-100% h-60  flex flex-row items-center justify-between `}>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/vak.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-sm ml-2`}>Daftar dan cek jadwal Vaksinasi Covid</Text>
        </View>
        <View style={tw`h-50 w-50 bg-white rounded-xl shadow-md`}>
          <Image source={require('../../assets/images/vak.jpg')} style={tw`w-[50] h-[30] rounded-xl`}></Image>
          <Text style={tw`mt-2 text-blue-500 ml-2`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-sm ml-2`}>Daftar dan cek jadwal Vaksinasi Covid</Text>
        </View>
      </View>
    </View>



    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

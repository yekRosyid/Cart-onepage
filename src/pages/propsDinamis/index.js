import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

//props functional component
const Story = (props) => {
    return (
        <View style={{ alignItems: 'center', marginRight: 20 }}>
            <Image source={{ uri: props.gambar }}
                style={{ height: 80, width: 80, borderRadius: 80 / 2 }} />
            <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
        </View>
    )
}

//deklarasi props di component
const PropDinamis = () => {
    return (
        <View>
            <Text>page prop dinamis</Text>
            <ScrollView horizontal>
            <View style={{flexDirection:'row'}} >
                <Story judul='Potret Santri'
                    gambar='https://instagram.fcgk6-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/118669216_935846300239210_7315530775382103069_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=l7xH4O9E9PAAX-ro9wr&oh=9bc09e127c6c442a11a10b1e6a5cf706&oe=5F7FEC19' />
                <Story judul='Osabar 2020'
                    gambar='https://instagram.fcgk6-1.fna.fbcdn.net/v/t51.2885-15/s150x150/118560334_444870419723476_2577460336592703059_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net&_nc_ohc=_v6uWY04AvAAX9-cTsK&oh=1ea16d7deec7c53f19bdc2739dafe54a&oe=5F7FE777' />
                <Story judul='Sisi Pesantren'
                    gambar='https://instagram.fcgk6-1.fna.fbcdn.net/v/t51.2885-15/s150x150/109958373_284324102656653_3178125302355318655_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net&_nc_ohc=sVv9hqr6y0sAX8VasFT&oh=c0aa1d1b85f24dfeb37412ab75f1462c&oe=5F7D328E' />
                <Story judul='OSABAR 2019'
                    gambar='https://instagram.fcgk6-1.fna.fbcdn.net/v/t51.2885-15/s150x150/65776987_271731307035172_2045193615054705649_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net&_nc_ohc=_XmTOl7dCTUAX-Ih_pM&oh=78c60b0a28e5edd07c4244a5d22a4df7&oe=5F802523' />
                <Story judul='OSABAR 2018'
                    gambar='https://instagram.fcgk6-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/36969822_489480858172252_6462700885871951872_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=g-zBJBzSh5QAX-05Bfz&oh=8703b78ff5d0aab9edac1c6672d8d841&oe=5F5726A9' />
                <Story />
            </View>
            </ScrollView>
        </View>
    )
}

export default PropDinamis

const styles = StyleSheet.create({})

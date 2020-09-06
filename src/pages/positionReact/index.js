import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import shoppingIcon from '../../assets/icons/shopping-cart.png'

const PositionReact = (props) => {
    return (
        <View style={styles.wraper}>
            <View style={styles.cartWrapper}>
                <Image source={shoppingIcon} style={styles.iconCart}></Image>
                <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text>Keranjang</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    iconCart: {
        width: 50,
        height: 50
    },
    cartWrapper: {
        width: 94,
        height: 94,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#4398d1',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    wraper: {
        alignItems: 'center',
        paddingTop: 30
    },
    notif: {
        textAlign: 'center',
        backgroundColor: '#6fcf97',
        color: 'white',
        borderRadius: 24,
        padding: 3,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
});

export default PositionReact;

import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MacbookPro from '../macbookPro'
import PositionReact from '../positionReact'

const Comunication = () => {
    const [totalProduct, setTotalProduct] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Comunication component dengan props dan state</Text>
            <PositionReact quantity={totalProduct} />
            <MacbookPro onPressBeli={()=> setTotalProduct(totalProduct+1)} />
        </View>
    )
}
 
export default Comunication

const styles = StyleSheet.create({
    tittle: {
        textAlign: 'center'
    },
    container: {
        padding: 20
    }
})

import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//state component function arrow
const Counter = () => {
    const [number, setNumber] = useState(0); //pendifinisian state
    return (
        <View>
            <Text>{number}</Text>
            <Button title='TAMBAH' onPress={()=> setNumber(number+1)} />
        </View>
    )
}

//class component
class CounterClass extends Component {
    state = {
        number : 0,
    }
    render (){
        return(
            <View>
            <Text>{this.state.number}</Text>
            <Button title='TAMBAH' onPress={()=> this.setState({number: this.state.number + 1})} />
        </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wraper}>
            <Text style={styles.tittle} >INI STATE DINAMIS</Text>
            <Text style={styles.judul} >Functional Component atau Hoks</Text>
            <Counter />
            <Counter />
            <Text style={styles.judul} >Class Component</Text>
            <CounterClass />
            <CounterClass />
        </View>
    )
}

export default StateDinamis;

const styles = StyleSheet.create({
    wraper: {
        padding: 20
    },
    tittle: {
        textAlign: 'center'
    },
    judul: {
        marginTop: 20,
        marginBottom: 20
    }
})

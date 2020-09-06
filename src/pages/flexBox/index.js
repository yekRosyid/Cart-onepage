import React, { Component } from 'react';
import { View } from "react-native";


class FlexBox extends Component {
    render(){
        return(
            <View>
                <FlexBoxA />
                <FlexBoxB />
                <FlexBoxC />
            </View>
        )
    }
}

class FlexBoxA extends Component {
    render(){
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex:1, height:50,backgroundColor: 'red'}} />
                <View style={{flex:1, height:50,backgroundColor: 'blue'}} />
                <View style={{flex:1, height:50,backgroundColor: 'yellow'}} />
                <View style={{flex:1, height:50,backgroundColor: 'green'}} />
                <View style={{flex:1, height:50,backgroundColor: 'orange'}} />
            </View>
        )
    }
}

class FlexBoxB extends Component {
    render(){
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex:1, height:50,backgroundColor: 'red'}} />
                <View style={{flex:4, height:50,backgroundColor: 'grey'}} />
                <View style={{flex:1, height:50,backgroundColor: 'red'}} />
                <View style={{flex:4, height:50,backgroundColor: 'grey'}} />
                <View style={{flex:1, height:50,backgroundColor: 'red'}} />
            </View>
        )
    }
}

class FlexBoxC extends Component {
    render(){
        return (
            <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <View style={{flex:1, height:50,backgroundColor: 'grey'}} />
                <View style={{flex:2, height:100,backgroundColor: 'purple'}} />
                <View style={{flex:3, height:130,backgroundColor: 'grey'}} />
                <View style={{flex:4, height:150,backgroundColor: 'purple'}} />
                <View style={{flex:5, height:170,backgroundColor: 'grey'}} />
            </View>
        )
    }
}
export default FlexBox;
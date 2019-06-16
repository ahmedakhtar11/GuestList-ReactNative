import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Component2 extends Component{
    onPress(){
        console.log('Pressed Area');
    }
  
    render() {
    return (
      <View>

        <View style = {styles.theView}>
            <Text style = {styles.theText}>Component2</Text>
        </View>

        <View style = {styles.container}>
            <TouchableHighlight style = {styles.v1} onPress={this.onPress}>
            <View>
            <Text style = {styles.vText}>View1</Text>
            </View>
            </TouchableHighlight>

            <View style = {styles.v2}>
            <Text>View2</Text>
            </View>

            <View style = {styles.v3}>
            <Text style = {styles.vText}>View3</Text>
            </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    theView: {
        backgroundColor:"lightgray"

    },
    theText: {
        color: '#FFFFFF', fontSize: 28, textAlign: 'center', margin: 10, color:'red'
    },
    container: {
        height:100,
        flexDirection:'row'
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding:10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    v2: {
        flex: 1,
        backgroundColor: 'white',
        padding:10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    v3: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding:10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    vText: {
        color: 'white'
    }
})

AppRegistry.registerComponent('Component2', () => Component2);

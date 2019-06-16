import React, {Component} from 'react';

import {AppRegistry, Text, View} from 'react-native';

export default class Component1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Ahmed',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Welcome'
    }
  
  render() {
    console.log('Testing Console.log');
    let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View>
        <Text>This is Component 1</Text>
        <Text>{this.props.message}</Text>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);






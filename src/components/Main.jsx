import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../../public/scss/app.scss';


export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      time: ""
    }
    setInterval(() => {
      this.setState(prevState => {
        time: Date.now()
      })
    }, 1000)
  }
  render() {
    console.log(this.state.time)
    return (
      <View>
          <Text style={ styles.contain }>skyCloud</Text>
          <Text style={ styles.container }>{ this.state.time }</Text>

      </View>
    )
  }
}

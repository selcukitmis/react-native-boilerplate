import React, {Component} from 'react'
import {ScrollView, Text, Image, View} from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import {Images} from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Demo extends Component {
  componentDidMount() {
    console.log("demo");
  }
  onNavigationStateChange(prevState, newState)
  {
    console.log("pp");
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>
          Demo
        </Text>
      </View>
    )
  }
}

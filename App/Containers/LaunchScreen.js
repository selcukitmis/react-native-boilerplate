import React, {Component} from 'react'
import {Text, Image, View} from 'react-native'

import {Images} from '../Themes'
import styles from './Styles/LaunchScreenStyles'
import {NavigationActions} from "react-navigation";

export default class LaunchScreen extends Component {
  componentWillMount() {
    console.log("login");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
  }
  componentWillReceiveProps() {
    console.log('rerender here')
  }

  componentDidMount() {
    console.log("sss");
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    console.log("asdas");
  }

  render() {
    console.log("this.props",this.props.navigation);
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch'/>
        <Text onPress={() => {
          const actionToDispatch = NavigationActions.reset({
            index  : 0,
            key    : null,
            actions: [NavigationActions.navigate({routeName: 'loginStack'})]
          });
          this.props.navigation.dispatch(actionToDispatch)

        }}>
          Çıkış Yap </Text>

      </View>
    )
  }
}

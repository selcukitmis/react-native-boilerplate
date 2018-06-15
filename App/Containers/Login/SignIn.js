import React, {Component} from 'react'
import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native'
import {Images} from '../../Themes'
import styles from '../Styles/LaunchScreenStyles'
import {NavigationActions} from 'react-navigation';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.navigation.navigate('drawerStack')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text onPress={() => {

              const actionToDispatch = NavigationActions.reset({
                index  : 0,
                key    : null,
                actions: [NavigationActions.navigate({routeName: 'tabStack'})]
              });
              this.props.navigation.dispatch(actionToDispatch);

            }}>
              Giriş Yap
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

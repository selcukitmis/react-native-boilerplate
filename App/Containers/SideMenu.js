import React, {Component} from 'react'
import {ScrollView, Text, View } from 'react-native'
import {NavigationActions} from 'react-navigation';

export default class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text>
              Section 1
            </Text>
            <View>
              <Text onPress={this.navigateToScreen('home')}>
                Page1
              </Text>
            </View>
          </View>
          <View>
            <Text>
              Section 2
            </Text>
            <View>
              <Text onPress={this.navigateToScreen('demo')}>
                Page2
              </Text>

            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

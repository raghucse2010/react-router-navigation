import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { withRouter } from 'react-native-router-navigation'
import Row from '@components/Row'

class AuthScene extends Component {

  static title: string = 'Auth'
  static navBarStyle: Object = {
    backgroundColor: '#e91d56',
    borderBottomWidth: 0,
  }
  static titleStyle: Object = { color: 'white' }
  static backButtonStyle: string = 'light'
  static statusBarStyle: string = 'light-content'

  render() {
    const { router } = this.props
    return (
      <View style={styles.container}>
        <Row onPress={() => router.push('welcome')}>
          Push to welcome scene
        </Row>
        <Row onPress={router.pop}>
          Pop to launch scene
        </Row>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'ios' ? 64 : 56,
  },
})

export default withRouter(AuthScene)
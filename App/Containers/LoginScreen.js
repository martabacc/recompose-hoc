import { Button, Contant, Form, Input, Item, Label, Text as NBText } from 'native-base'
import React, { PropTypes } from 'react'
import { Image, Keyboard, LayoutAnimation, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import LoginActions from '../Redux/LoginRedux'
import { Images, Metrics } from '../Themes'
import Styles from './Styles/LoginScreenStyles'

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      username: 'reactnative@infinite.red',
      password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth - 40}
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      this.props.navigation.goBack()
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support -
    // https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth - 40}
    })
  }

  handlePressLogin = () => {
    this.props.navigation.navigate('NavigationDrawer')
  }

  handleChangeUsername = text => {
    this.setState({username: text})
  }

  handleChangePassword = text => {
    this.setState({password: text})
  }

  render () {
    const {username, password} = this.state
    const {fetching} = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <ScrollView
        contentContainerStyle={{justifyContent: 'center'}}
        style={[Styles.container, {height: this.state.visibleHeight}]}
        keyboardShouldPersistTaps="always"
      >
        <View style={Styles.form}>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                ref="username"
                value={username}
                editable={editable}
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.handleChangeUsername}
                underlineColorAndroid="transparent"
                onSubmitEditing={() => this.password._root.focus()}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                ref={ref => (this.password = ref)}
                value={password}
                editable={editable}
                keyboardType="default"
                returnKeyType="go"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={this.handleChangePassword}
                underlineColorAndroid="transparent"
                onSubmitEditing={this.handlePressLogin}
              />
            </Item>
          </Form>
          <View style={[Styles.loginRow]}>
            <Button style={{flex: 1, justifyContent: 'center'}}
                    onPress={this.handlePressLogin}>
              <NBText>Sign In</NBText>
            </Button>
            <Button
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.props.navigation.goBack()}
            >
              <NBText>Cancel</NBText>
            </Button>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

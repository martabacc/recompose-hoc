import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from 'native-base'
import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import ListviewExample from './ListviewExample'
// Styles
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class HomeScreen extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack()
      return true
    })
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
          <Title>Home</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Text>You should only see this when you appear online</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full onPress={() => this.props.navigation.navigate('ListviewExample')}
            >
              <Text>Find more friends...</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

import React from 'react'
import { connect } from 'react-redux'
import withMagic from '../../with-magic'
import { BackHandler, FlatList } from 'react-native'
import { List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
// import Icon from 'react-native-vector-icons/Ionicons'


class ListviewExample extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <ListItem style={{ justifyContent: 'space-between' }}>
        <Text>{item.title}</Text>
        <Text note>{item.description}</Text>
      </ListItem>
    )
  };

  componentWillMount () {
    console.log('Pure component will mount')
  }

  componentDidMount () {
    console.log('Pure component did mount')
  }

  componentWillUnmount () {
    console.log('Pure component will unmount')
  }
  render () {
    const listData = this.props.lists;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>List Example</Title>
          </Body>
          <Right />
        </Header>
        <FlatList data={listData} keyExtractor={item => item.title} renderItem={this._renderItem} />
      </Container>
    )
  }
}

const mapStateToProps = ({lists}) => ({
  lists
});

let composeOptions = {
  isAlertedOnNoConnection: false
}

export default withMagic(composeOptions)(
  connect(....)(
    enhance(....)
  )
)

// export default connect()(ListviewExample);

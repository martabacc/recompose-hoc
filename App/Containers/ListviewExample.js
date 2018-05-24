import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title,
  View
} from 'native-base'
import React from 'react'
import { FlatList } from 'react-native'
import withMagic from '../../with-magic'

class ListviewExample extends React.Component {
  _renderItem = ({item}) => {
    return (
      <ListItem style={{justifyContent: 'space-between'}}>
        <Text>{item.title}</Text>
        <Text note>{item.description}</Text>
      </ListItem>
    )
  }

  render () {
    const listData = this.props.lists
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body style={{flex: 3}}>
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
})

const composeOptions = {
  isGoBack: true,
  connectOptions: { mapStateToProps }
};

export default withMagic(composeOptions)(ListviewExample)

// export default connect()(ListviewExample);

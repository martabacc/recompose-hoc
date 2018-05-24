import { BackHandler } from 'react-native'
import { lifecycle } from 'recompose'

const goBackEnhancer = lifecycle({
  componentDidMount(){
    const goBackAction = this.props.navigation.goBack;
    BackHandler.addEventListener('hardwareBackPress', goBackAction);
  },
  componentWillUnmount(){
    const goBackAction = this.props.navigation.goBack;
    BackHandler.removeEventListener('hardwareBackPress', goBackAction);
  }
});

export default goBackEnhancer;

import { BackHandler } from 'react-native'
import { lifecycle } from 'recompose'

const goBackEnhancer = lifecycle({
  componentDidMount(){
    const goBackAction = this.props.navigation.goBack;
    BackHandler.addEventListener('hardwareBackPress', goBackAction);
    console.log('enhancer did mount');
  },
  componentWillUnmount(){
    console.log('enhancer will un mount');
    const goBackAction = this.props.navigation.goBack;
    BackHandler.removeEventListener('hardwareBackPress', goBackAction);
  },
  componentWillMount(){
    console.log('enhancer will mount');
  }
});

export default goBackEnhancer;

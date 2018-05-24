import { compose } from 'recompose'
import goBackEnhancer from './enhancers/goBackEnhancer'
import noConnectionEnhancer from './enhancers/noConnectionEnhancer'
import { NetInfo } from 'react-native';
import { connect } from 'react-redux';

// Return a decoratedComponent
const orchestrator = (options = {}) => (Component) => {
  const {
    isGoBack = null,
    connectedToStore = null,
  } = options;

  const enhancers = [];

  if (isGoBack)
    enhancers.push(goBackEnhancer)

  //connecting to Store
  if(connectedToStore){
    const { mapDispatchToProps, mapStateToProps } = connectedToStore;
    let connectEnhancer = connect(mapStateToProps, mapDispatchToProps)
    enhancers.push(connectEnhancer);
  }



  return compose(...enhancers)(Component)
}

export default orchestrator;

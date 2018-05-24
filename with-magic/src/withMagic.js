import { compose } from 'recompose'
import goBackEnhancer from './enhancers/goBackEnhancer'
import noConnectionEnhancer from './enhancers/noConnectionEnhancer'

// Return a decoratedComponent
const orchestrator = (opts = {}) => (Component) => {
  const {
    isGoBack = null,
    isAlertedOnNoConnection = null
  } = opts;

  const enhancers = []
  if (isGoBack) enhancers.push(goBackEnhancer)
  if (isAlertedOnNoConnection) enhancers.push(noConnectionEnhancer)

  return compose(...enhancers)(Component)
}

export default orchestrator;

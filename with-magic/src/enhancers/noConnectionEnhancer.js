import { renderComponent, branch } from 'recompose'
import NoInternetConn from '../views/noInternetConnection'

const noConnectionEnhancer = (isNoInternetConn) => {
  branch(
    isNoInternetConn,
    renderComponent(NoInternetConn)
  )
};

export default noConnectionEnhancer;

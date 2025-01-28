import { createContext } from "react"
import propTypes from 'prop-types';

const authContext = createContext();

const AuthProvider = ({children}) => {


    const authInfo = {}

  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: propTypes.node.isRequired,
}

export default AuthProvider

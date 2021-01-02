import React, { useEffect } from 'react'

const protectedRoute = (Comp, route = '/profile') => (props) => {
  async function checkAuthState() {
    try {
      //await Auth.currentAuthenticatedUser()
      console.log('Auth');
      throw new Error('Protected test..')
    } catch (err) {
      props.history.push(route)
    }
  }
  
  useEffect(() => {
    checkAuthState()
  }, []);

  return <Comp {...props} />
}

export default protectedRoute
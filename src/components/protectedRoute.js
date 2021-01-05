import React, { useEffect } from 'react';
import Auth from '../services/Auth';

const protectedRoute = (Comp, route = '/profile') => (props) => {
  async function checkAuthState() {
    try {
      const user = await Auth.currentUserPoolUser();
      if (!user) throw new Error('Protected test..')
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
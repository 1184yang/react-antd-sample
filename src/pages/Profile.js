import React, { useState, useEffect } from 'react'
import { Button } from 'antd';
import Container from '../components/Container';
import Form from '../components/Form';
import Auth from '../services/Auth'

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      const userInfo = await Auth.currentUserPoolUser();
      setUser(userInfo)
    } catch (err) { console.log('error: ', err) }
  }
  
  function signOut() {
    Auth.signOut().catch(err => console.log(`error: ${err}`));
    setUser(null);
  }

  if (user) {
    return (
      <Container>
        <h1>Profile</h1>
        <h2>Username: {user.username}</h2>
        <h3>Email: {user.email}</h3>
        <h4>Phone: {user.phone_number}</h4>
        <Button onClick={signOut}>Sign Out</Button>
      </Container>
    )
  }
  return <Form setUser={setUser} /> 
}

export default Profile
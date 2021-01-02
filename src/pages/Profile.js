import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import { Button } from 'antd'

const Profile = () => {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      //const data = await Auth.currentUserPoolUser()
      //const userInfo = { username: data.username, ...data.attributes }
      const userInfo = { username: 'Hello Kitty', email: 'hellokitty@example.com', phone_number: '0000912344'}
      setUser(userInfo)
    } catch (err) { console.log('error: ', err) }
  }

  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h3>Email: {user.email}</h3>
      <h4>Phone: {user.phone_number}</h4>
      <Button>Sign out</Button>
    </Container>
  );
}

export default Profile
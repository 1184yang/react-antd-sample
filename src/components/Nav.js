import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
  HomeOutlined, ProfileOutlined, FileProtectOutlined, InfoCircleOutlined, 
  ScheduleOutlined, ContactsOutlined
} from '@ant-design/icons'

const Nav = ({ current = 'home' }) => (
  <div>
    <Menu selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">
        <Link to={'/'}>
          <HomeOutlined />Home
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to={'/about'}>
          <InfoCircleOutlined />About
        </Link>
      </Menu.Item>
      <Menu.Item key="events">
        <Link to={'/events'}>
          <ScheduleOutlined />Events
        </Link>
      </Menu.Item>
      <Menu.Item key="products">
        <Link to={'/products'}>
          <FileProtectOutlined />Products
        </Link>
      </Menu.Item>
      <Menu.Item key="protected">
        <Link to={'/protected'}>
          <FileProtectOutlined />Protected
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to={'/contact'}>
          <ContactsOutlined />Contact
        </Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link to={'/profile'}>
          <ProfileOutlined />Profile
        </Link>
      </Menu.Item>
    </Menu>
  </div>
)

export default Nav;
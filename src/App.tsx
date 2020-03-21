import React from 'react'
import { Layout, Menu } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
import Home from './pages/Home'
import './App.less'

const { Header, Footer, Content } = Layout

const App = () => (
  <Layout>
    <Header className='App-header'>
        <div className='App-logo'>
          <a href='http://loclahost/' title='Wir für Uns'>
          <TeamOutlined style={{marginRight: '12px'}} />
          Wir für Uns
          </a>
        </div>
      <Menu
        theme='dark'
        className='App-header-menu'
        mode='horizontal'
        defaultSelectedKeys={['home']}
      >
        <Menu.Item key='home'>Home</Menu.Item>
        <Menu.Item key='helper'>Wo kann ich Helfen</Menu.Item>
        <Menu.Item key='about'>Über Uns</Menu.Item>
      </Menu>
    </Header>
    <Content className='App-content-wrapper'>
      <div className='App-content'>
        <Home />
      </div>
    </Content>
    <Footer className='App-footer'>Wir für Uns © {new Date().getFullYear()}</Footer>
  </Layout>
)

export default App

import { TeamOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.less'
import Home from './pages/Home'

const { Header, Footer, Content } = Layout

const App = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])
  
  return (
  <Router>
    <Layout className='App-wrapper'>
      <Header className='App-header'>
        <div className='App-logo'>
          <Link to='/' onClick={() => setSelectedKeys([])}>
            <TeamOutlined style={{ marginRight: '12px' }} />
            Wir für Uns
          </Link>
        </div>
        <Menu
          className='App-header-menu'
          mode='horizontal'
          selectedKeys={selectedKeys}
          onSelect={({key}) => {setSelectedKeys([key])}}
        >
          <Menu.Item key='aktiv_werden'><span>Aktiv Werden</span><Link to='/aktiv_werden' /></Menu.Item>
          <Menu.Item key='inspiration'><span>Inspiration</span><Link to='/inspiration' /></Menu.Item>
          <Menu.Item key='uber_uns'><span>Über Uns</span><Link to='/uber_uns' /></Menu.Item>
        </Menu>
      </Header>
      <Content className='App-content-wrapper'>
        <div className='App-content'>
          <Route exact path='/' component={Home} />
          <Route exact path='/aktiv_werden' component={() => <div>AKTIV WERDEN</div>} />
          <Route exact path='/inspiration' component={() => <div>INSPIRATION</div>} />
          <Route exact path='/uber_uns' component={() => <div>ÜBER UNS</div>} />
        </div>
      </Content>
      <Footer className='App-footer'>Wir für Uns © {new Date().getFullYear()}</Footer>
    </Layout>
  </Router>
)}

export default App

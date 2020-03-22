import { TeamOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.less'
import BecomeActive from './pages/BecomeActive'
import Home from './pages/Home'
import About from './pages/About'
import Inspiration from './pages/Inspiration'
import Initiatives from './pages/Initiatives'
import Help from './pages/Help'
import logo from './assets/img/logo.png'

const { Header, Footer, Content } = Layout

const App = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>()

  return (
    <Router>
      <Layout className='App-wrapper'>
        <Header className='App-header'>
          <Link to='/' onClick={() => setSelectedKeys(undefined)}>
            <img className='App-logo' src={logo} alt='logo' />
          </Link>
          <Menu
            className='App-header-menu'
            mode='horizontal'
            selectedKeys={selectedKeys}
            onSelect={({ key }) => { setSelectedKeys([key]) }}
          >
            <Menu.Item key='aktiv_werden'><span>Aktiv Werden</span><Link to='/aktiv_werden' /></Menu.Item>
            <Menu.Item key='die_idee'><span>Über Uns</span><Link to='/die_idee' /></Menu.Item>
            <Menu.Item key='inspiration'><span>Inspiration</span><Link to='/inspiration' /></Menu.Item>
            <Menu.Item key='initiativen'><span>Alle Initiativen</span><Link to='/initiativen' /></Menu.Item>
            <Menu.Item key='hilfe_suchen' style={{ float: 'right' }}><span>Hilfe Suchen</span><Link to='/hilfe_suchen' /></Menu.Item>
          </Menu>
        </Header>
        <Content className='App-content-wrapper'>
          <div className='App-content'>
            <Route exact default path='/' component={Home} />
            <Route exact path='/aktiv_werden' component={BecomeActive} />
            <Route exact path='/die_idee' component={About} />
            <Route exact path='/inspiration' component={Inspiration} />
            <Route exact path='/initiativen' component={Initiatives} />
            <Route exact path='/hilfe_suchen' component={Help} />
          </div>
        </Content>
        <Footer className='App-footer'>Wir für Uns © {new Date().getFullYear()}</Footer>
      </Layout>
    </Router>
  )
}

export default App

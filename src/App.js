import React, { Component } from 'react'
import { Layout, Menu, PageHeader } from 'antd'
import io from 'socket.io-client'
import './App.scss'

import PopUpModal from './components/PopUpModal'
import Board from './components/Board'
const socketUrl = io('http://localhost:5000')

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      socket: null
    }
  }

  componentWillMount () {
    this.initSocket()
  }

  initSocket = () => {
    this.setState({ socketUrl })
    console.log('connected!!')
  }

  render () {
    console.log('props', this.props.Component)
    const {
      Header,
      Content,
      Footer
    } = Layout
    return (
      <div >
        <Layout className='layout'>
          <Header>
            <div className='logo'>
              <p className=''>COOL RETRO</p>
            </div>
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='1'>Button</Menu.Item>
              <Menu.Item key='2' type='primary' onClick={this.showModal}>Change Board</Menu.Item>
            </Menu>
          </Header>

          <PopUpModal />

          <PageHeader
            title='blee'
            subTitle='This is a subtitle'
          />
          <Content>
            <Board />
          </Content>
          <Footer className='footer'>
            Cool Retro ©2018 Created by Bryan
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Modal, Input, Cascader} from 'antd'

class PopUpModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true,
      bname: ''
    }
  }

  showModal = () => {
    this.setState({
      visible: false
    })
  }

  handleBoard = (e) => {
    e.preventDefault()
    this.setState({
      visible: false,
      bname: this.state.bname
    })
  }

  handleCancel = () => {
    this.setState({
      visisble: false
    })
  }

  updateInput (e) {
    this.setState ({
      bname: e.target.value
    })
  }

  render () {
    const options = [
      {
        code: '1',
        name: 'Went well - to Improve - Action Items'
      },
      {
        code: '2',
        name: 'Start - Stop - Continue'
      }, 
      {
        code: '3',
        name: 'Mad - Sad - Glad'
      }]

    function onChange (value) {
      console.log(value)
    }
    return (
      <div>
        <Modal
          title='Choose the type of Board'
          visible={this.state.visible}
          onOk={e => this.handleBoard(e)}
          onCancel={this.handleCancel}
          >
            <Input placeholder='Board Name' type='text' name='bname' value={this.state.bname} onChange={e => this.updateInput(e)} />
            <Cascader fieldNames={{ label: 'name', value: 'code', children: 'items' }} options={options} onChange={onChange} placeholder="Please select"  />
        </Modal>
      </div>
    )
  }
}

export default PopUpModal

import React, { Component } from 'react'
import { Button, Col, Input, Icon, Row } from 'antd'
import './style.scss'

class Board extends Component {
  constructor (props) {
    super()
    this.state = {
      displayBtn: true,
      readOnly: true
    }
  }

  editCard = () => {
    this.setState(
      prevState => ({readOnly: !prevState.readOnly})
    )
  }

  addInput = () => {
    this.setState({
        displayBtn: false
    })
  }

  render () {
    const { TextArea } = Input
    const displayClass = 'ant-btn-dashed'
    const contentBtn = this.state.displayBtn ? displayClass : `${displayClass}--hide`

    return (
      <div className='container'>
        <div className='content'>
          <Row gutter={40}>
            <Col span={8}>
              <h1 contentEditable='true'>Column 1</h1>
              <div className='cards'>
                <Button type='dashed' className={contentBtn} onClick={this.addInput}>+</Button>
                { !this.state.displayBtn &&
                  <div className='editCard'>
                    <span className='text-icon'><Icon type='edit' onClick={this.editCard} /></span>
                    <TextArea readOnly={this.state.readOnly} className='card' placeholder='Write retro...'  autosize={{ minRows: 2, maxRows: 15 }}  />
                  </div>
                }
              </div>
            </Col>
            <Col span={8}>
              <h1 contentEditable='true'>Column 2</h1>
              <div className='cards'>
                <Button type='dashed' className={contentBtn} onClick={this.addInput}>+</Button>
                  { !this.state.displayBtn && 
                    <div className='editCard'>
                      <span className='text-icon'><Icon type='edit' onClick={this.editCard} /></span>
                      <TextArea readOnly={this.state.readOnly} className='card' placeholder='Write retro...'  autosize={{ minRows: 2, maxRows: 15 }}  />
                  </div>
                  }
              </div>
            </Col>
            <Col span={8}>
              <h1 contentEditable='true'>Column 3</h1>
              <div className='cards'>
                <Button type='dashed' className={contentBtn} onClick={this.addInput}>+</Button>
                  { !this.state.displayBtn && 
                    <div className='editCard'>
                      <span className='text-icon'><Icon type='edit' onClick={this.editCard} /></span>
                      <TextArea readOnly={this.state.readOnly} className='card' placeholder='Write retro...'  autosize={{ minRows: 2, maxRows: 15 }}  />
                    </div>
                  }
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Board

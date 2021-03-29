import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Horizontal extends Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        value: 'null'
      }
    }
  
    handleChangeStart = () => {
    };
  
    handleChange = value => {
      this.setState({
        value: value
      })
    };
  
    handleChangeComplete = () => {
    };
  
    render () {
      const { value } = this.state
      return (
        <div className='slider'>
          <Slider
            min={0}
            max={100}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          <div className='value'>{value}</div>
        </div>
      )
    }
  }
  
  export default Horizontal

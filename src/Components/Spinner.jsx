import React, { Component } from 'react'
import loading from './AGNB.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt=""/>
      </div>
    )
  }
}

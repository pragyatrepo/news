import React, { Component } from 'react'
import spinner from './spinner.gif'


export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner}/>
      </div>
    )
  }
}

export default Loading

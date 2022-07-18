import React, { Component } from 'react'

export class Upload extends Component {
    state={
        src:''
    }
    imageHandler = (event)=>{
        if(event.target.files && event.target.files[0])
        var inp = event.target.files[0]
        console.log(inp)
        console.log('files'+event.target.files)
        this.setState({
            src:URL.createObjectURL(inp)
        })
    }
  render() {
    return (
      <div>
        <input type='file' onChange={this.imageHandler}/>
        <img src={this.state.src} alt=''/>
      </div>
    )
  }
}

export default Upload
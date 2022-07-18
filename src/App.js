import './App.css';

import React, { Component } from 'react'
import Upload from './Upload';

export class App extends Component {
  state={
    inputArray:[],
    name:'',
    email:'',
    pass:'',
    address:'',
    mobile:'',
    gender:'',
    cricket:'',
    singing:'',
    dancing:'',
    image:'',
    dob:''
  }
  inputDataHandler = (event)=>{
    event.preventDefault()
    if(!isNaN(this.state.name)){
      alert('enter a valid name')
      return
    }
    if(this.state.cricket==='' && this.state.singing==='' && this.state.dancing===''){
      alert('select any hobbies')
      return
    }
    if(this.state.pass.length<8){
      alert('enter a password of at least 8 characters')
      return
    }
    if(Number(this.state.mobile)<1000000000 || Number(this.state.mobile)>9999999999){
      alert('enter a valid phone number')
      return
    }
    var arr1 = [...this.state.inputArray]
    var arr = {name:this.state.name,email:this.state.email,pass:this.state.pass,address:this.state.address,mobile:this.state.mobile,gender:this.state.gender}
    if(this.state.cricket!=='')
    arr={...arr,cricket:this.state.cricket}
    if(this.state.singing!=='')
    arr={...arr,singing:this.state.singing}
    if(this.state.dancing!=='')
    arr={...arr,dancing:this.state.dancing}
    arr={...arr,image:this.state.image,dob:this.state.dob}
    this.setState({
      inputArray:[...arr1,arr]
    })
  }
  resetHandler = (event)=>{
    this.setState({
    name:'',
    email:'',
    pass:'',
    address:'',
    mobile:'',
    gender:'',
    cricket:'',
    singing:'',
    dancing:'',
    image:'',
    dob:''
    })
  }
  imageHandler = (event)=>{
    if(event.target.files && event.target.files[0])
        var inp = event.target.files[0]
        // console.log(inp)
        // console.log('files'+event.target.files)
        this.setState({
            image:URL.createObjectURL(inp)
        })
    // this.setState({
    //    image:event.target.value
    // })
  }
  render() {
    // {console.log(this.state.inputArray)}
    return (
      <div>
        <form onSubmit={this.inputDataHandler}>
          <table>
            <tbody>
            <tr>
              <td colSpan='2' className='data'>Your Data saved</td>
            </tr>
            <tr>
              <td>
                <label>Enter your name</label>
              </td>
              <td><input onChange={(event)=>this.setState({name:event.target.value})} value={this.state.name} required/></td>
            </tr>
            <tr>
              <td>
                <label>Enter your Email</label>
              </td>
              <td><input type='email' onChange={(event)=>this.setState({email:event.target.value})} value={this.state.email} required/></td>
            </tr>
            <tr>
              <td>
                <label>Enter your password</label>
              </td>
              <td><input type='password' onChange={(event)=>this.setState({pass:event.target.value})} value={this.state.pass} required/></td>
            </tr>
            <tr>
              <td className='address'>
                <label>Enter your Address</label>
              </td>
              <td><textarea className='address' onChange={(event)=>this.setState({address:event.target.value})} value={this.state.address} required/></td>
            </tr>
            <tr>
              <td>
                <label>Enter your Mobile</label>
              </td>
              <td><input type='number' onChange={(event)=>this.setState({mobile:event.target.value})} value={this.state.mobile} required/></td>
            </tr>
            <tr>
              <td>
                <label>Enter your Gender</label>
              </td>
              <td>Male<input type='radio' name='gender' value='Male' onChange={(event)=>this.setState({gender:event.target.value})} required/>Female<input type='radio' name='gender' value='Female' onChange={(event)=>this.setState({gender:event.target.value})} required/>Others<input type='radio' name='gender' value='other' onChange={(event)=>this.setState({gender:event.target.value})} required/></td>
            </tr>
            <tr>
              <td>
                <label>Choose your Hobbies</label>
              </td>
              <td>Cricket<input type='checkbox' value='Cricket' onChange={(event)=>this.setState({cricket:event.target.value})}/>Singing<input type='checkbox' value='Singing' onChange={(event)=>this.setState({singing:event.target.value})}/>Dancing<input type='checkbox' value='Dancing' onChange={(event)=>this.setState({dancing:event.target.value})}/></td>
            </tr>
            <tr>
              <td>
                <label>Choose your Profile Pic</label>
              </td>
              <td><input type='file' onChange={this.imageHandler}  required/></td>
            </tr>
            <tr>
              <td>
                <label>Select your DOB</label>
              </td>
              <td><input type='date' onChange={(event)=>this.setState({dob:event.target.value})} value={this.state.dob} required/></td>
            </tr>
            <tr>
              <td colSpan='2' className='buttons'>
                <input type='submit' value='Register'/>
                <input type='reset' value='reset' onClick={this.resetHandler}/>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
        <table>
          <tbody>
      {
        this.state.inputArray.map((item)=>{
        return(
          // this.state.image !==''?
        <tr><td>{item.name}</td><td>{item.email}</td><td>{item.pass}</td><td>{item.address}</td><td>{item.mobile}</td><td>{item.gender}</td><td>{item.cricket} {item.singing} {item.dancing}</td><td><img src={item.image} alt=''/></td><td>{item.dob}</td></tr>
        )
       }
      )
      }
        </tbody>
        </table>
        {/* <Upload /> */}
      </div>
    )
  }
}

export default App
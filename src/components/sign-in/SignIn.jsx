import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} action="">
          <FormInput 
          type="email" 
          name='email' 
          value={this.state.email}
          handleChange={this.handleChange}
          label='Email'
          required 
          />
          <FormInput 
          type="password" 
          name="password" 
          value={this.state.password} 
          handleChange={this.handleChange}
          label='Password'
          required 
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

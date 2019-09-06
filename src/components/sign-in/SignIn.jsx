import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './sign-in.styles.scss'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.log(error);
    }

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
          <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn
          >Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value })
  }

    return (
      <SignInContainer>
        <SignInTitle>Already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit} action="">
          <FormInput 
          type="email" 
          name='email' 
          value={email}
          handleChange={handleChange}
          label='Email'
          required 
          />
          <FormInput 
          type="password" 
          name="password" 
          value={password} 
          handleChange={handleChange}
          label='Password'
          required 
          />
          <ButtonsBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn
          >Sign in with Google</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
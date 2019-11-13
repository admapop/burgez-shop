import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceforStripe = price * 100;
  const publishableKey = 'pk_test_WMY2nzFd3qLVErDHzyggonEQ00rmTV2PcD';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceforStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment.')
    })
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='BURGEZ SHOP'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is €${price}`}
      amount={priceforStripe}
      currency='EUR'
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton

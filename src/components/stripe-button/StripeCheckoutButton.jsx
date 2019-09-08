import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceforStripe = price * 100;
  const publishableKey = 'pk_test_WMY2nzFd3qLVErDHzyggonEQ00rmTV2PcD';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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

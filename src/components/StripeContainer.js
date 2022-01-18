import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PayementForm from './PayementForm'

const PUBLIC_KEY = "pk_test_51JdBfIGYho70dGhjRcWbwjMHW0jUKIjMga69t8BkwSFbmvjvmuISTgzl6HuTVJWzxoIppBGPKY3pPjWjlRjKJ4lb00PZ7sHr6f"
const stripTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
    return (
        <Elements stripe={stripTestPromise}> 
            <PayementForm/>
        </Elements>
    )
}

export default StripeContainer

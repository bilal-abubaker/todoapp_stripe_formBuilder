import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}
const PayementForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit  =  async (e)=> {
e.preventDefault()
const {error,paymentMethod} = await stripe.createPaymentMethod({
    type: "card",
    card : elements.getElement(CardElement)
})


if(!error ) {
    try {
        const {id} = paymentMethod
        console.log(id)
        const response = await axios.post("http://localhost:4000/payment",{
            amount: 1000,
            id
        })
        if(response.data.success == true){
            console.log("error on response",response)
            setSuccess(true)
        }
    }
    catch(erorr){
        console.log("eror on try catch ",error)
    }
}

else{
    console.log("error on if Else first ", error.message)
}

    }
    return (
        <>
        {!success ? <form onSubmit={handleSubmit}>
            
        <fieldset className="FormGroup">
        <div className='FormRow'>
        <CardElement options={CARD_OPTIONS}/>
        
        </div>

        </fieldset>
<button>
Pay
</button>

            </form>
        : 

        <div>
        <h2>
        you just Bought the item
        </h2>
        </div>
        
        }
            
        </>
    )
}

export default PayementForm

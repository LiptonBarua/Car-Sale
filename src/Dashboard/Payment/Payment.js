import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    console.log(booking)
    const {price,title} = booking;
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    console.log(stripePromise)
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
    return (
        <div data-theme="luxury" classNameName=' p-16 mt-10 rounded-lg'>
             <h1 classNameName='text-3xl'>Payment for {title}.</h1>
             <p>Please pay <strong>${price}</strong> for your Payment.</p>
              <div classNameName='w-96 my-10'>
            <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;
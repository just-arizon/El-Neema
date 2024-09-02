import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Landing from './components/landing';
import Info from './components/info';
import About from './components/AboutUs';
import Footer from './components/Footer';
import Donation from './components/Donation';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

function App() {
  const config = {
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Donate to us',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };
  return (
    <>
    <Info />
    <Navbar />
    <Landing />
    <Donation fwConfig={fwConfig}/>
    <About />
    <Footer />

    </>
  )
}

export default App

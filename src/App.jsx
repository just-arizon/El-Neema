import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Landing from './components/landing';
import Info from './components/info';
import About from './components/AboutUs';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Donation from './components/Donation';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import Logo from "../public/favicon-32x32.png";
import Testimonials from './components/Testimonials';

function App() {
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
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
      title: 'El-Neema Donation',
      description: 'Payment for items in cart',
      logo: Logo,
    },
  };

  const fwConfig = {
    ...config,
    text: 'Donate',
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
    <Explore />
    <Testimonials />
    <Footer />

    </>
  )
}

export default App

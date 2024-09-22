import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const DonationForm = ({ category, fwConfig }) => {
  const [donationDetails, setDonationDetails] = useState({
    email: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    setDonationDetails({
      ...donationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configWithDonationDetails = {
      ...fwConfig,
      amount: donationDetails.amount,
      customer: {
        ...fwConfig.customer,
        email: donationDetails.email,
      },
      tx_ref: `${Date.now()}_${category.id}`,
    };

    return <FlutterWaveButton {...configWithDonationDetails} />;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Input
        clearable
        underlined
        fullWidth
        name="email"
        type="email"
        placeholder="Enter your email"
        value={donationDetails.email}
        onChange={handleInputChange}
      />
      <Input
        clearable
        underlined
        fullWidth
        name="amount"
        type="number"
        placeholder="Enter amount"
        value={donationDetails.amount}
        onChange={handleInputChange}
      />
      <Button
        className="uppercase bg-orange-500 text-white font-semibold"
        type="submit"
      >
        {category.cta}
      </Button>
    </form>
  );
};

export default DonationForm;

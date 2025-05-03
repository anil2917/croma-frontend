// UpiPayment.js
import React, { useState } from 'react';

function Payment() {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (upiId.includes('@') && parseFloat(amount) > 0) {
      setMessage('✅ UPI Payment Successful!');
    } else {
      setMessage('❌ Invalid UPI ID or amount');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dummy UPI Payment</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="UPI ID" value={upiId} onChange={e => setUpiId(e.target.value)} /><br />
        <input placeholder="Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} /><br /><br />
        <button type="submit">Pay</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Payment;
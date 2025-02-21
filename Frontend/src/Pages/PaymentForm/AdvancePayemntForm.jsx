import React, { useState } from 'react'
import './PaymentForm.css'
const AdvancePaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic here to handle form submission (e.g., sending data to backend)
      setIsSubmitted(true);
    };
  
    return (
      <div>
        {isSubmitted ? (
          <p>Payment of ${amount} via {paymentMethod} is successfully submitted!</p>
        ) : (
          <form onSubmit={handleSubmit} className='form'>
            <label className="amount">Amount</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
  
            <label className="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="" className='option'>Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
            <input value='cvv' placeholder='Enter cvv' >CVV</input> 
  
            <button type="submit" className='button'>Submit</button>
          </form>
        )}
      </div>
    );
  };
  
  export default AdvancePaymentForm;
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [cartTotal, setCartTotal] = useState("");

  const checkout = (cartTotal) => {
    if (cartTotal >= 2000) {
      return (cartTotal * 0.85).toFixed(0); // Округляем до двух знаков после запятой
    } else {
      return cartTotal.toFixed(0);
    }
  };

  const handleInputChange = (event) => {
    setCartTotal(event.target.value);
  };

  return (
    <div>
      <input type="number" value={cartTotal} onChange={handleInputChange} />
      <h3>Result: {checkout(Number(cartTotal))}</h3>
    </div>
  );
};

export default Calculator;

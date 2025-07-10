import { useState } from 'react';

export default function Calculator() {
  const [miles, setMiles] = useState('');
  const [rate, setRate] = useState(0.75);
  const [total, setTotal] = useState(null);

  const handleCalculate = () => {
    const result = parseFloat(miles) * rate;
    setTotal(result.toFixed(2));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📈 Delivery Calculator</h1>
      <p>Enter your estimated miles to calculate cost:</p>

      <input
        type="number"
        value={miles}
        onChange={(e) => setMiles(e.target.value)}
        placeholder="Miles"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button onClick={handleCalculate} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Calculate
      </button>

      {total && (
        <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>
          💵 Estimated Total: <strong>${total}</strong>
        </p>
      )}
    </div>
  );
}

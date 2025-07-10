export default function Plans() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🚗 Lease Plans & Bundles</h1>
      <p>Select the best plan for your needs.</p>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Basic Plan</h2>
          <p>View & filter all available inventory.</p>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Pro Plan</h2>
          <p>Includes advanced filters, calculators, and saved search tools.</p>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Dealer Connect</h2>
          <p>Direct lead submission to dealers, with CRM integrations.</p>
        </div>
      </div>
    </div>
  );
}

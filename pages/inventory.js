import { useState } from 'react';

const mockInventory = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    price: 24000,
    mileage: 31000,
    image: 'https://source.unsplash.com/featured/?toyota,camry'
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    price: 21000,
    mileage: 27000,
    image: 'https://source.unsplash.com/featured/?honda,civic'
  },
  {
    id: 3,
    make: 'BMW',
    model: 'X3',
    price: 38000,
    mileage: 18000,
    image: 'https://source.unsplash.com/featured/?bmw,x3'
  }
];

export default function Inventory() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(mockInventory);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const results = mockInventory.filter(
      car =>
        car.make.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
    );
    setFiltered(results);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Inventory Viewer</h1>
      <input
        type="text"
        placeholder="Search by make or model..."
        value={search}
        onChange={handleSearch}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {filtered.map(car => (
          <div key={car.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            width: '250px',
            borderRadius: '8px'
          }}>
            <img src={car.image} alt={car.make} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{car.make} {car.model}</h3>
            <p>Price: ${car.price.toLocaleString()}</p>
            <p>Mileage: {car.mileage.toLocaleString()} miles</p>
          </div>
        ))}
      </div>
    </div>
  );
}

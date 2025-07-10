// pages/_app.js
import Link from 'next/link';
import '../styles/globals.css'; // 

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/calculator" style={{ marginRight: '1rem' }}>Calculator</Link>
        <Link href="/inventory" style={{ marginRight: '1rem' }}>Inventory</Link>
        <Link href="/plans">Plans</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

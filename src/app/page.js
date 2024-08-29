import React from 'react';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Find a Suitable Bursary</h1>
        <p style={styles.headerSubtitle}>Helping you find financial aid for your studies</p>
        <button style={styles.headerButton}>Get Started</button>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Search for Bursaries</h2>
          <input type="text" placeholder="Enter your field of study" style={styles.input} />
          <button style={styles.searchButton}>Search</button>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Popular Bursaries</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Nsfas bursary</li>
            <li style={styles.listItem}>Funza bursary</li>
            <li style={styles.listItem}>Sasol bursary</li>
            <li style={styles.listItem}>Capitec bursary</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 Find a Suitable Bursary - All Rights Reserved</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: '#333',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#0070f3',
    padding: '40px 20px',
    color: '#fff',
  },
  headerTitle: {
    fontSize: '2.5rem',
    margin: '0 0 10px 0',
  },
  headerSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  headerButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#0070f3',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  main: {
    padding: '20px',
  },
  section: {
    margin: '40px 0',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  searchButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    fontSize: '1.1rem',
  },
  footer: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    marginTop: '40px',
    borderTop: '1px solid #e0e0e0',
  },
};

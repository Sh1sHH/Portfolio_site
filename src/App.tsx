import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';

// CSS dosyalarını import et
import './css/vendor.css';
import './css/styles.css';
import './css/custom.css'; // Özel CSS dosyası

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App; 
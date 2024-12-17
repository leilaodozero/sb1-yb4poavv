import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Calculator } from './components/calculator/Calculator';
import { BlogList } from './components/blog/BlogList';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Hero />
        <Features />
        <Calculator />
        <BlogList />
      </div>
    </div>
  );
}

export default App;
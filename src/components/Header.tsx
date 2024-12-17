import React from 'react';
import { Car, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Leilão do Zero</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Benefícios</a>
            <a href="#calculator" className="text-gray-600 hover:text-blue-600">Calculadora</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Planos</a>
            <a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">Entrar</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Começar Grátis
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600">Benefícios</a>
            <a href="#calculator" className="block px-3 py-2 text-gray-600">Calculadora</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600">Planos</a>
            <a href="#blog" className="block px-3 py-2 text-gray-600">Blog</a>
            <a href="#login" className="block px-3 py-2 text-gray-600">Entrar</a>
            <a href="#signup" className="block px-3 py-2 text-blue-600">Começar Grátis</a>
          </div>
        </div>
      )}
    </header>
  );
}
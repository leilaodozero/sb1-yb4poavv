import React from 'react';
import { PenSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogHeader() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog do Leilão</h1>
            <p className="mt-1 text-lg text-gray-500">
              Dicas e novidades sobre o mundo dos leilões de veículos
            </p>
          </div>
          <Link
            to="/blog/novo"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <PenSquare className="h-5 w-5 mr-2" />
            Novo Post
          </Link>
        </div>
      </div>
    </div>
  );
}
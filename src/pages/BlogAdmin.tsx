import React from 'react';
import { BlogPostForm } from '../components/blog/BlogPostForm';
import { BlogPost } from '../types/blog';
import { useNavigate } from 'react-router-dom';

export function BlogAdmin() {
  const navigate = useNavigate();

  const handleSubmit = async (post: Omit<BlogPost, 'id' | 'publishedAt'>) => {
    try {
      // Aqui você implementaria a lógica para salvar o post
      // Por exemplo, enviando para uma API
      console.log('Novo post:', post);
      
      // Redirecionar para a lista de posts após salvar
      navigate('/blog');
    } catch (error) {
      console.error('Erro ao salvar post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Criar Novo Post
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Compartilhe seu conhecimento sobre leilões de veículos
          </p>
        </div>
        
        <BlogPostForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
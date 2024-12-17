import React from 'react';
import { blogPosts } from '../../data/blogPosts';
import { BlogPostCard } from './BlogPostCard';

export function BlogList() {
  return (
    <div className="bg-white py-12" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog do Leilão
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Dicas, novidades e conhecimento sobre o mundo dos leilões de veículos
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
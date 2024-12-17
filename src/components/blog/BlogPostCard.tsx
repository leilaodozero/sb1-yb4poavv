import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/date';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:w-1/3">
        <img
          className="h-48 w-full object-cover md:h-full"
          src={post.imageUrl}
          alt={post.title}
        />
      </div>
      <div className="p-6 md:w-2/3">
        <div className="flex items-center mb-2">
          <img
            className="h-8 w-8 rounded-full"
            src={post.author.avatarUrl}
            alt={post.author.name}
          />
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Leia Mais
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
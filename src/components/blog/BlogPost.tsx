import React from 'react';
import { Facebook, Linkedin, Share2, MessageCircle } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../types/blog';
import { formatDate } from '../../utils/date';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const shareUrl = window.location.href;

  const shareOnSocial = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`,
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          <img
            className="h-12 w-12 rounded-full"
            src={post.author.avatarUrl}
            alt={post.author.name}
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
          </div>
        </div>
        <img
          className="w-full h-96 object-cover rounded-lg"
          src={post.imageUrl}
          alt={post.title}
        />
      </header>

      <div className="prose prose-blue max-w-none mb-8"
           dangerouslySetInnerHTML={{ __html: post.content }} />

      <footer className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => shareOnSocial('facebook')}
              className="text-gray-400 hover:text-blue-500"
              aria-label="Compartilhar no Facebook"
            >
              <Facebook className="h-5 w-5" />
            </button>
            <button
              onClick={() => shareOnSocial('linkedin')}
              className="text-gray-400 hover:text-blue-700"
              aria-label="Compartilhar no LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </button>
            <button
              onClick={() => shareOnSocial('whatsapp')}
              className="text-gray-400 hover:text-green-500"
              aria-label="Compartilhar no WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}
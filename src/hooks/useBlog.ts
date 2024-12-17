import { useState, useCallback } from 'react';
import { api } from '../services/api';
import { BlogPost } from '../types/blog';

export function useBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get('/posts');
      setPosts(response.data);
    } catch (err) {
      setError('Erro ao carregar posts');
    } finally {
      setLoading(false);
    }
  }, []);

  const createPost = useCallback(async (data: Omit<BlogPost, 'id' | 'publishedAt' | 'author'>) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post('/posts', data);
      setPosts((state) => [response.data, ...state]);
      return response.data;
    } catch (err) {
      setError('Erro ao criar post');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePost = useCallback(async (id: string, data: Partial<BlogPost>) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.put(`/posts/${id}`, data);
      setPosts((state) =>
        state.map((post) => (post.id === id ? response.data : post))
      );
      return response.data;
    } catch (err) {
      setError('Erro ao atualizar post');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deletePost = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await api.delete(`/posts/${id}`);
      setPosts((state) => state.filter((post) => post.id !== id));
    } catch (err) {
      setError('Erro ao deletar post');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };
}
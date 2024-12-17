export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  tags: string[];
}
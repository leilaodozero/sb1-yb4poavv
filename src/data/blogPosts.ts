import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como Avaliar o Estado Real de um Veículo em Leilão',
    excerpt: 'Aprenda as principais técnicas para avaliar veículos em leilão e evitar surpresas desagradáveis.',
    content: `
# Como Avaliar o Estado Real de um Veículo em Leilão

Comprar um veículo em leilão pode ser uma excelente oportunidade de negócio, mas requer conhecimento e atenção aos detalhes.

## Inspeção Visual

A primeira etapa é realizar uma inspeção visual detalhada do veículo. Procure por:

- Sinais de batida ou reparos anteriores
- Estado geral da pintura
- Alinhamento das portas e painéis
- Condição dos pneus e rodas

## Documentação

Verifique cuidadosamente:

- Histórico do veículo
- Documentação completa
- Débitos pendentes
- Histórico de manutenção

## Avaliação Mecânica

Sempre que possível, solicite:

- Laudo técnico independente
- Verificação do motor e câmbio
- Teste de sistemas elétricos
- Análise de suspensão e freios
    `,
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    publishedAt: '2024-03-20',
    author: {
      name: 'Ricardo Silva',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    tags: ['Dicas', 'Avaliação', 'Inspeção'],
  },
  {
    id: '2',
    title: 'Os 5 Erros Mais Comuns em Leilões de Veículos',
    excerpt: 'Descubra os principais erros cometidos por compradores iniciantes e como evitá-los.',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    content: '...',
    publishedAt: '2024-03-18',
    author: {
      name: 'Ana Costa',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    tags: ['Dicas', 'Iniciantes'],
  },
];
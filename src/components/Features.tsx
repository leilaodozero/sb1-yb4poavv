import React from 'react';
import { LineChart, History, Zap } from 'lucide-react';

const features = [
  {
    name: 'Integração com Tabela FIPE',
    description: 'Acesse dados atualizados em tempo real para tomar decisões precisas.',
    icon: LineChart,
  },
  {
    name: 'Histórico e Relatórios',
    description: 'Mantenha um registro completo de suas análises e cálculos anteriores.',
    icon: History,
  },
  {
    name: 'Decisões Rápidas',
    description: 'Interface intuitiva para análises ágeis durante os leilões.',
    icon: Zap,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefícios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tudo que você precisa para lucrar em leilões
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
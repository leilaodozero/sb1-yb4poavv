import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CalculationResult } from '../../types/calculator';

interface CalculationResultsProps {
  result: CalculationResult;
}

export function CalculationResults({ result }: CalculationResultsProps) {
  const { totalCost, potentialProfit, profitMargin } = result;
  const isProfit = potentialProfit > 0;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Resultados</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Custo Total</div>
          <div className="mt-1 text-xl sm:text-2xl font-semibold text-gray-900">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalCost)}
          </div>
        </div>

        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Lucro Potencial</div>
          <div className={`mt-1 text-xl sm:text-2xl font-semibold flex items-center ${
            isProfit ? 'text-green-600' : 'text-red-600'
          }`}>
            {isProfit ? <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> : <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Math.abs(potentialProfit))}
          </div>
        </div>

        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:col-span-2 lg:col-span-1">
          <div className="text-sm font-medium text-gray-500">Margem de Lucro</div>
          <div className={`mt-1 text-xl sm:text-2xl font-semibold flex items-center ${
            profitMargin >= 20 ? 'text-green-600' : profitMargin >= 10 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {profitMargin.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
}
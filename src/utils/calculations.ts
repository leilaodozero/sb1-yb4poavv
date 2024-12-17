import { CalculatorFormData, CalculationResult } from '../types/calculator';

export function calculateResults(data: CalculatorFormData): CalculationResult {
  const totalCost = data.purchasePrice + 
                   data.auctionFees + 
                   data.repairCosts + 
                   data.documentationCosts;
                   
  const potentialProfit = data.expectedSellingPrice - totalCost;
  const profitMargin = (potentialProfit / totalCost) * 100;

  return {
    totalCost,
    potentialProfit,
    profitMargin,
  };
}
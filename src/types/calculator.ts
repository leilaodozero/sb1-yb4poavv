export interface Vehicle {
  type: 'car' | 'motorcycle' | 'truck';
  make: string;
  model: string;
  year: string;
  fipePrice: number;
}

export interface CalculationResult {
  totalCost: number;
  potentialProfit: number;
  profitMargin: number;
}

export interface CalculatorFormData {
  vehicle: Vehicle;
  purchasePrice: number;
  auctionFees: number;
  repairCosts: number;
  documentationCosts: number; // Added documentation costs
  expectedSellingPrice: number;
}
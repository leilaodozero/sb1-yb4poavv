import { CalculatorFormData } from '../types/calculator';

export interface ValidationError {
  field: string;
  message: string;
}

export function validateCalculatorForm(data: CalculatorFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (data.purchasePrice <= 0) {
    errors.push({
      field: 'purchasePrice',
      message: 'O preço de compra deve ser maior que zero',
    });
  }

  if (data.auctionFees < 0) {
    errors.push({
      field: 'auctionFees',
      message: 'As taxas do leilão não podem ser negativas',
    });
  }

  if (data.repairCosts < 0) {
    errors.push({
      field: 'repairCosts',
      message: 'Os custos de reparo não podem ser negativos',
    });
  }

  if (data.documentationCosts < 0) {
    errors.push({
      field: 'documentationCosts',
      message: 'Os custos de documentação não podem ser negativos',
    });
  }

  if (data.expectedSellingPrice <= 0) {
    errors.push({
      field: 'expectedSellingPrice',
      message: 'O preço de venda esperado deve ser maior que zero',
    });
  }

  return errors;
}
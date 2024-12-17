import React from 'react';
import { Vehicle, CalculatorFormData } from '../../types/calculator';
import { useCalculatorForm } from '../../hooks/useCalculatorForm';
import { validateCalculatorForm } from '../../utils/validation';
import { CostInputs } from './CostInputs';

interface CostFormProps {
  onCalculate: (data: CalculatorFormData) => void;
  selectedVehicle?: Vehicle;
}

export function CostForm({ onCalculate, selectedVehicle }: CostFormProps) {
  const {
    purchasePrice,
    setPurchasePrice,
    auctionFees,
    setAuctionFees,
    repairCosts,
    setRepairCosts,
    documentationCosts,
    setDocumentationCosts,
    expectedSellingPrice,
    setExpectedSellingPrice,
    getFormData,
  } = useCalculatorForm(selectedVehicle);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = getFormData();
    
    if (formData) {
      const errors = validateCalculatorForm(formData);
      if (errors.length === 0) {
        onCalculate(formData);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Custos e Preços</h3>
      
      <CostInputs
        purchasePrice={purchasePrice}
        auctionFees={auctionFees}
        repairCosts={repairCosts}
        documentationCosts={documentationCosts}
        expectedSellingPrice={expectedSellingPrice}
        onPurchasePriceChange={setPurchasePrice}
        onAuctionFeesChange={setAuctionFees}
        onRepairCostsChange={setRepairCosts}
        onDocumentationCostsChange={setDocumentationCosts}
        onExpectedSellingPriceChange={setExpectedSellingPrice}
      />

      <div className="pt-4">
        <button
          type="submit"
          disabled={!selectedVehicle}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Calcular Lucro
        </button>
      </div>
    </form>
  );
}
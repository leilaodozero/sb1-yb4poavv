import { useState, useEffect } from 'react';
import { Vehicle, CalculatorFormData } from '../types/calculator';

export function useCalculatorForm(selectedVehicle?: Vehicle) {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [auctionFees, setAuctionFees] = useState(0);
  const [repairCosts, setRepairCosts] = useState(0);
  const [documentationCosts, setDocumentationCosts] = useState(0); // Added state
  const [expectedSellingPrice, setExpectedSellingPrice] = useState(0);

  useEffect(() => {
    if (selectedVehicle) {
      setExpectedSellingPrice(selectedVehicle.fipePrice);
    }
  }, [selectedVehicle]);

  const getFormData = (): CalculatorFormData | null => {
    if (!selectedVehicle) return null;

    return {
      vehicle: selectedVehicle,
      purchasePrice,
      auctionFees,
      repairCosts,
      documentationCosts, // Added to form data
      expectedSellingPrice,
    };
  };

  return {
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
  };
}
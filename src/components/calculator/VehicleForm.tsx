import React from 'react';
import { Vehicle } from '../../types/calculator';
import { useFipeData } from '../../hooks/useFipeData';
import { VehicleTypeSelector } from './VehicleTypeSelector';
import { VehicleDetails } from './VehicleDetails';

interface VehicleFormProps {
  onVehicleSelect: (vehicle: Vehicle) => void;
}

export function VehicleForm({ onVehicleSelect }: VehicleFormProps) {
  const {
    selectedType,
    setSelectedType,
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedYear,
    setSelectedYear,
    brands,
    models,
    years,
    price,
    loading,
    error,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
  } = useFipeData(onVehicleSelect);

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Informações do Veículo</h3>
      
      <VehicleTypeSelector
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      <VehicleDetails
        brands={brands}
        models={models}
        years={years}
        price={price}
        loading={loading}
        error={error}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedYear={selectedYear}
        onBrandChange={handleBrandChange}
        onModelChange={handleModelChange}
        onYearChange={handleYearChange}
      />
    </div>
  );
}
import React, { useState } from 'react';
import { VehicleForm } from './VehicleForm';
import { CostForm } from './CostForm';
import { CalculationResults } from './CalculationResults';
import { CalculatorFormData, CalculationResult, Vehicle } from '../../types/calculator';
import { calculateResults } from '../../utils/calculations';

export function Calculator() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>();
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCalculate = (data: CalculatorFormData) => {
    const results = calculateResults(data);
    setCalculationResult(results);
  };

  return (
    <div className="py-8 sm:py-12 bg-gray-50" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            Calculadora de Lucro
          </h2>
          <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 lg:text-xl">
            Calcule seus custos e potencial de lucro em leilões de veículos
          </p>
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <VehicleForm onVehicleSelect={handleVehicleSelect} />
            </div>
            <div className="p-4 sm:p-6 lg:p-8">
              <CostForm 
                onCalculate={handleCalculate}
                selectedVehicle={selectedVehicle}
              />
            </div>
          </div>
          {calculationResult && (
            <div className="border-t border-gray-200">
              <CalculationResults result={calculationResult} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
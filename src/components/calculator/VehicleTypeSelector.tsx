import React from 'react';
import { Car, Truck, Bike } from 'lucide-react';
import { Vehicle } from '../../types/calculator';

interface VehicleType {
  type: Vehicle['type'];
  icon: typeof Car;
  label: string;
}

const vehicleTypes: VehicleType[] = [
  { type: 'car', icon: Car, label: 'Carro' },
  { type: 'motorcycle', icon: Bike, label: 'Moto' },
  { type: 'truck', icon: Truck, label: 'Caminhão' },
];

interface VehicleTypeSelectorProps {
  selectedType: Vehicle['type'];
  onTypeChange: (type: Vehicle['type']) => void;
}

export function VehicleTypeSelector({ selectedType, onTypeChange }: VehicleTypeSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {vehicleTypes.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`p-4 rounded-lg border ${
            selectedType === type
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-gray-300'
          } flex flex-col items-center justify-center space-y-2`}
        >
          <Icon className="h-6 w-6" />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}
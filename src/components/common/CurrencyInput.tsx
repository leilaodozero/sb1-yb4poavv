import React from 'react';
import { formatCurrencyInput } from '../../utils/currency';

interface CurrencyInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  className?: string;
}

export function CurrencyInput({
  id,
  value,
  onChange,
  placeholder = 'R$ 0,00',
  className = '',
}: CurrencyInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, '');
    const numericValue = Number(rawValue) / 100;
    onChange(numericValue);
  };

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm">R$</span>
      </div>
      <input
        type="text"
        id={id}
        value={formatCurrencyInput(value.toString())}
        onChange={handleChange}
        className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
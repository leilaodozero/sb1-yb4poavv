import React from 'react';
import { Select } from '../common/Select';
import { FipeBrand, FipeModel, FipeYear, FipePrice } from '../../services/fipeApi';
import { formatCurrency } from '../../utils/currency';

interface VehicleDetailsProps {
  brands: FipeBrand[];
  models: FipeModel[];
  years: FipeYear[];
  price: FipePrice | null;
  loading: boolean;
  error: string | null;
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  onBrandChange: (brandCode: string) => void;
  onModelChange: (modelCode: string) => void;
  onYearChange: (yearCode: string) => void;
}

export function VehicleDetails({
  brands,
  models,
  years,
  price,
  loading,
  error,
  selectedBrand,
  selectedModel,
  selectedYear,
  onBrandChange,
  onModelChange,
  onYearChange,
}: VehicleDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="make" className="block text-sm font-medium text-gray-700">
          Marca
        </label>
        <Select
          id="make"
          value={selectedBrand}
          onChange={onBrandChange}
          options={Array.isArray(brands) ? brands.map((brand) => ({
            value: brand.codigo,
            label: brand.nome,
          })) : []}
          placeholder="Selecione a marca"
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
          Modelo
        </label>
        <Select
          id="model"
          value={selectedModel}
          onChange={onModelChange}
          options={Array.isArray(models) ? models.map((model) => ({
            value: model.codigo,
            label: model.nome,
          })) : []}
          placeholder="Selecione o modelo"
          disabled={!selectedBrand || loading}
        />
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          Ano
        </label>
        <Select
          id="year"
          value={selectedYear}
          onChange={onYearChange}
          options={Array.isArray(years) ? years.map((year) => ({
            value: year.codigo,
            label: year.nome,
          })) : []}
          placeholder="Selecione o ano"
          disabled={!selectedModel || loading}
        />
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Valor FIPE:</span>
          <span className="text-lg font-semibold text-gray-900">
            {price ? formatCurrency(Number(price.Valor.replace(/[^\d]/g, '')) / 100) : 'R$ 0,00'}
          </span>
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}
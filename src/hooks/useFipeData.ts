import { useState, useEffect } from 'react';
import { Vehicle } from '../types/calculator';
import {
  FipeBrand,
  FipeModel,
  FipeYear,
  FipePrice,
  fetchBrands,
  fetchModels,
  fetchYears,
  fetchPrice,
} from '../services/fipeApi';

export function useFipeData(onVehicleSelect: (vehicle: Vehicle) => void) {
  const [selectedType, setSelectedType] = useState<Vehicle['type']>('car');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  const [brands, setBrands] = useState<FipeBrand[]>([]);
  const [models, setModels] = useState<FipeModel[]>([]);
  const [years, setYears] = useState<FipeYear[]>([]);
  const [price, setPrice] = useState<FipePrice | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load brands when vehicle type changes
  useEffect(() => {
    const loadBrands = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBrands(selectedType);
        setBrands(data);
        // Reset selections when type changes
        setSelectedBrand('');
        setSelectedModel('');
        setSelectedYear('');
        setModels([]);
        setYears([]);
        setPrice(null);
      } catch (err) {
        setError('Erro ao carregar marcas');
        setBrands([]);
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, [selectedType]);

  const handleBrandChange = async (brandCode: string) => {
    try {
      setSelectedBrand(brandCode);
      setSelectedModel('');
      setSelectedYear('');
      setYears([]);
      setPrice(null);
      
      if (brandCode) {
        setLoading(true);
        setError(null);
        const data = await fetchModels(selectedType, brandCode);
        setModels(data);
      } else {
        setModels([]);
      }
    } catch (err) {
      setError('Erro ao carregar modelos');
      setModels([]);
    } finally {
      setLoading(false);
    }
  };

  const handleModelChange = async (modelCode: string) => {
    try {
      setSelectedModel(modelCode);
      setSelectedYear('');
      setPrice(null);
      
      if (selectedBrand && modelCode) {
        setLoading(true);
        setError(null);
        const data = await fetchYears(selectedType, selectedBrand, modelCode);
        setYears(data);
      } else {
        setYears([]);
      }
    } catch (err) {
      setError('Erro ao carregar anos');
      setYears([]);
    } finally {
      setLoading(false);
    }
  };

  const handleYearChange = async (yearCode: string) => {
    try {
      setSelectedYear(yearCode);
      
      if (selectedBrand && selectedModel && yearCode) {
        setLoading(true);
        setError(null);
        const data = await fetchPrice(selectedType, selectedBrand, selectedModel, yearCode);
        setPrice(data);
        
        if (data) {
          const fipePrice = Number(data.Valor.replace(/[^\d]/g, '')) / 100;
          onVehicleSelect({
            type: selectedType,
            make: data.Marca,
            model: data.Modelo,
            year: yearCode,
            fipePrice,
          });
        }
      } else {
        setPrice(null);
      }
    } catch (err) {
      setError('Erro ao carregar preço');
      setPrice(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    selectedType,
    setSelectedType,
    selectedBrand,
    selectedModel,
    selectedYear,
    brands,
    models,
    years,
    price,
    loading,
    error,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
  };
}
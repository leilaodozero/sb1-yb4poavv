import { Vehicle } from '../types/calculator';

const FIPE_BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

export interface FipeBrand {
  codigo: string;
  nome: string;
}

export interface FipeModel {
  codigo: string;
  nome: string;
}

export interface FipeYear {
  codigo: string;
  nome: string;
}

export interface FipePrice {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  TipoVeiculo: number;
  SiglaCombustivel: string;
}

const vehicleTypeMap = {
  car: 'carros',
  motorcycle: 'motos',
  truck: 'caminhoes',
};

export async function fetchBrands(type: Vehicle['type']): Promise<FipeBrand[]> {
  const response = await fetch(`${FIPE_BASE_URL}/${vehicleTypeMap[type]}/marcas`);
  return response.json();
}

export async function fetchModels(type: Vehicle['type'], brandCode: string): Promise<FipeModel[]> {
  const response = await fetch(
    `${FIPE_BASE_URL}/${vehicleTypeMap[type]}/marcas/${brandCode}/modelos`
  );
  const data = await response.json();
  return data.modelos;
}

export async function fetchYears(
  type: Vehicle['type'],
  brandCode: string,
  modelCode: string
): Promise<FipeYear[]> {
  const response = await fetch(
    `${FIPE_BASE_URL}/${vehicleTypeMap[type]}/marcas/${brandCode}/modelos/${modelCode}/anos`
  );
  return response.json();
}

export async function fetchPrice(
  type: Vehicle['type'],
  brandCode: string,
  modelCode: string,
  yearCode: string
): Promise<FipePrice> {
  const response = await fetch(
    `${FIPE_BASE_URL}/${vehicleTypeMap[type]}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`
  );
  return response.json();
}
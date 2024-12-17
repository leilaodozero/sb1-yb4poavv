import React from 'react';
import { CurrencyInput } from '../common/CurrencyInput';
import { InfoIcon } from '../common/InfoIcon';

interface CostInputsProps {
  purchasePrice: number;
  auctionFees: number;
  repairCosts: number;
  documentationCosts: number;
  expectedSellingPrice: number;
  onPurchasePriceChange: (value: number) => void;
  onAuctionFeesChange: (value: number) => void;
  onRepairCostsChange: (value: number) => void;
  onDocumentationCostsChange: (value: number) => void;
  onExpectedSellingPriceChange: (value: number) => void;
}

export function CostInputs({
  purchasePrice,
  auctionFees,
  repairCosts,
  documentationCosts,
  expectedSellingPrice,
  onPurchasePriceChange,
  onAuctionFeesChange,
  onRepairCostsChange,
  onDocumentationCostsChange,
  onExpectedSellingPriceChange,
}: CostInputsProps) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700 mb-1">
          Preço de Compra
        </label>
        <CurrencyInput
          id="purchasePrice"
          value={purchasePrice}
          onChange={onPurchasePriceChange}
          className="sm:text-base"
        />
      </div>

      <div>
        <label htmlFor="auctionFees" className="block text-sm font-medium text-gray-700 mb-1">
          Taxas do Leilão
        </label>
        <CurrencyInput
          id="auctionFees"
          value={auctionFees}
          onChange={onAuctionFeesChange}
          className="sm:text-base"
        />
      </div>

      <div>
        <label htmlFor="repairCosts" className="block text-sm font-medium text-gray-700 mb-1">
          Custos de Reparos
        </label>
        <CurrencyInput
          id="repairCosts"
          value={repairCosts}
          onChange={onRepairCostsChange}
          className="sm:text-base"
        />
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-1">
          <label htmlFor="documentationCosts" className="block text-sm font-medium text-gray-700">
            Custos de Documentação
          </label>
          <InfoIcon tooltip="Inclui despesas com transferência, vistoria, lacração de placas e regularização" />
        </div>
        <CurrencyInput
          id="documentationCosts"
          value={documentationCosts}
          onChange={onDocumentationCostsChange}
          className="sm:text-base"
        />
      </div>

      <div>
        <label htmlFor="expectedPrice" className="block text-sm font-medium text-gray-700 mb-1">
          Preço de Venda Esperado
        </label>
        <CurrencyInput
          id="expectedPrice"
          value={expectedSellingPrice}
          onChange={onExpectedSellingPriceChange}
          className="sm:text-base"
        />
      </div>
    </div>
  );
}
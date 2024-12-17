export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function parseCurrencyInput(value: string): number {
  return Number(value.replace(/[^\d]/g, '')) / 100;
}

export function formatCurrencyInput(value: string): string {
  const number = Number(value);
  if (isNaN(number)) return '';
  
  const formatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
  
  return formatted;
}
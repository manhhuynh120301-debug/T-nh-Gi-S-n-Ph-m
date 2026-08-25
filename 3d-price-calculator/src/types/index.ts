/**
 * @file types/index.ts
 * Core types and fixed constants for the simplified 3D Printing Price Calculator.
 */

// ==========================================
// FIXED CONSTANTS
// ==========================================
export const FILAMENT_PRICE_PER_GRAM = 150; // VND / gram
export const ELECTRICITY_COST_PER_KG = 4000; // VND / kg
export const MACHINE_COST_PER_HOUR = 2500; // VND / hour
export const RETAIL_PRICE_MULTIPLIER = 2.5; // Fixed multiplier x2.5
export const ALLOWED_DIFFERENCE = 500; // VND allowed difference for TikTok solver

// ==========================================
// DATA STRUCTURES
// ==========================================

export interface PrintingParams {
  filamentWeightGrams: number; // e.g. 64g
  printingTimeHours: number; // e.g. 4h
  quantity: number; // e.g. 1
}

export interface AdditionalCosts {
  packagingCost: number; // e.g. 0 VND
  otherCost: number; // e.g. 0 VND
}

export interface ProductionCostResult {
  materialCost: number; // Filament Weight * 150
  electricityCost: number; // (Filament Weight / 1000) * 4000
  machineCost: number; // Printing Hours * 2500
  additionalCost: number; // packagingCost + otherCost
  totalProductionCost: number; // sum of above
}

export type WholesaleTierId = 'retail' | 'wholesale_50' | 'wholesale_100';

export interface WholesaleTierInfo {
  id: WholesaleTierId;
  label: string;
  badgeLabel: string;
  rangeLabel: string;
  minQty: number;
  maxQty: number | null;
  discountPercent: number;
}

export interface PricingResult {
  productionCost: number;
  retailPrice: number;
  rawRetailPrice: number;
  unitRetailProfit: number;
  
  // Wholesale info
  activeTier: WholesaleTierId;
  tierName: string;
  discountPercent: number;
  applicableUnitPrice: number;
  orderTotal: number;
  unitProfit: number;
  totalOrderProfit: number;
}

export interface TikTokFeeSettings {
  transactionFeePercent: number; // Default 6%
  commissionFeePercent: number; // Default 4%
  voucherExtraType: 'percentage' | 'fixed' | 'disabled';
  voucherExtraValue: number; // e.g. 4.5% or fixed amount
  orderProcessingFee: number; // Fixed VND (default 0)
  sellerShippingFee: number; // Fixed VND (default 0)
  otherFee: number; // Fixed VND (default 0)
}

export interface TikTokResult {
  applicableTargetPrice: number;
  listingPrice: number;
  transactionFee: number;
  commissionFee: number;
  voucherExtraFee: number;
  orderProcessingFee: number;
  sellerShippingFee: number;
  otherFee: number;
  totalFees: number;
  estimatedNetReceived: number;
  difference: number;
  profitAfterFees: number;
  totalProfitAfterFees: number;
}

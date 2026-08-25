/**
 * @file components/RetailPricingSection.tsx
 * Section 4: Định giá & Báo giá khách hàng (Hệ số cố định x2.5).
 */

import React from 'react';
import { Tag, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { PricingResult } from '../types';
import { formatVND } from '../lib/formatters';

interface RetailPricingSectionProps {
  pricing: PricingResult;
}

export const RetailPricingSection: React.FC<RetailPricingSectionProps> = ({ pricing }) => {
  return (
    <section className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-lg shadow-black/40 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/30 flex items-center justify-center font-bold text-xs">
            4
          </div>
          <h2 className="text-sm sm:text-base font-bold text-slate-100 uppercase tracking-wide">
            Định giá & Báo giá khách hàng
          </h2>
        </div>
        <span className="text-[11px] text-teal-400 font-mono flex items-center gap-1 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Hệ số cố định: x2.5
        </span>
      </div>

      {/* Main Retail Price Hero Card */}
      <div className="bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-900 border border-cyan-500/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              Giá báo khách lẻ (1 sản phẩm)
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              Công thức: Giá vốn × 2.5
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Giá bán lẻ đề xuất cho khách mua lẻ (số lượng dưới 50 cái)
          </p>
        </div>

        <div className="text-left sm:text-right">
          <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-cyan-300">
            {formatVND(pricing.retailPrice)}
          </div>
          <div className="flex items-center gap-1.5 justify-start sm:justify-end text-xs font-mono text-emerald-400 font-bold mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Lợi nhuận: +{formatVND(pricing.unitRetailProfit)} / SP</span>
          </div>
        </div>
      </div>

      {/* 4 Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <span className="text-slate-400 block mb-1">Giá vốn 1 SP</span>
          <span className="font-mono font-bold text-slate-200 text-sm">
            {formatVND(pricing.productionCost)}
          </span>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <span className="text-slate-400 block mb-1">Hệ số định giá</span>
          <span className="font-mono font-bold text-cyan-300 text-sm">
            x2.5 (Cố định)
          </span>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <span className="text-slate-400 block mb-1">Giá báo khách lẻ</span>
          <span className="font-mono font-bold text-cyan-300 text-sm">
            {formatVND(pricing.retailPrice)}
          </span>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <span className="text-slate-400 block mb-1">Lợi nhuận dự kiến</span>
          <span className="font-mono font-bold text-emerald-400 text-sm">
            +{formatVND(pricing.unitRetailProfit)}
          </span>
        </div>
      </div>
    </section>
  );
};

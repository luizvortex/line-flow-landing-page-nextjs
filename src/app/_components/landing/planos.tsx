"use client";

import { useState } from "react";
import { Check, ShieldCheck, X } from "lucide-react";
import { GlassCard } from "./shared/glass-card";
import { EyebrowLabel } from "./shared/eyebrow-label";

export type PriceValue = number | null;

export interface Feature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: { monthly: PriceValue; annual: PriceValue };
  desc: string;
  cta: string;
  style: "outline" | "accent" | "primary";
  popular?: boolean;
  features: Feature[];
}

export function Planos({ initialPlans }: { initialPlans: Plan[] }) {
  const [annual, setAnnual] = useState(false);
  const plans = initialPlans;

  return (
    <section id="planos" className="bg-[#031926] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel>Preços transparentes</EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#e8f2f1]">
          Comece grátis. Cresça no seu ritmo.
        </h2>
        <p className="mt-4 text-[#8bb5b0] text-lg">
          Sem taxa de setup. Sem fidelidade. Cancele quando quiser.
        </p>

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <span
            className={`text-sm transition-colors ${
              !annual ? "text-[#e8f2f1]" : "text-[#8bb5b0]"
            }`}
          >
            Mensal
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 bg-[#072233] border border-[#255068] rounded-full p-0.5 transition-all hover:border-[#77aca2]/50"
            aria-label={annual ? "Mudar para mensal" : "Mudar para anual"}
            aria-pressed={annual}
          >
            <span
              className={`absolute top-0.5 w-6 h-6 rounded-full bg-[#77aca2] transition-transform duration-200 ease-out ${
                annual ? "translate-x-7" : "translate-x-0.5"
              }`}
            />
          </button>
          <span
            className={`text-sm transition-colors ${
              annual ? "text-[#e8f2f1]" : "text-[#8bb5b0]"
            }`}
          >
            Anual
          </span>
          <span className="bg-[#4ade80]/15 text-[#4ade80] text-xs px-2 py-0.5 rounded-full font-medium">
            2 meses grátis
          </span>
        </div>

        {/* Plans grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan) => (
            <div key={plan.id} className="relative h-full">
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-[#77aca2] text-[#031926] text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase whitespace-nowrap">
                    Mais popular
                  </span>
                </div>
              )}
              <div
                className={`h-full ${
                  plan.popular
                    ? "rounded-2xl border-2 border-[#77aca2]/50 shadow-[0_0_40px_rgba(119,172,162,.12)] ring-1 ring-[#77aca2]/20"
                    : ""
                }`}
              >
                <GlassCard
                  className={`p-8 flex flex-col h-full ${
                    plan.popular ? "border-0 rounded-[14px]" : ""
                  }`}
                >
                  <span className="bg-[rgba(119,172,162,0.15)] text-[#77aca2] text-xs px-2.5 py-1 rounded-full font-medium w-fit">
                    {plan.name}
                  </span>
                  <h3 className="text-xl font-bold text-[#e8f2f1] mt-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    {plan.price.monthly !== null ? (
                      <>
                        <span className="font-mono font-bold text-4xl text-[#e8f2f1]">
                          R${annual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="text-[#4d7a80] text-sm">/mês</span>
                      </>
                    ) : (
                      <span className="text-xl font-semibold text-[#e8f2f1]">
                        Sob consulta
                      </span>
                    )}
                  </div>
                  <p className="text-[#8bb5b0] text-sm mt-3">{plan.desc}</p>

                  <div className="my-6 border-t border-[#1a3d52]" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        {f.included ? (
                          <Check
                            size={14}
                            strokeWidth={2.5}
                            className="text-[#4ade80] shrink-0 mt-0.5"
                          />
                        ) : (
                          <X
                            size={14}
                            strokeWidth={2}
                            className="text-[#4d7a80]/40 shrink-0 mt-0.5"
                          />
                        )}
                        <span
                          className={`text-sm ${
                            f.included ? "text-[#8bb5b0]" : "text-[#4d7a80]"
                          }`}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://lineflow.mpdev.pro.br"
                    className={`mt-8 block text-center py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                      plan.style === "primary"
                        ? "bg-[#77aca2] hover:bg-[#5d9990] text-[#031926] font-bold py-3.5 shadow-[0_0_24px_rgba(119,172,162,.30)] hover:shadow-[0_0_36px_rgba(119,172,162,.40)]"
                        : plan.style === "accent"
                        ? "bg-[rgba(119,172,162,0.15)] hover:bg-[rgba(119,172,162,0.25)] text-[#77aca2] border border-[#77aca2]/30"
                        : "border border-[#255068] hover:border-[#77aca2] text-[#8bb5b0] hover:text-[#e8f2f1]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[#4d7a80] text-xs">
          <ShieldCheck size={16} strokeWidth={1.5} />
          <span>
            30 dias de garantia · Cancele quando quiser · Sem taxa de
            cancelamento
          </span>
        </div>
      </div>
    </section>
  );
}

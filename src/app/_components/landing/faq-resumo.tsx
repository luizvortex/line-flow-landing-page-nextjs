"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

/**
 * FAQ curto da página de anúncio: só as objeções que seguram o cadastro.
 * A lista completa segue no `FAQ` usado em /barbearias.
 */
const faqs = [
  {
    q: "Meu cliente precisa baixar algum aplicativo?",
    a: "Não. Ele escaneia o QR Code ou abre o link da sua empresa no celular e já entra na fila ou marca o horário. Se quiser, pode adicionar o app à tela inicial, sem passar pela loja.",
  },
  {
    q: "Funciona com fila e com horário marcado?",
    a: "Sim. Cada fila funciona por ordem de chegada ou com hora marcada, e dá para ter as duas no mesmo negócio — corte por ordem de chegada e coloração com horário, por exemplo. O agendamento está disponível a partir do plano Starter.",
  },
  {
    q: "Quanto tempo leva para começar a usar?",
    a: "Poucos minutos. Você cria a conta da empresa numa tela só, cadastra seus serviços e já tem o QR Code e o link para divulgar aos clientes.",
  },
  {
    q: "Preciso de cartão de crédito para testar?",
    a: "Não. O plano Free não pede cartão e, nos primeiros 14 dias, você usa os recursos do Pro para testar tudo antes de decidir.",
  },
  {
    q: "Tem integração com WhatsApp?",
    a: "Tem. A partir do Starter o cliente entra na fila e marca horário pelo WhatsApp, e no Pro e no Pro Plus as mensagens saem do número da sua empresa.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Pode. Não tem fidelidade nem taxa de cancelamento. Depois de cancelar, você continua com acesso por 30 dias e pode exportar seus dados.",
  },
];

export function FaqResumo() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl md:text-[44px] font-bold tracking-tight leading-[1.1] text-lf-primary">
            Perguntas <span className="text-lf-accent">frequentes</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-lf-secondary max-w-sm">
            O que todo dono de negócio pergunta antes de começar.
          </p>
          <a
            href={SIGNUP_URL}
            className="mt-8 hidden lg:inline-flex items-center gap-2 rounded-xl bg-lf-accent hover:bg-lf-accent-hover text-lf-base font-bold px-6 py-3.5 text-[15px] transition-all duration-200 hover:-translate-y-0.5"
          >
            Criar conta grátis
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen ? "border-lf-border-strong bg-lf-card" : "border-lf-border bg-lf-card/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-resposta-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-[15px] md:text-base font-semibold text-lf-primary">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 shrink-0 rounded-full grid place-items-center transition-all duration-200 ${
                      isOpen ? "bg-lf-accent text-lf-base rotate-45" : "bg-lf-accent/15 text-lf-accent"
                    }`}
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </span>
                </button>
                {/* grid-rows 0fr → 1fr anima a altura sem medir o conteúdo */}
                <div
                  id={`faq-resposta-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 text-[15px] leading-relaxed text-lf-secondary">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

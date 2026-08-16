"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EyebrowLabel } from "./shared/eyebrow-label";

const faqs = [
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. O LineFlow funciona 100% no navegador, tanto para você (dashboard) quanto para seus clientes (fila). No celular, o cliente pode adicionar à tela inicial como um app — sem passar pela App Store.",
  },
  {
    q: "Meu cliente precisa criar uma conta para entrar na fila?",
    a: "Não. Ele escaneia o QR Code, informa o nome e já está na fila. Simples como receber uma senha de papel — só que no celular.",
  },
  {
    q: "Funciona sem internet estável?",
    a: "O dashboard precisa de internet. O cliente também precisa para entrar na fila e receber o número. Recomendamos disponibilizar Wi-Fi na espera para melhor experiência.",
  },
  {
    q: "Posso usar no celular também (como atendente)?",
    a: "Sim. O dashboard é responsivo e funciona em qualquer smartphone. O atendente pode chamar o próximo e gerenciar a fila direto do celular.",
  },
  {
    q: "Como funciona a notificação push?",
    a: "Quando faltam 2 posições, o celular do cliente vibra com uma notificação nativa. Ele precisa autorizar no primeiro acesso. Não depende de app instalado — funciona via PWA no Android e iOS.",
  },
  {
    q: "Posso ter filas diferentes para serviços diferentes?",
    a: "Sim. Cada fila — Corte, Barba, Manicure, Consulta Geral — tem seu QR Code, tempo estimado e operador responsável. A quantidade depende do plano: 1 fila no Free, 3 no Starter, 25 no Pro e 50 no Pro Plus.",
  },
  {
    q: "Dá para trabalhar com hora marcada em vez de fila?",
    a: "Sim. Cada fila tem seu modo: por ordem de chegada ou por horário marcado. Você configura fila a fila, então dá para ter Corte por ordem de chegada e Coloração com hora marcada no mesmo negócio. Disponível a partir do plano Starter.",
  },
  {
    q: "Quem marcou horário corre o risco de perder a vez?",
    a: "Não. No modo de horário marcado o cliente é chamado quando a hora dele chega — não existe senha por ordem de chegada disputando a mesma vaga. Ele ainda recebe um lembrete automático antes do horário.",
  },
  {
    q: "O que acontece se cancelar? Perco os dados?",
    a: "Você continua com acesso por 30 dias após o cancelamento e pode exportar todos os dados em CSV. Sem dados perdidos.",
  },
  {
    q: "Tem integração com WhatsApp ou iFood?",
    a: "Com WhatsApp, sim: a partir do plano Starter o cliente entra na fila direto pelo WhatsApp, e nos planos Pro e Pro Plus o atendimento sai do número próprio da sua empresa. Integração com iFood ainda não existe nativamente — está no roadmap.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#072233]/30 py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <EyebrowLabel>Dúvidas frequentes</EyebrowLabel>
        <h2 className="mt-3 text-3xl font-bold text-[#e8f2f1]">
          Tudo que você queria saber
        </h2>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#1a3d52]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full py-5 flex justify-between items-center cursor-pointer group text-left gap-4"
              >
                <span className="text-[#e8f2f1] font-medium text-[15px] group-hover:text-[#77aca2] transition-colors duration-150">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`text-[#4d7a80] shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-[#77aca2]" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  open === i ? "max-h-56 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#8bb5b0] text-[15px] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

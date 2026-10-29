import Image from "next/image";
import { StackCards } from "./shared/stack-cards";
import {
  Bell,
  CalendarCheck,
  Gift,
  Heart,
  ListOrdered,
  MessageCircle,
  Repeat,
  Tv,
  type LucideIcon,
} from "lucide-react";

/**
 * Grade de benefícios no modelo do Spoke: os cards largos são uma foto de
 * cenário com um pedaço real da interface flutuando por cima; os estreitos
 * são claros, com a interface desenhada limpa. O texto fica sempre embaixo à
 * esquerda e nenhum card tem botão próprio.
 */

/** Fundo dos cards claros (o "azul-clarinho" do Spoke, no verde da marca). */
const LIGHT = "bg-[#dcefea]";

function CardTitle({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <h3
      className={`relative text-[22px] md:text-[24px] font-semibold tracking-tight leading-[1.15] max-w-[320px] ${
        light ? "text-lf-base" : "text-white"
      }`}
    >
      {children}
    </h3>
  );
}

/** Card largo: foto de cenário, degradê para o texto e a interface por cima. */
function PhotoCard({
  src,
  alt,
  title,
  overlay,
}: {
  src: string;
  alt: string;
  title: string;
  overlay: React.ReactNode;
}) {
  return (
    <article className="relative min-h-[420px] md:min-h-[360px] rounded-[24px] overflow-hidden flex flex-col justify-end p-7 md:p-8">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 760px"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
      />
      <div className="absolute right-5 top-5 md:right-8 md:top-8 w-[230px] md:w-[260px]">
        {overlay}
      </div>
      <CardTitle>{title}</CardTitle>
    </article>
  );
}

/** Card estreito e claro: a interface limpa em cima, o texto escuro embaixo. */
function LightCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article
      className={`lf-dark ${LIGHT} min-h-[340px] md:min-h-[360px] rounded-[24px] overflow-hidden flex flex-col justify-between p-7 md:p-8`}
    >
      <div className="flex-1 flex items-center justify-center pb-6">{children}</div>
      <CardTitle light>{title}</CardTitle>
    </article>
  );
}

/** Pedaço de interface flutuando sobre a foto, no visual escuro do app. */
function UiCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="lf-app rounded-2xl border border-lf-border bg-lf-card/95 backdrop-blur p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
      {children}
    </div>
  );
}

const queue = [
  { pos: "#012", name: "Rafael M.", status: "Em atendimento", now: true },
  { pos: "#013", name: "Ana Costa", status: "~5 min" },
  { pos: "#014", name: "Carlos L.", status: "~12 min" },
  { pos: "#015", name: "Você", status: "~22 min", you: true },
];

const commissions = [
  { name: "Bruno", value: "R$ 294", pct: 82 },
  { name: "Léo", value: "R$ 252", pct: 70 },
  { name: "Rafa", value: "R$ 189", pct: 52 },
];

const smallFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Tv, title: "Painel de TV", desc: "A senha chamada aparece na TV da espera." },
  { icon: Gift, title: "Fidelidade", desc: "Cada atendimento vira um selo no cartão." },
  { icon: Repeat, title: "Lembrete de retorno", desc: "O cliente é lembrado de voltar no prazo." },
  { icon: MessageCircle, title: "Relatório no WhatsApp", desc: "O resumo da semana no seu celular." },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-[1.12] text-lf-primary max-w-3xl">
          Por ordem de chegada ou com hora marcada,{" "}
          <span className="text-lf-accent">seu cliente nunca fica esperando.</span>
        </h2>

        <div className="mt-12">
          <StackCards
            items={[
              {
                key: "fila",
                node: (
                  <LightCard title="Fila com senha no celular">
                    <div className="w-full max-w-[260px] space-y-1.5">
                      {queue.map((q) => (
                        <div
                          key={q.pos}
                          className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 ${
                            q.you
                              ? "bg-lf-base text-white shadow-[0_10px_24px_rgba(3,25,38,0.25)]"
                              : "bg-white/70 text-lf-base"
                          }`}
                        >
                          <span className={`font-mono text-xs font-bold ${q.you ? "text-lf-accent" : "text-[#468189]"}`}>
                            {q.pos}
                          </span>
                          <span className="text-[13px] font-medium flex-1 truncate">{q.name}</span>
                          <span
                            className={`text-[11px] ${
                              q.now ? "text-[#15803d] font-semibold" : q.you ? "text-white/70" : "text-lf-base/55"
                            }`}
                          >
                            {q.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </LightCard>
                ),
              },
              {
                key: "agenda",
                wide: true,
                node: (
                  <PhotoCard
                    src="/images/beneficios/barbearia.webp"
                    alt="Barbeiro cortando o cabelo de um cliente numa barbearia iluminada"
                    title="Agenda online com lembrete automático"
                    overlay={
                      <UiCard>
                        <div className="flex gap-3">
                          <span className="w-9 h-9 rounded-xl bg-lf-accent/15 grid place-items-center shrink-0">
                            <Bell size={16} className="text-lf-accent" />
                          </span>
                          <div>
                            <p className="text-[13px] font-semibold text-lf-primary">Barbearia Silva</p>
                            <p className="text-xs text-lf-secondary leading-snug mt-0.5">
                              Seu horário é amanhã, às <b className="text-lf-primary">10:30</b>. Te esperamos!
                            </p>
                          </div>
                        </div>
                      </UiCard>
                    }
                  />
                ),
              },
              {
                key: "marcar",
                wide: true,
                node: (
                  <PhotoCard
                    src="/images/beneficios/cliente-celular.webp"
                    alt="Cliente marcando horário pelo celular num café"
                    title="O cliente marca o horário pelo celular, sem ligar"
                    overlay={
                      <UiCard>
                        <p className="text-[11px] uppercase tracking-[0.12em] text-lf-muted font-medium">
                          Terça, 16
                        </p>
                        <div className="mt-2 grid grid-cols-3 gap-1.5">
                          {["09:30", "10:30", "11:00", "14:30", "15:00", "16:00"].map((t) => (
                            <span
                              key={t}
                              className={`rounded-lg py-1.5 text-center font-mono text-[11px] border ${
                                t === "10:30"
                                  ? "border-lf-accent bg-lf-accent/20 text-lf-accent font-bold"
                                  : "border-lf-border text-lf-secondary"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="mt-3 h-9 rounded-xl bg-lf-accent text-lf-base flex items-center justify-center gap-1.5 text-xs font-bold">
                          <CalendarCheck size={14} />
                          Confirmar 10:30
                        </span>
                      </UiCard>
                    }
                  />
                ),
              },
              {
                key: "comissao",
                node: (
                  <LightCard title="Comissão de cada profissional calculada sozinha">
                    <div className="w-full max-w-[260px] rounded-2xl bg-white/70 p-4">
                      <p className="text-[11px] font-semibold text-lf-base/60 uppercase tracking-[0.1em]">
                        Comissões de hoje
                      </p>
                      <div className="mt-3 space-y-3">
                        {commissions.map((c) => (
                          <div key={c.name}>
                            <div className="flex justify-between text-[13px] text-lf-base">
                              <span className="font-medium">{c.name}</span>
                              <span className="font-mono font-semibold">{c.value}</span>
                            </div>
                            <span className="mt-1.5 block h-1.5 rounded-full bg-lf-base/10 overflow-hidden">
                              <span className="block h-full rounded-full bg-[#468189]" style={{ width: `${c.pct}%` }} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </LightCard>
                ),
              },
              {
                key: "qrcode",
                node: (
                  <LightCard title="Sem app para baixar: é só apontar a câmera">
                    {/* QR Code de verdade: abre o Instagram do LineFlow. */}
                    <div className="rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(3,25,38,0.15)]">
                      <Image
                        src="/images/beneficios/qrcode-instagram.svg"
                        alt="QR Code que abre o Instagram do LineFlow"
                        width={168}
                        height={168}
                        unoptimized
                      />
                    </div>
                  </LightCard>
                ),
              },
              {
                key: "feed",
                wide: true,
                node: (
                  <PhotoCard
                    src="/images/beneficios/corte.webp"
                    alt="Corte degradê recém-feito, visto de trás, numa barbearia"
                    title="Seu trabalho no feed do cliente, com botão para entrar na fila"
                    overlay={
                      <UiCard>
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-lf-accent text-lf-base grid place-items-center text-[10px] font-bold">
                            BS
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-lf-primary">Barbearia Silva</p>
                            <p className="text-[10px] text-lf-muted">agora</p>
                          </div>
                        </div>
                        <p className="mt-2.5 text-xs text-lf-secondary leading-snug">
                          Degradê do dia ✂️ Horários livres hoje à tarde.
                        </p>
                        <div className="mt-2 flex items-center gap-1.5 text-[#e0683f]">
                          <Heart size={14} className="fill-current" />
                          <span className="text-[11px] font-semibold">48</span>
                        </div>
                        <span className="mt-2.5 h-9 rounded-xl bg-lf-accent text-lf-base flex items-center justify-center gap-1.5 text-xs font-bold">
                          <ListOrdered size={14} />
                          Entrar na fila
                        </span>
                      </UiCard>
                    }
                  />
                ),
              },
            ]}
          />
        </div>

        {/* Recursos menores, em linha — como no Spoke */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {smallFeatures.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <span className="w-9 h-9 rounded-lg bg-lf-accent/15 grid place-items-center">
                <Icon size={17} strokeWidth={1.75} className="text-lf-accent" />
              </span>
              <h3 className="mt-3 text-[15px] font-semibold text-lf-primary">{title}</h3>
              <p className="mt-0.5 text-sm leading-relaxed text-lf-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

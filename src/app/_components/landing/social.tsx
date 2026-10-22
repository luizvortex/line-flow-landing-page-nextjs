import {
  Bell,
  Bookmark,
  Compass,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Pin,
  Scissors,
  Sparkles,
  Star,
  User,
  type LucideIcon,
} from "lucide-react";
import { EyebrowLabel } from "./shared/eyebrow-label";
import { GlassCard } from "./shared/glass-card";
import { GradientDot } from "./shared/gradient-dot";
import { PhoneFrame } from "./shared/phone-frame";

/**
 * Novidade da plataforma: o app social do cliente (perfil da empresa, feed,
 * stories e Explorar). Os textos seguem o que o backend entrega hoje no
 * módulo `social` e no `/explore`.
 */

const stories = [
  { name: "Barbearia Silva", seen: false },
  { name: "Studio Bela", seen: false },
  { name: "Clínica Vida", seen: true },
  { name: "Spa Zen", seen: true },
];

const navItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Início", icon: Home, active: true },
  { label: "Explorar", icon: Compass },
  { label: "Mensagens", icon: MessageCircle },
  { label: "Perfil", icon: User },
  { label: "Mapa", icon: MapPin },
];

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: User,
    title: "Perfil com seguidores e publicações",
    desc: "Sua empresa ganha um perfil com bio, capa, fotos e vídeos. Fixe até 3 publicações no topo.",
  },
  {
    icon: Sparkles,
    title: "Stories com botão Reservar",
    desc: "Um story fica 24 h no ar e pode levar o cliente direto para marcar horário ou entrar na fila.",
  },
  {
    icon: Home,
    title: "Feed que mostra o que importa",
    desc: "O Início do cliente prioriza quem ele segue e visita, e sugere negócios novos para conhecer.",
  },
  {
    icon: Compass,
    title: "Explorar com fila curta e mapa",
    desc: "O cliente descobre negócios por categoria, vê quem está com fila curta agora e quem está aberto perto dele.",
  },
  {
    icon: Star,
    title: "Avaliações no perfil",
    desc: "As notas e comentários dos atendimentos aparecem no perfil. Você decide se mostra ou não.",
  },
];

function FeedPreview() {
  return (
    <PhoneFrame>
      {/* Topo do Início */}
      <div className="flex items-center justify-between px-5 pt-2 pb-3">
        <p className="text-base font-bold text-lf-primary">
          Line<span className="text-lf-accent">Flow</span>
        </p>
        <div className="relative">
          <Bell size={18} className="text-lf-secondary" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lf-accent" />
        </div>
      </div>

      {/* Fileira de stories */}
      <div className="flex gap-3 px-5 pb-3 border-b border-lf-border">
        {stories.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-1 w-[52px]">
            <div
              className={`p-[2px] rounded-full ${
                s.seen
                  ? "bg-lf-border"
                  : "bg-gradient-to-tr from-lf-accent-deep via-lf-accent to-[#c9e4df]"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-lf-card border-2 border-lf-base flex items-center justify-center text-[11px] font-bold text-lf-accent">
                {s.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
            </div>
            <span className="text-[9px] text-lf-secondary truncate w-full text-center">
              {s.name}
            </span>
          </div>
        ))}
      </div>

      {/* Publicação */}
      <div className="flex-1 min-h-0">
        <div className="flex items-center gap-2.5 px-5 py-2.5">
          <div className="w-8 h-8 rounded-full bg-lf-accent/15 flex items-center justify-center">
            <Scissors size={14} className="text-lf-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-lf-primary">
              Barbearia Silva
            </p>
            <p className="text-[10px] text-lf-muted">Centro · 1,2 km</p>
          </div>
          <Pin size={12} className="text-lf-muted" />
        </div>

        {/* Foto ilustrativa */}
        <div className="relative h-[230px] bg-gradient-to-br from-[#0f3450] via-[#1d5a63] to-[#77aca2] overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#c9e4df]/15" />
          <div className="absolute -left-8 bottom-6 w-32 h-32 rounded-full bg-lf-base/25" />
          <Scissors
            size={64}
            strokeWidth={1}
            className="absolute right-6 bottom-6 text-[#e8f2f1]/30"
          />
          <div className="absolute left-4 bottom-4">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#e8f2f1]/70">
              Novo serviço
            </p>
            <p className="text-lg font-bold text-[#e8f2f1] leading-tight">
              Degradê +<br />barba completa
            </p>
          </div>
        </div>

        <div className="px-5 pt-2.5">
          <div className="flex items-center gap-3.5 text-lf-primary">
            <Heart size={18} className="fill-[#f87171] text-[#f87171]" />
            <MessageCircle size={18} />
            <Bookmark size={18} className="ml-auto" />
          </div>
          <p className="mt-1.5 text-[11px] font-semibold text-lf-primary">
            128 curtidas
          </p>
          <p className="mt-0.5 text-[11px] text-lf-secondary leading-snug">
            <span className="font-semibold text-lf-primary">Barbearia Silva</span>{" "}
            Agora com combo de corte e barba. Agenda aberta para essa semana.
          </p>
        </div>
      </div>

      {/* Barra de navegação do app */}
      <div className="mx-3 mb-1 mt-2 rounded-2xl bg-lf-card/90 border border-lf-border flex justify-around py-2">
        {navItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-0.5 ${
              active ? "text-lf-accent" : "text-lf-muted"
            }`}
          >
            <Icon size={15} />
            <span className="text-[8px]">{label}</span>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

export function Social() {
  return (
    <section
      id="social"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      <GradientDot
        size={700}
        color="#77aca2"
        opacity={0.07}
        className="-left-40 top-10"
      />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <FeedPreview />
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <EyebrowLabel>App social</EyebrowLabel>
            <span className="text-[10px] uppercase tracking-widest bg-lf-accent text-lf-base px-2 py-0.5 rounded-full font-bold">
              Novo
            </span>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-lf-primary">
            Seu negócio no feed do cliente
          </h2>
          <p className="mt-4 text-lf-secondary text-lg leading-relaxed">
            O app do cliente virou uma rede social de negócios locais. Ele
            segue, curte, vê seus stories e marca horário sem sair do app.
          </p>

          <div className="mt-8 space-y-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <GlassCard key={title} as="article" className="p-4 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-lf-accent/15 flex items-center justify-center shrink-0">
                  <Icon size={16} strokeWidth={1.5} className="text-lf-accent" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-lf-primary">
                    {title}
                  </h3>
                  <p className="text-lf-secondary text-sm leading-relaxed mt-0.5">
                    {desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          <p className="mt-6 text-xs text-lf-muted">
            Todo negócio ganha o perfil. Publicar fotos e stories a partir do
            plano{" "}
            <a
              href="#planos"
              className="text-lf-accent hover:text-lf-accent-hover underline underline-offset-2 transition-colors"
            >
              Pro
            </a>
            ; vídeos no Pro Plus.
          </p>
        </div>
      </div>
    </section>
  );
}

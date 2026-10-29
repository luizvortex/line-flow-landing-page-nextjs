import {
  Bell,
  CalendarDays,
  Compass,
  Heart,
  Home,
  ListOrdered,
  MessageCircle,
  Plus,
  Scissors,
  Search,
  User,
  type LucideIcon,
} from "lucide-react";
import { PhoneFrame } from "./shared/phone-frame";
import { AppLogo } from "./shared/app-logo";

/**
 * Novidade da plataforma: o app social do cliente (perfil da empresa, feed,
 * stories e Explorar). Os textos seguem o que o backend entrega hoje no
 * módulo `social` e no `/explore`.
 */

/** Fileira do Início: o "Seu story" do dono e os stories de quem ele segue. */
const stories = [
  { name: "Studio Bela", seen: false },
  { name: "Clínica Vida", seen: false },
  { name: "Spa Zen", seen: true },
];

/** Mesmo degradê do anel de story no app (`--lf-anel-story`). */
const STORY_RING =
  "conic-gradient(from 210deg, #22c3d6, #0e7c96, #1fa98a, #5fe0c4, #22c3d6)";

/** Abas do app do cliente (`itensNavCliente` no PWA). */
const navItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Início", icon: Home, active: true },
  { label: "Explorar", icon: Compass },
  { label: "Mensagens", icon: MessageCircle },
  { label: "Perfil", icon: User },
];

/** Ondas do fundo do topo (o `FundoFlow` do app), sem a animação. */
const WAVES = Array.from({ length: 8 }, (_, i) => {
  const y = 40 + i * 26;
  let d = `M -195 ${y}`;
  for (let x = -195, up = true; x < 585; x += 97.5, up = !up) {
    d += ` Q ${x + 48.75} ${y + (up ? -22 : 22)} ${x + 97.5} ${y}`;
  }
  return { d, opacity: 1 - i * 0.1 };
});


function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function StoryAvatar({ name, seen }: { name: string; seen: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1 w-[58px] shrink-0">
      <span
        className="grid p-[2.5px] rounded-full w-[54px] h-[54px]"
        style={{ background: seen ? "var(--lf-border-strong)" : STORY_RING }}
      >
        <span className="grid place-items-center rounded-full border-[2.5px] border-lf-base bg-lf-accent text-lf-base text-sm font-extrabold">
          {initials(name)}
        </span>
      </span>
      <span className="text-[9.5px] text-lf-secondary truncate max-w-[58px]">
        {name}
      </span>
    </div>
  );
}

function PostCard({
  author,
  when,
  likes,
  caption,
  cta,
  children,
}: {
  author: string;
  when: string;
  likes: number;
  caption?: string;
  cta: "fila" | "agenda";
  children: React.ReactNode;
}) {
  return (
    <article className="mx-2.5 rounded-[20px] border border-lf-border bg-lf-card overflow-hidden">
      <header className="flex items-center gap-2 px-3 py-2.5">
        <span className="w-8 h-8 rounded-full bg-lf-accent text-lf-base grid place-items-center text-[11px] font-bold shrink-0">
          {initials(author)}
        </span>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-lf-primary truncate">
            {author}
          </p>
          <p className="text-[10px] text-lf-muted">{when}</p>
        </div>
      </header>

      <div className="mx-2 rounded-[15px] overflow-hidden bg-lf-elevated">
        {children}
      </div>

      <div className="flex items-center gap-1.5 px-3 pt-2 text-[#e0683f]">
        <Heart size={18} className="fill-current" />
        <span className="text-[11px] font-semibold">{likes}</span>
      </div>

      {caption && (
        <p className="mx-3 mt-0.5 text-[11px] leading-snug text-lf-secondary">
          <strong className="text-lf-primary">{author}</strong> {caption}
        </p>
      )}

      <div className="m-2.5">
        <span className="h-[38px] rounded-xl bg-lf-accent text-lf-base flex items-center justify-center gap-1.5 text-[12px] font-semibold">
          {cta === "fila" ? (
            <>
              <ListOrdered size={14} />
              Entrar na fila
            </>
          ) : (
            <>
              <CalendarDays size={14} />
              Agendar
            </>
          )}
        </span>
      </div>
    </article>
  );
}

export function FeedPreview() {
  return (
    <PhoneFrame>
      <div className="relative flex-1 min-h-0 overflow-hidden">
        {/* Fundo com as ondas do app */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[260px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 70% at 85% 0%, var(--lf-app-flow-1), transparent 60%), radial-gradient(90% 60% at 0% 20%, var(--lf-app-flow-2), transparent 65%)",
            }}
          />
          <svg
            viewBox="0 0 390 260"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
          >
            {WAVES.map((w) => (
              <path
                key={w.d}
                d={w.d}
                fill="none"
                stroke="var(--lf-app-flow-line)"
                strokeWidth={1.2}
                vectorEffect="non-scaling-stroke"
                style={{ opacity: w.opacity }}
              />
            ))}
          </svg>
        </div>

        <div className="relative">
          {/* Cabeçalho do app */}
          <div className="flex items-center justify-between px-4 h-12">
            <AppLogo size={15} />
            <span className="flex items-center gap-3 text-lf-primary">
              <Search size={18} />
              <span className="relative">
                <Bell size={18} />
                <span className="absolute -top-1 -right-1.5 min-w-[13px] h-[13px] px-0.5 rounded-full bg-lf-error text-white text-[8px] font-bold grid place-items-center border-[1.5px] border-lf-base">
                  2
                </span>
              </span>
            </span>
          </div>

          {/* Fileira de stories */}
          <div className="flex gap-2.5 px-4 pt-1 pb-3">
            <div className="flex flex-col items-center gap-1 w-[58px] shrink-0">
              <span className="relative w-[54px] h-[54px]">
                <span className="absolute inset-0 grid place-items-center rounded-full border-[2.5px] border-lf-base ring-[1.5px] ring-lf-border-strong bg-lf-accent text-lf-base text-sm font-extrabold">
                  BS
                </span>
                <span className="absolute -right-0.5 -bottom-0.5 w-5 h-5 rounded-full grid place-items-center bg-lf-accent text-lf-base border-2 border-lf-base">
                  <Plus size={11} strokeWidth={3} />
                </span>
              </span>
              <span className="text-[9.5px] text-lf-secondary">Seu story</span>
            </div>
            {stories.map((s) => (
              <StoryAvatar key={s.name} {...s} />
            ))}
          </div>

          {/* Feed */}
          <div className="flex flex-col gap-3">
            <PostCard
              author="Barbearia Silva"
              when="ontem"
              likes={24}
              caption="Combo corte + barba com horário livre hoje à tarde."
              cta="fila"
            >
              {/* Arte ilustrativa do post */}
              <div className="relative aspect-[1.6] bg-gradient-to-br from-[#06131c] via-[#0b2433] to-[#1d4a52] overflow-hidden">
                <div className="absolute -right-6 -top-10 w-40 h-40 rounded-full bg-[#77aca2]/20 blur-2xl" />
                <Scissors
                  size={70}
                  strokeWidth={1}
                  className="absolute right-4 bottom-3 text-[#e8f2f1]/25 -rotate-12"
                />
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#c9e4df]/70">
                    Estilo e tradição
                  </p>
                  <p className="text-[19px] font-extrabold leading-[1.05] text-[#e8f2f1] mt-0.5">
                    Barbearia
                    <br />
                    Silva
                  </p>
                  <p className="mt-1.5 inline-block text-[8px] font-semibold text-lf-base bg-lf-accent rounded-full px-2 py-0.5">
                    Corte + barba
                  </p>
                </div>
              </div>
            </PostCard>

            <PostCard author="Studio Bela" when="há 3 dias" likes={57} cta="agenda">
              <div className="aspect-[1.6] bg-gradient-to-br from-[#2a1f33] via-[#3b2c45] to-[#77aca2]/60" />
            </PostCard>
          </div>
        </div>

        {/* Barra de navegação flutuante (vidro) */}
        <div className="absolute inset-x-2.5 bottom-2 h-[54px] px-1.5 rounded-[22px] border border-white/10 bg-[var(--lf-app-glass)] backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.45)] flex items-center justify-around gap-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`flex-1 h-[44px] rounded-[16px] flex flex-col items-center justify-center gap-0.5 text-[9px] font-semibold ${
                active
                  ? "bg-lf-accent/15 text-lf-accent shadow-[inset_0_0_0_1px_rgba(119,172,162,0.3)]"
                  : "text-lf-muted"
              }`}
            >
              <Icon size={17} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

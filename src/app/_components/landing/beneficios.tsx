import {
  Bell,
  Gift,
  Heart,
  ListOrdered,
  MessageCircle,
  Repeat,
  Tv,
  type LucideIcon,
} from "lucide-react";

/**
 * Grade de benefícios no estilo do Spoke: cada card é uma frase grande e o
 * produto em ação, sem botão próprio — o único botão da página continua
 * sendo o "Criar conta grátis".
 */

/** QR Code ilustrativo: os três quadros de canto e um miolo fixo. */
const QR_SIZE = 21;
function qrCell(x: number, y: number): boolean {
  const finder = (fx: number, fy: number) => {
    const dx = x - fx;
    const dy = y - fy;
    if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return null;
    const ring = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
    return ring !== 2;
  };
  const f = finder(0, 0) ?? finder(QR_SIZE - 7, 0) ?? finder(0, QR_SIZE - 7);
  if (f !== null) return f;
  if ((x < 8 && y < 8) || (x > QR_SIZE - 9 && y < 8) || (x < 8 && y > QR_SIZE - 9)) {
    return false;
  }
  return ((x * 7 + y * 13 + x * y) % 5) < 2;
}

function QrCode() {
  return (
    <div
      className="grid gap-[2px] p-3 bg-white rounded-xl shadow-[0_20px_50px_rgba(3,25,38,0.25)]"
      style={{ gridTemplateColumns: `repeat(${QR_SIZE}, 7px)` }}
      aria-hidden="true"
    >
      {Array.from({ length: QR_SIZE * QR_SIZE }).map((_, i) => (
        <span
          key={i}
          className={`w-[7px] h-[7px] rounded-[1px] ${
            qrCell(i % QR_SIZE, Math.floor(i / QR_SIZE)) ? "bg-lf-base" : ""
          }`}
        />
      ))}
    </div>
  );
}

function CardText({
  title,
  desc,
  dark = true,
}: {
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <div>
      <h3
        className={`text-[26px] md:text-[30px] font-bold tracking-tight leading-[1.1] ${
          dark ? "text-lf-primary" : "text-lf-base"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-[15px] leading-relaxed max-w-md ${
          dark ? "text-lf-secondary" : "text-lf-base/70"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

const smallFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Tv,
    title: "Painel de TV",
    desc: "A senha chamada aparece na TV da sala de espera.",
  },
  {
    icon: Gift,
    title: "Fidelidade",
    desc: "Cada atendimento vira um selo no cartão do cliente.",
  },
  {
    icon: Repeat,
    title: "Lembrete de retorno",
    desc: "O cliente é lembrado de voltar no prazo de cada serviço.",
  },
  {
    icon: MessageCircle,
    title: "Relatório no WhatsApp",
    desc: "O resumo da semana chega no seu celular.",
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-[44px] font-bold tracking-tight leading-[1.1] text-lf-primary max-w-2xl">
          Menos fila na porta,{" "}
          <span className="text-lf-accent">mais cliente na cadeira.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Sem app — card claro, como o primeiro card do Spoke */}
          <article className="md:col-span-5 rounded-[28px] bg-gradient-to-br from-[#c6e6df] to-[#9fcfc5] p-8 md:p-10 min-h-[440px] flex flex-col justify-between overflow-hidden">
            <div className="flex justify-center pt-2">
              <div className="relative">
                <QrCode />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-lf-base text-lf-primary text-xs font-semibold px-3 py-1.5">
                  Aponte a câmera
                </span>
              </div>
            </div>
            <CardText
              dark={false}
              title="Sem app para baixar"
              desc="O cliente escaneia o QR Code e já está na fila, com a posição e a espera na tela."
            />
          </article>

          {/* Comissão e caixa — card escuro com o painel */}
          <article className="md:col-span-7 rounded-[28px] bg-lf-card border border-lf-border p-8 md:p-10 min-h-[440px] flex flex-col justify-between overflow-hidden">
            <div className="rounded-2xl border border-lf-border bg-lf-base/60 p-4 md:p-5">
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Faturamento", value: "R$ 1.920" },
                  { label: "Atendidos", value: "38" },
                  { label: "Espera média", value: "12 min" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-lf-border bg-lf-card px-3 py-2.5"
                  >
                    <p className="text-[10px] text-lf-muted">{m.label}</p>
                    <p className="font-mono text-sm md:text-lg font-bold text-lf-primary mt-0.5">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 mb-2 text-[11px] font-semibold text-lf-secondary">
                Comissões de hoje
              </p>
              <div className="space-y-1.5">
                {[
                  { name: "Bruno", cuts: 14, value: "R$ 294", pct: 82 },
                  { name: "Léo", cuts: 12, value: "R$ 252", pct: 70 },
                  { name: "Rafa", cuts: 9, value: "R$ 189", pct: 52 },
                ].map((b) => (
                  <div key={b.name} className="flex items-center gap-3 text-xs">
                    <span className="w-12 text-lf-secondary">{b.name}</span>
                    <span className="flex-1 h-1.5 rounded-full bg-lf-border overflow-hidden">
                      <span
                        className="block h-full rounded-full bg-lf-accent"
                        style={{ width: `${b.pct}%` }}
                      />
                    </span>
                    <span className="w-20 text-right font-mono text-lf-primary">
                      {b.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <CardText
              title="Comissão e caixa calculados sozinhos"
              desc="Cada atendimento concluído já entra no financeiro e na comissão do profissional."
            />
          </article>

          {/* Agenda — card escuro */}
          <article className="md:col-span-7 rounded-[28px] bg-lf-card border border-lf-border p-8 md:p-10 min-h-[400px] flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 rounded-2xl border border-lf-border bg-lf-base/60 p-4">
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    ["Seg", 15],
                    ["Ter", 16],
                    ["Qua", 17],
                    ["Qui", 18],
                    ["Sex", 19],
                  ].map(([d, n], i) => (
                    <span
                      key={d}
                      className={`rounded-lg py-1.5 flex flex-col items-center border text-[10px] ${
                        i === 1
                          ? "bg-lf-accent border-lf-accent text-lf-base"
                          : "border-lf-border text-lf-secondary"
                      }`}
                    >
                      {d}
                      <b className="font-mono text-sm">{n}</b>
                    </span>
                  ))}
                </div>
                <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                  {["09:30", "10:30", "11:00", "14:30", "15:00", "16:00"].map(
                    (t) => (
                      <span
                        key={t}
                        className={`rounded-md py-1.5 text-center font-mono text-[11px] border ${
                          t === "10:30"
                            ? "border-lf-accent bg-lf-accent/20 text-lf-accent font-bold"
                            : "border-lf-border text-lf-secondary"
                        }`}
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="sm:w-[210px] self-start rounded-2xl border border-lf-border-strong bg-lf-elevated p-4 flex gap-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <span className="w-8 h-8 rounded-lg bg-lf-accent/15 grid place-items-center shrink-0">
                  <Bell size={14} className="text-lf-accent" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-lf-primary">
                    Lembrete
                  </p>
                  <p className="text-[11px] text-lf-secondary leading-snug">
                    Seu horário é amanhã, às 10:30.
                  </p>
                </div>
              </div>
            </div>
            <CardText
              title="Agenda online com lembrete"
              desc="O cliente marca pelo app ou pelo WhatsApp e é avisado antes. Menos falta, menos cadeira vazia."
            />
          </article>

          {/* Feed — card claro */}
          <article className="md:col-span-5 rounded-[28px] bg-gradient-to-br from-[#9fcfc5] to-[#77aca2] p-8 md:p-10 min-h-[400px] flex flex-col justify-between overflow-hidden">
            <div className="rounded-2xl bg-lf-card border border-lf-border p-3 shadow-[0_20px_50px_rgba(3,25,38,0.3)] max-w-[300px] mx-auto w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-lf-accent text-lf-base grid place-items-center text-[10px] font-bold">
                  BS
                </span>
                <span className="text-xs font-semibold text-lf-primary">
                  Barbearia Silva
                </span>
                <span className="ml-auto text-[10px] text-lf-muted">ontem</span>
              </div>
              <div className="h-[92px] rounded-xl bg-gradient-to-br from-[#06131c] via-[#0b2433] to-[#1d4a52] flex items-end p-3">
                <span className="text-sm font-extrabold text-lf-primary leading-tight">
                  Horários livres hoje à tarde
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-2 text-[#e0683f]">
                <Heart size={14} className="fill-current" />
                <span className="text-[11px] font-semibold">24</span>
              </div>
              <span className="mt-2 h-8 rounded-lg bg-lf-accent text-lf-base flex items-center justify-center gap-1.5 text-[11px] font-semibold">
                <ListOrdered size={12} />
                Entrar na fila
              </span>
            </div>
            <CardText
              dark={false}
              title="Seu negócio no feed do cliente"
              desc="Publique fotos e stories. Quem segue você vê e entra na fila direto do post."
            />
          </article>
        </div>

        {/* Recursos menores, em linha — como no Spoke */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {smallFeatures.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <span className="w-10 h-10 rounded-xl bg-lf-accent/15 grid place-items-center">
                <Icon size={18} strokeWidth={1.75} className="text-lf-accent" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-lf-primary">
                {title}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed text-lf-secondary">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

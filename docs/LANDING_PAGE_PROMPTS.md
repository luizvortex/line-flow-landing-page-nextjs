# LineFlow — SaaS de Gerenciamento de Filas em Tempo Real

Crie o frontend completo de um SaaS multi-tenant de gerenciamento de filas por
serviço, com PWA instalável, controle financeiro por mês fiscal customizável,
display de TV ao vivo e fluxo completo de cliente final via QR Code.

Stack alvo: Next.js 15 (App Router) + Tailwind CSS + shadcn/ui + Supabase Auth
+ React Query + Zustand + lucide-react. PWA (service worker + manifest).

Toda lógica de processo (cálculo de tempo, push, billing, regras de plano) fica
no backend NestJS — o frontend só consome API e subscreve Supabase Realtime.

---

##  · DESIGN SYSTEM (base fixa)

### Paleta — Dark (default)
- bg-base:        #031926   (fundo da app)
- bg-card:        #072233   (cards, sidebar)
- bg-hover:       #0b2d42   (hover state)
- bg-elevated:    #0f3450   (modais, dropdowns)
- border:         #1a3d52
- border-strong:  #255068
- border-focus:   #77ACA2
- text-primary:   #e8f2f1
- text-secondary: #8bb5b0
- text-muted:     #4d7a80
- accent:         #77ACA2   (Sage Teal — CTAs, ativo, foco)
- accent-hover:   #5d9990
- accent-deep:    #468189
- accent-muted:   rgba(119,172,162,0.15)
- accent-subtle:  rgba(119,172,162,0.08)
- success:        #4ade80
- warning:        #fbbf24
- error:          #f87171
- info:           #67e8f9

### Paleta — Light (suportar, com toggle)
- bg-base: #f0f6f5 · bg-card: #ffffff · bg-hover: #e5efed
- text-primary: #031926 · text-secondary: #2e5d68
- accent: #468189 (Deep Teal)
- success #16a34a · warning #d97706 · error #dc2626

### Tipografia
- Sans: **Geist** (400/500/600/700)
- Mono: **Geist Mono** — use SEMPRE para números de senha, tempos, códigos de
  fila, timestamps, valores monetários
- Escala: Display 48 / H1 24–32 / H2 20 / H3 16 / Body 13–14 / Small 11–12
- Letter-spacing -0.02em em H1/Display, 0.08em uppercase em labels

### Espaçamento (base 4)
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64

### Radii
4 (xs) · 6 (sm) · 8 (md — inputs/buttons) · 12 (lg — cards) · 16 (xl) · 20 (2xl) · 9999 (pill)

### Sombras
- sm: 0 1px 3px rgba(3,25,38,.40)
- md: 0 4px 12px rgba(3,25,38,.50)
- lg: 0 8px 32px rgba(3,25,38,.60)
- focus: 0 0 0 3px rgba(119,172,162,.35)

### Transições
- 150ms ease para hover/cor/border
- 200ms ease-out para fade
- Active/press: opacity 0.85
- Sem spring/bounce

### Ícones — **Lucide React** (stroke 1.5, tamanhos 14/16/20/24)
list-ordered, users, clock, bar-chart-2, settings, qr-code, check-circle-2,
alert-triangle, x-circle, plus, credit-card, chevron-right, pause-circle,
play, user-check, bell, scissors, sun, moon, trash-2, zap, trending-up,
layout-dashboard, dollar-sign, tv, printer, monitor, user-plus, lock,
eye, eye-off, mail, key, download, copy, share-2, percent, receipt

### Linguagem
- pt-BR · sentence case · "você" no cliente · institucional no dashboard
- Buttons: verbo no imperativo ("Chamar próximo", "Entrar na fila")
- Empty states: curtos + CTA
- Números formatados em pt-BR (1.234,56 · dd/mm/aaaa · 24h)

---

# LineFlow — Landing Page: Prompts de Geração

> Cada prompt é autossuficiente e pode ser colado diretamente num Claude, v0, Bolt ou similar.
> Use nessa ordem: Prompt 1 → 2 → 3 → 4.
> Stack: Next.js 15 (App Router) + Tailwind CSS + shadcn/ui + lucide-react.
> Arquivo de saída: `app/(marketing)/page.tsx` + componentes em `src/components/landing/`.
> Foco Mobile First full response

---

## PROMPT 1 — Contexto, Design System e Hero + Navbar

```
# LineFlow Landing Page — Parte 1: Contexto, Design System, Navbar e Hero

## O PRODUTO

LineFlow é um SaaS de gerenciamento de filas em tempo real para PMEs
(salões, barbearias, clínicas, restaurantes). Clientes entram na fila via
QR Code pelo celular, acompanham a posição ao vivo e recebem uma
notificação push quando a vez se aproxima. Donos de negócio gerenciam tudo
num dashboard web. Sem senhas de papel. Sem cliente parado na porta.

Personas-alvo da landing:
- Donos de salão, barbearia, clínica e restaurante
- Pequenas empresas que perdem clientes por fila desorganizada
- Negócios que querem parecer modernos e profissionais

Proposta de valor central:
"Transforme a espera dos seus clientes numa experiência digital — QR Code,
posição em tempo real, notificação push. Em minutos."

Planos:
- Free: 1 fila, 30 entradas/dia (sem cartão)
- Starter: R$49/mês — até 5 filas, entradas ilimitadas
- Pro: R$129/mês — filas ilimitadas, analytics, display TV, push
- Enterprise: sob consulta — SLA, white-label, suporte dedicado

---

## DESIGN SYSTEM (use em TODA a landing)

### Paleta
bg-base:        #031926   /* fundo geral */
bg-card:        #072233   /* seções alternadas, cards */
bg-elevated:    #0f3450   /* hover cards, modais */
border:         #1a3d52
border-strong:  #255068
text-primary:   #e8f2f1
text-secondary: #8bb5b0
text-muted:     #4d7a80
accent:         #77ACA2   /* Sage Teal — CTAs e destaques */
accent-hover:   #5d9990
accent-deep:    #468189
accent-muted:   rgba(119,172,162,0.15)
accent-subtle:  rgba(119,172,162,0.06)
success:        #4ade80
warning:        #fbbf24

### Tipografia
- Geist Sans (400/500/600/700) para texto geral
- Geist Mono para números de fila, tempos, preços, códigos
- Display: 56–72px · H1: 40–48px · H2: 28–36px · H3: 20px · Body: 15–16px
- Letter-spacing: -0.03em em headlines, 0.08em uppercase em labels/eyebrows

### Espaçamento — base 4px
8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128

### Radii
8 (botões/inputs) · 12 (cards pequenos) · 16 (cards grandes) · 9999 (pills)

### Sombras
- sm: 0 1px 4px rgba(3,25,38,.50)
- md: 0 4px 16px rgba(3,25,38,.60)
- lg: 0 12px 40px rgba(3,25,38,.70)
- accent-glow: 0 0 32px rgba(119,172,162,.18), 0 0 80px rgba(119,172,162,.08)

### Transições
150ms ease hover/cor · 200ms ease-out fades · sem bounce/spring

### Ícones: Lucide React (stroke 1.5)
Principais: qr-code, smartphone, bell, clock, users, bar-chart-2,
tv, zap, check, arrow-right, star, shield-check, trending-up,
list-ordered, play-circle, sparkles, globe, check-circle-2

---

## COMPONENTES GLOBAIS DA LANDING

Crie como Server Components (RSC) quando sem interatividade.
Use 'use client' apenas onde há hover state JS ou animação com framer-motion.

### GradientDot
Elemento decorativo reutilizável:
- Círculo 600–900px, radial-gradient accent → transparente, opacity 0.06–0.12
- Position absolute, pointer-events none, blur-3xl ou blur-[120px]
- Variantes: top-left, top-right, center, bottom-center

### AccentLine
Linha fina horizontal accent (1px, 40–80px, opacity 0.6) usada acima de eyebrows.

### EyebrowLabel
<span> uppercase, text-[11px], letter-spacing 0.10em, text accent,
font-medium, flex items-center gap-2 com AccentLine antes.

### GlassCard
bg-card/60 backdrop-blur-md border border-[#1a3d52] rounded-2xl
hover:border-[#255068] hover:bg-elevated/40 transition-all 200ms ease-out

---

## PARTE 1A — NAVBAR

Componente: `src/components/landing/Navbar.tsx`

Layout: `sticky top-0 z-50`
bg: `bg-base/80 backdrop-blur-lg border-b border-[#1a3d52]`
Padding: `px-6 md:px-12 h-16`
Max-width interno: `max-w-6xl mx-auto`

Conteúdo:
ESQUERDA — Logo:
  - SVG wordmark "Line**Flow**" onde "Flow" fica em accent (#77ACA2)
  - Ao lado: badge pill `bg-accent-muted text-accent text-[10px] tracking-wider
    uppercase font-semibold px-2 py-0.5 rounded-full` com texto "Beta"

CENTRO — Nav links (ocultos mobile, visíveis md+):
  - "Como funciona" · "Funcionalidades" · "Planos" · "Depoimentos"
  - text-secondary text-sm hover:text-primary transition-colors 150ms

DIREITA — CTAs:
  - Link ghost "Entrar" (text-secondary hover:text-primary text-sm)
  - Botão primary "Comece grátis →" (bg-accent hover:bg-accent-hover
    text-[#031926] font-semibold text-sm px-5 py-2 rounded-lg
    shadow-[0_0_20px_rgba(119,172,162,.25)] hover:shadow-[0_0_28px_rgba(119,172,162,.35)]
    transition-all 150ms)

Mobile:
  - Botão hamburger (Menu icon 20px text-secondary) que abre drawer lateral
  - Drawer: bg-card, 280px, lista nav + CTAs empilhados

---

## PARTE 1B — HERO SECTION

Componente: `src/components/landing/Hero.tsx`
Seção: `relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-48`

Decorações de fundo (absolute, pointer-events-none):
  - GradientDot top-left: 800px, accent, opacity-10, -left-48 -top-48
  - GradientDot top-right: 600px, accent-deep, opacity-8, -right-32 -top-24
  - Grade sutil: SVG pattern de pontos 24px, opacity-[0.03]

CONTEÚDO — centralizado, max-w-4xl mx-auto, text-center, px-6:

  1. EyebrowLabel: ícone zap 12px + "SaaS de filas em tempo real"

  2. Headline H1 — duas linhas:
     Linha 1: "Chega de cliente" — text-primary 48–68px font-bold tracking-tight
     Linha 2: "perdido na fila." — com "fila" sublinhado accent
     (underline via SVG squiggle ou border-bottom accent, animado ao aparecer)
     Obs: no mobile colapsar para uma linha menor se necessário

  3. Subheadline — max-w-xl mx-auto:
     "Seu cliente entra pela porta, escaneia o QR Code e acompanha
     a posição no celular. Você gerencia tudo em tempo real no dashboard.
     Sem papel, sem confusão — só atendimento."
     text-secondary text-lg leading-relaxed

  4. CTA row — flex gap-4 justify-center mt-10 flex-wrap:
     - Btn primário: "Criar conta grátis" + arrow-right icon
       bg-accent hover:bg-accent-hover text-[#031926] font-bold
       px-7 py-3.5 rounded-lg text-base
       shadow-[0_0_28px_rgba(119,172,162,.30)] hover:shadow-[0_0_40px_rgba(119,172,162,.40)]
       transition-all 200ms
     - Btn secundário: play-circle icon + "Ver demo em 2 min"
       border border-[#255068] hover:border-accent text-secondary hover:text-primary
       px-6 py-3.5 rounded-lg text-sm font-medium transition-all 150ms

  5. Social proof bar — mt-8, opacity-70:
     flex items-center justify-center gap-6 text-muted text-xs
     - "★★★★★ 4.9 · 300+ negócios" (ícone star warning 12px)
     - Divider · (ponto)
     - "Sem cartão para começar"
     - Divider ·
     - "Cancele quando quiser"

  6. MOCKUP HERO — mt-16, max-w-5xl mx-auto:
     Container `relative w-full` com perspective-1000 e ligeira rotação 3D (rotateX 4deg)
     via CSS transform para dar profundidade.

     CAMADA 1 — Dashboard preview (largo, desktop):
       GlassCard rounded-2xl overflow-hidden shadow-lg
       border-accent/20 bg-card
       Simular barra de título do browser: dots (red/yellow/green 8px) + URL bar muted
       Conteúdo interno: mini-dashboard com:
         - Sidebar esquerda 200px (bg-base/80): logo + 4 nav items
         - Área principal: header "Filas ao vivo" + 2 MetricCards mini
           (Entradas hoje: 47 · Atendidos: 31) + tabela de fila com 5 linhas
           (nome cliente, posição mono accent, badge status, botão "Chamar")
         - Dot pulsante accent "● Ao vivo" no canto superior

     CAMADA 2 — Phone mockup (flutuante, direito, sobreposto):
       Position absolute right-0 md:-right-8 bottom-4 md:bottom-0
       width 200px, drop-shadow-2xl + shadow-[0_20px_60px_rgba(3,25,38,.8)]
       Phone shell: rounded-[28px] border-2 border-[#255068] bg-card overflow-hidden
       Conteúdo: tela de ticket do cliente
         - Header "Barbearia Silva · Corte"
         - Posição "#007" em mono 52px accent, centralizado
         - "~21 min de espera" muted 12px
         - Barra de progresso accent/3 filled
         - Botão "Receber notificação" accent pill 10px

     HALO: div absolute inset-0 rounded-2xl
       bg-gradient-to-b from-transparent to-base pointer-events-none
       para fundir o mockup com o fundo

Entregar como arquivo completo `src/components/landing/Hero.tsx`.
```

---

## PROMPT 2 — Seções: "Como funciona", "Funcionalidades" e "Prova Social"

```
# LineFlow Landing Page — Parte 2: Como funciona, Features e Social Proof

Contexto e design system: veja PROMPT 1.
Continuar o mesmo arquivo de landing após o Hero.
Cada seção inicia com `<section id="...">`.

---

## SEÇÃO 2 — COMO FUNCIONA

id="como-funciona"
bg: `bg-card/50` (seção alternada)
Padding: py-24 md:py-32, px-6
Max-width: max-w-6xl mx-auto

EyebrowLabel: "Processo" + AccentLine

H2: "Em 3 passos, sua fila vira digital"
text-primary font-bold text-3xl md:text-4xl tracking-tight mt-3

Subtítulo: "Sem instalação, sem app, sem complicação."
text-secondary text-lg mt-4

GRID DE STEPS — mt-16, grid md:grid-cols-3 gap-8:

  Cada step = GlassCard p-8 relative overflow-hidden group:
    - Número grande absoluto: top-4 right-6
      font-mono text-[80px] font-bold text-accent/8 select-none
    - Ícone accent 28px em círculo bg-accent-muted rounded-xl p-2.5 w-fit mb-6
    - Título H3 text-primary font-semibold text-xl mb-3
    - Descrição text-secondary text-[15px] leading-relaxed

  Step 1 — ícone qr-code:
    Título: "Cliente escaneia o QR Code"
    Desc: "Imprima ou mostre na tela. O cliente abre a câmera do celular
    e já entra na fila — sem baixar nenhum app."

  Step 2 — ícone smartphone:
    Título: "Acompanha a posição em tempo real"
    Desc: "O número da senha e o tempo estimado atualizam automaticamente.
    O cliente sabe a hora certa de voltar ao estabelecimento."

  Step 3 — ícone bell:
    Título: "Recebe notificação na hora certa"
    Desc: "Quando falta pouco, o celular vibra. Sem cliente ansioso perguntando
    'quantos faltam?' — você atende melhor, ele espera em paz."

CONECTOR VISUAL entre os steps (apenas desktop):
  Linha tracejada accent/20 com seta →, position absolute, top 50% dos cards.

ABAIXO DO GRID — CTA contextual mt-12 text-center:
  "Pronto para a primeira fila digital?"
  Btn primary "Criar minha conta grátis" + arrow-right

---

## SEÇÃO 3 — FUNCIONALIDADES

id="funcionalidades"
bg: bg-base (fundo padrão)
Padding: py-24 md:py-32 px-6
Max-width: max-w-6xl mx-auto

EyebrowLabel: "Funcionalidades"
H2: "Tudo que você precisa para\natender sem caos"
(quebra de linha proposital — em md+ numa linha só)
text-3xl md:text-4xl font-bold tracking-tight mt-3

Layout — BENTO GRID (inspiração: grids assimétricos modernos):
mt-16, grid grid-cols-1 md:grid-cols-12 gap-4

  CARD A — col-span-12 md:col-span-7, lg:col-span-8
  "Dashboard em tempo real"
  GlassCard p-8 min-h-[320px] relative overflow-hidden group
    - EyebrowLabel "Gestão" (pequeno, dentro do card)
    - H3 text-xl font-semibold text-primary mt-2
    - Desc text-secondary text-sm leading-relaxed mt-2 max-w-sm
      "Veja todas as filas, chame o próximo e acompanhe métricas do dia —
      tudo numa tela. O operador trabalha no celular ou no computador."
    - MINI-PREVIEW do dashboard (absoluto, bottom-0 right-0, width 320px):
      Cards de métricas empilhados + 3 linhas de fila com badges status
      Efeito: fade-out gradiente na borda inferior e direita

  CARD B — col-span-12 md:col-span-5 lg:col-span-4
  "Display TV ao vivo"
  GlassCard p-8 min-h-[320px] group
    - EyebrowLabel "Display" com ícone tv
    - H3 "Tela de TV na sala de espera"
    - Desc "Exiba o número chamado em tempo real. Profissionaliza o ambiente
      e evita dúvidas."
    - MINI-PREVIEW TV centralizado (mt-6):
      bg-base rounded-xl p-6 border border-[#1a3d52]
      "CHAMANDO" uppercase accent 11px tracking-widest
      "#007" mono 72px accent font-bold, letter-spacing -0.04em
      "Corte masculino" text-secondary 14px
      Dot pulsante accent + "Ao vivo" 11px

  CARD C — col-span-12 md:col-span-4
  "QR Code instantâneo"
  GlassCard p-8 group
    - EyebrowLabel "Entrada" com ícone qr-code
    - H3 "QR Code por fila"
    - Desc "Um por serviço ou um geral. Imprima, cole ou exiba na tela.
      Cada negócio tem seu link público permanente."
    - MINI QR placeholder: rounded-xl bg-base w-20 h-20 mx-auto mt-6
      grid 5x5 de quadrados accent/40 para simular QR

  CARD D — col-span-12 md:col-span-4
  "Notificação push"
  GlassCard p-8 group
    - EyebrowLabel "Notificações" com ícone bell
    - H3 "Avisa o cliente na hora certa"
    - Desc "Quando faltam 2 pessoas, o celular do cliente vibra.
      Ele volta no momento certo. Sem fila fantasma."
    - Mini notif mockup mt-6:
      bg-base rounded-xl p-4 border border-[#1a3d52] flex gap-3 items-center
      ícone bell accent 20px + div: "LineFlow" text-primary text-xs font-semibold
      + "Sua vez está chegando! Posição #2" text-secondary text-xs

  CARD E — col-span-12 md:col-span-4
  "Analytics e relatórios"
  GlassCard p-8 group
    - EyebrowLabel "Pro" badge accent + "Analytics" com ícone bar-chart-2
    - H3 "Dados que revelam seus picos"
    - Desc "Veja o horário de maior movimento, tempo médio de espera,
      taxa de desistência e receita por serviço."
    - Mini sparkline mt-6:
      SVG ou div bars: 7 barras de alturas variadas (30–100%), accent
      gradiente de opacity 30%→80%, com tooltip falso no maior pico

  CARD F — col-span-12 md:col-span-6
  "Multi-fila e multi-serviço"
  GlassCard p-8 group
    - EyebrowLabel "Flexibilidade" com ícone list-ordered
    - H3 "Uma fila para cada serviço"
    - Desc "Corte, barba e tintura em filas separadas. Cada uma com seu QR,
      seu operador e seu tempo estimado independente."
    - Tags demo mt-6: flex flex-wrap gap-2
      Pills: "Corte masculino · 8 na fila" / "Barba · 3 na fila" / "Tintura · Fechado"
      bg-accent-muted text-accent text-xs px-3 py-1 rounded-full border border-accent/20

  CARD G — col-span-12 md:col-span-6
  "100% no navegador — sem app"
  GlassCard p-8 group
    - EyebrowLabel "PWA" com ícone globe
    - H3 "Cliente não precisa instalar nada"
    - Desc "A tela do cliente funciona como app instalável (PWA) direto
      do navegador. Android e iOS. Rápido como app nativo."
    - Ícones de sistemas mt-6: Android + iOS + Chrome + Safari, muted/40
      com "Compatível com todos" text-muted text-xs

---

## SEÇÃO 4 — SOCIAL PROOF / DEPOIMENTOS

id="depoimentos"
bg: bg-card/30
Padding: py-24 md:py-32 px-6
Max-width: max-w-6xl mx-auto

EyebrowLabel: "Depoimentos" + star icon warning
H2: "300+ negócios confiam no LineFlow"
text-3xl md:text-4xl font-bold tracking-tight mt-3 text-primary

LOGO STRIP (confiança rápida) mt-12 mb-16:
  flex justify-center gap-10 flex-wrap opacity-30
  Logos placeholder de setores: "Barbearia Silva" · "Clínica Bem-Estar" ·
  "Restaurante Mar & Terra" · "Studio Hair" · "LabClinic" · "PetShop VetCare"
  text-secondary font-semibold text-sm uppercase tracking-wider

GRID DE DEPOIMENTOS mt-4, grid md:grid-cols-3 gap-6:
  Cada depoimento = GlassCard p-7:
    - Estrelas: 5x star icon warning fill-warning 14px flex gap-0.5
    - Quote text-secondary text-[15px] leading-relaxed mt-4 italic
    - Separador mt-6 mb-4: border-t border-[#1a3d52]
    - Autor: flex items-center gap-3
        Avatar 40px: bg-accent-muted rounded-full flex items-center justify-center
        text-accent font-bold text-sm (iniciais)
        div: nome font-semibold text-primary text-sm
             cargo text-muted text-xs

  Depoimento 1:
    Quote: "Antes eu perdia 30% dos clientes porque eles desistiam da fila.
    Com o LineFlow, o cancelamento caiu pra quase zero. O pessoal fica
    na rua esperando a notificação."
    Autor: "Carlos Mendes" · Dono · Barbearia do Carlão · SP

  Depoimento 2:
    Quote: "A tela de TV na sala de espera foi o que me convenceu. Parece
    coisa de aeroporto. Os clientes adoram e me perguntam qual sistema é esse."
    Autor: "Fernanda Souza" · Sócia · Studio Hair Bela · RJ

  Depoimento 3:
    Quote: "Em 20 minutos já estava funcionando. Imprimi o QR Code, colei
    na recepção e pronto. Nunca mais tive cliente reclamando de fila."
    Autor: "Dr. Ricardo Lima" · Médico/Gestor · Clínica VidaSaúde · BH

BARRA DE MÉTRICAS mt-16:
  Grid grid-cols-2 md:grid-cols-4 gap-6 text-center
  Cada métrica: GlassCard py-8 px-4
    Número: font-mono font-bold text-4xl text-accent
    Label: text-muted text-xs uppercase tracking-wider mt-2

  Métricas:
    "300+" / "Negócios ativos"
    "2.1M+" / "Entradas processadas"
    "4.9★" / "Avaliação média"
    "< 3 min" / "Setup inicial"
```

---

## PROMPT 3 — Seções: Planos, FAQ e CTA Final

```
# LineFlow Landing Page — Parte 3: Planos, FAQ e CTA Final

Contexto e design system: veja PROMPT 1.
Continuar o mesmo arquivo da landing.

---

## SEÇÃO 5 — PLANOS E PREÇOS

id="planos"
bg: bg-base
Padding: py-24 md:py-32 px-6
Max-width: max-w-6xl mx-auto

EyebrowLabel: "Preços transparentes"
H2: "Comece grátis. Cresça no seu ritmo."
text-3xl md:text-4xl font-bold tracking-tight mt-3 text-primary
Subtítulo: "Sem taxa de setup. Sem fidelidade. Cancele quando quiser."
text-secondary text-lg mt-4

TOGGLE MENSAL/ANUAL mt-10 flex items-center justify-center gap-3:
  "Mensal" text-sm text-secondary
  Toggle pill: bg-card border border-[#255068] rounded-full p-0.5 w-14 h-7
    circle accent 24px deslizante (use CSS ou useState)
  "Anual" text-sm text-secondary
  Badge "2 meses grátis" bg-success/15 text-success text-xs px-2 py-0.5
    rounded-full font-medium ml-1

GRID DE PLANOS mt-14, grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5:

  PLANO FREE — GlassCard p-8:
    Header:
      Badge "Free" bg-accent-muted text-accent text-xs px-2.5 py-1 rounded-full font-medium
      H3 "Free" text-xl font-bold text-primary mt-4
      Preço: "R$0" mono text-4xl font-bold text-primary
      "/mês" text-muted text-sm ml-1
      Desc: "Para testar e dar os primeiros passos." text-secondary text-sm mt-3
    Separador mt-6 mb-6: border-t border-[#1a3d52]
    Lista de features (ul, espaço gap-3):
      check icon success 14px + text-secondary text-sm:
      · "1 fila ativa"
      · "30 entradas por dia"
      · "QR Code básico"
      · "Acompanhamento em tempo real"
      x-circle icon text-muted/50 14px + text-muted text-sm:
      · "Notificações push"
      · "Display TV"
      · "Analytics"
    CTA mt-8: btn full-width
      border border-[#255068] hover:border-accent text-secondary hover:text-primary
      py-3 rounded-lg text-sm font-medium transition-all 150ms
      texto "Começar grátis"

  PLANO STARTER — GlassCard p-8:
    Header:
      Badge "Starter" mesma estética
      H3 "Starter"
      Preço mono: "R$49" text-4xl accent font-bold  +  "/mês"
      Desc "Para negócios em crescimento."
    Features:
      ✓ "Até 5 filas ativas"
      ✓ "Entradas ilimitadas"
      ✓ "QR Code por fila"
      ✓ "Painel web completo"
      ✓ "Suporte por e-mail"
      ✗ "Display TV" (muted)
      ✗ "Analytics avançado" (muted)
    CTA: "Assinar Starter" — btn primary accent

  PLANO PRO — DESTAQUE principal:
    Card especial: border-2 border-accent/50 shadow-[0_0_40px_rgba(119,172,162,.12)]
    ring-1 ring-accent/20 relative
    Badge absoluto -top-3.5 left-1/2 -translate-x-1/2:
      "MAIS POPULAR" bg-accent text-[#031926] text-[10px] font-bold
      tracking-widest px-4 py-1.5 rounded-full uppercase
    Header:
      Badge "Pro" bg-accent/10 text-accent
      H3 "Pro"
      Preço: "R$129" mono text-4xl font-bold accent  +  "/mês"
      Desc "Profissional. Completo. Para quem leva o negócio a sério."
    Features (todos check success):
      ✓ "Filas ilimitadas"
      ✓ "Entradas ilimitadas"
      ✓ "Display TV ao vivo" + badge "⭐"
      ✓ "Notificações push" + badge "⭐"
      ✓ "Analytics avançado" + badge "⭐"
      ✓ "Relatórios e exportação"
      ✓ "Funcionários ilimitados"
      ✓ "Suporte prioritário"
    CTA: btn full-width bg-accent hover:bg-accent-hover text-[#031926]
         font-bold py-3.5 rounded-lg shadow-[0_0_24px_rgba(119,172,162,.30)]
         "Assinar Pro"

  PLANO ENTERPRISE — GlassCard p-8:
    Header:
      Badge "Enterprise" border border-[#255068] text-secondary
      H3 "Enterprise"
      Preço: "Sob consulta" text-xl font-semibold text-primary
      Desc "Para redes e franquias com necessidades específicas."
    Features:
      ✓ "Tudo do Pro"
      ✓ "White-label completo"
      ✓ "SLA garantido"
      ✓ "API pública dedicada"
      ✓ "Integração sob medida"
      ✓ "Suporte dedicado 24/7"
      ✓ "Treinamento da equipe"
    CTA: btn full-width border border-[#255068] hover:border-accent
         text-secondary hover:text-primary py-3 rounded-lg text-sm
         "Falar com vendas"

NOTA ABAIXO DA TABELA mt-8 text-center:
  Ícone shield-check 16px text-muted + "30 dias de garantia ·
  Cancele quando quiser · Sem taxa de cancelamento"
  text-muted text-xs

---

## SEÇÃO 6 — COMPARATIVO DE FEATURES (tabela alternativa ao grid)

Componente colapsável (só mostra em md+, escondido mobile):
"Ver comparativo completo" btn ghost com chevron-down →
expande tabela com todas as features vs planos.

Tabela: `w-full overflow-auto mt-8`
  Header row: feature | Free | Starter | Pro | Enterprise
    Pro destacado: bg-accent/5 border-x border-accent/20
  Linhas:
    Grupos com eyebrow row: "Filas" / "Atendimento" / "Notificações" /
    "Analytics" / "Display" / "Suporte"
    Cada feature: check accent / x muted / texto específico
    Estilo alternado nas linhas: bg-card/30 odd

---

## SEÇÃO 7 — FAQ

id="faq"
bg: bg-card/30
Padding: py-24 md:py-32 px-6
Max-width: max-w-3xl mx-auto (mais estreito = leitura melhor)

EyebrowLabel: "Dúvidas frequentes"
H2: "Tudo que você queria saber" text-3xl font-bold text-primary mt-3

ACCORDION mt-12 — 8 perguntas, só uma aberta por vez:
  Cada item: border-b border-[#1a3d52]
  Trigger: py-5 flex justify-between items-center cursor-pointer group
    text-primary font-medium text-[15px] group-hover:text-accent transition-colors
    + chevron-down icon text-muted 18px, rotate 180deg quando aberto
  Conteúdo: pb-5 text-secondary text-[15px] leading-relaxed

  P1: "Preciso instalar alguma coisa?"
  R: "Não. O LineFlow funciona 100% no navegador, tanto para você (dashboard)
  quanto para seus clientes (fila). No celular, o cliente pode adicionar
  à tela inicial como um app — sem passar pela App Store."

  P2: "Meu cliente precisa criar uma conta para entrar na fila?"
  R: "Não. Ele escaneia o QR Code, informa o nome e já está na fila.
  Simples como receber uma senha de papel — só que no celular."

  P3: "Funciona sem internet estável?"
  R: "O dashboard precisa de internet. O cliente também precisa para
  entrar na fila e receber o número. Recomendamos disponibilizar Wi-Fi
  na espera para melhor experiência."

  P4: "Posso usar no celular também (como atendente)?"
  R: "Sim. O dashboard é responsivo e funciona em qualquer smartphone.
  O atendente pode chamar o próximo e gerenciar a fila direto do celular."

  P5: "Como funciona a notificação push?"
  R: "Quando faltam 2 posições, o celular do cliente vibra com uma
  notificação nativa. Ele precisa autorizar no primeiro acesso. Não depende
  de app instalado — funciona via PWA no Android e iOS."

  P6: "Posso ter filas diferentes para serviços diferentes?"
  R: "Sim. Nos planos Starter e Pro você cria quantas filas quiser —
  Corte, Barba, Manicure, Consulta Geral — cada uma com seu QR Code,
  tempo estimado e operador responsável."

  P7: "O que acontece se cancelar? Perco os dados?"
  R: "Você continua com acesso por 30 dias após o cancelamento e pode
  exportar todos os dados em CSV. Sem dados perdidos."

  P8: "Tem integração com WhatsApp ou iFood?"
  R: "Ainda não nativamente, mas estamos construindo integrações.
  No Enterprise oferecemos integração personalizada via API.
  Fique de olho nas novidades — lançamos atualizações frequentes."

---

## SEÇÃO 8 — CTA FINAL (pre-footer)

bg: relativo, overflow-hidden
Padding: py-24 md:py-36 px-6

DECORAÇÕES:
  GradientDot center: 1000px, accent, opacity-8, centralizado
  GradientDot bottom: 600px, accent-deep, opacity-6, bottom

CONTEÚDO — centralizado max-w-2xl mx-auto text-center:

  EyebrowLabel: sparkles icon + "Comece hoje mesmo"

  H2 grande:
    "Sua fila mais inteligente\ncomeça com um QR Code."
    text-4xl md:text-5xl font-bold tracking-tight text-primary mt-4
    (highlight "QR Code" em accent)

  Subtítulo mt-6:
    "Configuração em menos de 3 minutos. Sem cartão de crédito.
    Sem compromisso. Só você e sua primeira fila digital."
    text-secondary text-lg leading-relaxed

  CTA CARDS mt-12 flex flex-col sm:flex-row gap-4 justify-center:
    Card A (Grátis):
      GlassCard p-6 text-left flex-1 max-w-xs cursor-pointer
      hover:border-accent transition-all group
        EyebrowLabel "Plano Free"
        H3 "Criar conta grátis" text-primary font-semibold group-hover:text-accent
        text-secondary text-sm mt-2 "Sem cartão · 1 fila · 30 entradas/dia"
        Btn block mt-4 border border-accent text-accent hover:bg-accent hover:text-[#031926]
          py-2.5 rounded-lg text-sm font-semibold transition-all
          "Começar agora →"

    Card B (Demo):
      GlassCard p-6 text-left flex-1 max-w-xs bg-accent-muted border-accent/30
        EyebrowLabel "Ao vivo"
        H3 "Ver demo interativo" text-primary font-semibold
        text-secondary text-sm mt-2 "Experimente sem cadastro · 2 minutos"
        Btn block mt-4 bg-accent hover:bg-accent-hover text-[#031926]
          font-bold py-2.5 rounded-lg text-sm transition-all
          "Abrir demo →"

  Note mt-10 text-muted text-xs:
    "★★★★★ Mais de 300 negócios já processaram 2 milhões de atendimentos."
```

---

## PROMPT 4 — Footer, Animações e Integração Final

```
# LineFlow Landing Page — Parte 4: Footer, Animações, Acessibilidade e Integração

Contexto e design system: veja PROMPT 1.
Este prompt finaliza a landing page.

---

## SEÇÃO 9 — FOOTER

bg: bg-card border-t border-[#1a3d52]
Padding: pt-16 pb-8 px-6

MAX-WIDTH: max-w-6xl mx-auto

GRID SUPERIOR — grid grid-cols-2 md:grid-cols-5 gap-8 pb-12
border-b border-[#1a3d52]:

  COL 1 (col-span-2 md:col-span-2) — Marca:
    Logo SVG "LineFlow" + badge "Beta"
    Desc mt-4 text-secondary text-sm leading-relaxed max-w-xs:
      "Sistema de filas em tempo real para negócios que levam atendimento a sério."
    Redes sociais mt-6 flex gap-4:
      Ícones 18px text-muted hover:text-accent transition-colors:
      (usa lucide): Twitter/X (twitter) · LinkedIn · Instagram
    Barra de status mt-5 flex items-center gap-2:
      Dot 8px bg-success rounded-full animate-pulse
      "Todos os sistemas operacionais" text-muted text-xs

  COL 2 — "Produto":
    H4 text-primary font-semibold text-sm mb-4 uppercase tracking-wider
    Links text-secondary text-sm hover:text-primary transition-colors gap-y-3 flex flex-col:
      "Como funciona" · "Funcionalidades" · "Planos e preços"
      "Changelog" · "Roadmap"

  COL 3 — "Para seu negócio":
    H4 igual
    Links: "Barbearia e salão" · "Clínicas médicas" · "Restaurantes"
           "Academia e fitness" · "Pet shops"

  COL 4 — "Empresa":
    H4 igual
    Links: "Sobre nós" · "Blog" · "Casos de sucesso"
           "Imprensa" · "Carreiras"

  COL 5 — "Suporte":
    H4 igual
    Links: "Central de ajuda" · "Documentação API"
           "Status" · "Contato" · "WhatsApp"

GRID INFERIOR mt-8:
  flex flex-col md:flex-row justify-between items-center gap-4:
    "© 2026 LineFlow. Todos os direitos reservados." text-muted text-xs
    Links inline: "Privacidade" · "Termos" · "Cookies"
      text-muted text-xs hover:text-secondary transition-colors

---

## ANIMAÇÕES E MICRO-INTERAÇÕES

Usar Intersection Observer (ou framer-motion se já no projeto) para:

1. FadeUp — default para seções:
   ```tsx
   // Hook reutilizável
   function useFadeUp(threshold = 0.1) {
     const ref = useRef(null)
     const [visible, setVisible] = useState(false)
     useEffect(() => {
       const observer = new IntersectionObserver(([e]) => {
         if (e.isIntersecting) { setVisible(true); observer.disconnect() }
       }, { threshold })
       if (ref.current) observer.observe(ref.current)
       return () => observer.disconnect()
     }, [])
     return { ref, visible }
   }
   // Uso:
   <div ref={ref} className={cn(
     "transition-all duration-700 ease-out",
     visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
   )}>
   ```

2. StaggerChildren — para grids de cards:
   Cada filho recebe delay incremental: delay-[0ms] delay-[100ms] delay-[200ms]
   via className dinâmica com index.

3. NumberCounter — para métricas da seção de social proof:
   Contar de 0 até o valor quando entrar em viewport.
   Usar requestAnimationFrame para suavidade.
   ```tsx
   // Exemplo para "300+"
   function useCounter(end: number, duration = 1500) {
     const [count, setCount] = useState(0)
     // implementação com rAF aqui
     return count
   }
   ```

4. Dot pulsante "Ao vivo" (usado no navbar e display TV):
   ```css
   @keyframes ping-custom {
     0% { transform: scale(1); opacity: 0.8 }
     70% { transform: scale(1.8); opacity: 0 }
     100% { transform: scale(1.8); opacity: 0 }
   }
   .dot-live { animation: ping-custom 2s ease-out infinite }
   ```

5. Hero mockup — efeito parallax leve ao scroll (max 20px):
   Usar onScroll com requestAnimationFrame para mover mockup -y na velocidade 0.1x do scroll.

6. Navbar — blur e border aparecem ao scroll:
   `useScrollY()` → quando y > 10, adicionar backdrop-blur e border classes

---

## ESTRUTURA DE ARQUIVOS

```
src/
├── app/
│   └── (marketing)/
│       └── page.tsx                  ← monta todas as seções em ordem
│
└── components/
    └── landing/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── ComoFunciona.tsx
        ├── Funcionalidades.tsx
        ├── SocialProof.tsx
        ├── Planos.tsx
        ├── FAQ.tsx
        ├── CTAFinal.tsx
        ├── Footer.tsx
        └── shared/
            ├── GradientDot.tsx
            ├── AccentLine.tsx
            ├── EyebrowLabel.tsx
            ├── GlassCard.tsx
            └── useFadeUp.ts
```

`app/(marketing)/page.tsx` monta assim:
```tsx
import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import ComoFunciona from '@/components/landing/ComoFunciona'
import Funcionalidades from '@/components/landing/Funcionalidades'
import SocialProof from '@/components/landing/SocialProof'
import Planos from '@/components/landing/Planos'
import FAQ from '@/components/landing/FAQ'
import CTAFinal from '@/components/landing/CTAFinal'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <main className="bg-[#031926] min-h-screen">
      <Navbar />
      <Hero />
      <ComoFunciona />
      <Funcionalidades />
      <SocialProof />
      <Planos />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}
```

---

## ACESSIBILIDADE (obrigatório)

- Todos os links e botões com `aria-label` quando sem texto visível
- Imagens mock com `alt` descritivo
- Accordion FAQ com `aria-expanded`, `aria-controls`, `role="button"`
- Contraste mínimo AA:
    text-primary (#e8f2f1) sobre bg-base (#031926) → passa AA
    text-secondary (#8bb5b0) sobre bg-base → verificar (pode precisar ajuste)
    text-muted (#4d7a80) — usar só para textos não críticos
- `prefers-reduced-motion`: envolver animações em check
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important }
  }
  ```
- Skip link no topo: "Pular para o conteúdo" href="#main-content" visível no focus
- Headings hierárquicos: H1 só no Hero, H2 por seção, H3 nos cards

---

## SEO

`app/(marketing)/page.tsx` ou layout:
```tsx
export const metadata: Metadata = {
  title: 'LineFlow — Gestão de filas em tempo real para seu negócio',
  description: 'Clientes entram na fila pelo QR Code, acompanham a posição no celular e recebem notificação. Dashboard completo para salões, clínicas e restaurantes.',
  keywords: ['fila virtual', 'QR Code fila', 'gerenciamento de filas', 'sistema de senhas', 'fila digital', 'barbearia', 'salão de beleza', 'clínica'],
  openGraph: {
    title: 'LineFlow — Sua fila mais inteligente começa hoje',
    description: 'Setup em 3 minutos. Sem app. Sem papel. Só atendimento.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LineFlow — Gestão de filas em tempo real',
    description: 'QR Code + notificação push + dashboard ao vivo.',
  },
}
```

---

## CHECKLIST DE ALTA CONVERSÃO

Antes de considerar pronto, verificar:

[ ] CTA primário visível sem scroll na hero (above the fold)
[ ] CTA se repete: Navbar · Hero · Como funciona · CTA Final
[ ] Plano Free com "sem cartão" mencionado ≥ 3x na página
[ ] Social proof (300+ negócios, avaliação, depoimentos) acima do fold ou logo após
[ ] Proposta de valor clara em ≤ 8 segundos de leitura (headline + subheadline)
[ ] Mockup do produto visível na hero (prova de que existe)
[ ] Garantia mencionada (30 dias) na seção de planos
[ ] FAQ cobre as 3 objeções principais: "precisa de app?", "meu cliente precisa criar conta?", "cancela como?"
[ ] Botão "Falar com vendas" para Enterprise (lead qualificado)
[ ] Página responsiva, testada em 375px (iPhone SE) e 1440px
[ ] Lighthouse Performance ≥ 90: imagens WebP, fonts com display:swap, lazy load nos mockups
[ ] Scroll suave entre âncoras: `scroll-behavior: smooth` no html
[ ] Loading state nos CTAs (spinner + "Criando conta…") para não gerar duplo clique
```

---

## Como usar os 4 prompts

| # | Prompt | Cole em | Entregável |
|---|---|---|---|
| 1 | Contexto + Navbar + Hero | Claude / v0 / Bolt | `Navbar.tsx` + `Hero.tsx` |
| 2 | Como funciona + Features + Social Proof | Mesmo contexto | 3 componentes de seção |
| 3 | Planos + FAQ + CTA Final | Mesmo contexto | 3 componentes de seção |
| 4 | Footer + Animações + Integração | Mesmo contexto | Footer + shared hooks + `page.tsx` |

**Dica:** Use os prompts 1→4 em sequência no mesmo chat para manter contexto.
A cada prompt, comece com: "Continuando a landing page do LineFlow (contexto no prompt 1),
agora crie: [seção]".

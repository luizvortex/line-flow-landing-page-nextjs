import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { Navbar } from "@/src/app/_components/landing/navbar";
import { Footer, CONTACT_EMAIL } from "@/src/app/_components/landing/footer";

export const metadata: Metadata = {
  title: "Privacidade e proteção de dados — LineFlow",
  description:
    "Como o LineFlow trata dados pessoais, quem é o controlador e como exercer seus direitos pela LGPD.",
  alternates: { canonical: "/privacidade" },
};

const LEGAL_BASE = "https://lineflow.mpdev.pro.br/legal";

/** Direitos do titular (LGPD, art. 18), em linguagem direta. */
const rights = [
  "Confirmar se tratamos dados seus e acessar esses dados",
  "Corrigir dados incompletos, inexatos ou desatualizados",
  "Pedir anonimização, bloqueio ou exclusão de dados desnecessários",
  "Levar seus dados para outro fornecedor (portabilidade)",
  "Saber com quem compartilhamos seus dados",
  "Revogar um consentimento dado e saber as consequências disso",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-8 border-b border-lf-border last:border-0">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-lf-primary">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-lf-secondary">{children}</div>
    </section>
  );
}

export default function PrivacidadePage() {
  return (
    <main className="bg-lf-base min-h-screen">
      <Navbar links={[]} />

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-20 md:pt-20">
        <p className="text-sm font-medium text-lf-accent">LGPD · Lei 13.709/2018</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-lf-primary">
          Privacidade e proteção de dados
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-lf-secondary">
          Um resumo de como o LineFlow trata dados pessoais. As regras completas estão na{" "}
          <a
            href={`${LEGAL_BASE}/privacidade`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lf-accent underline underline-offset-2 hover:text-lf-accent-hover"
          >
            Política de Privacidade
          </a>{" "}
          do sistema.
        </p>

        <div className="mt-6">
          <Section title="Quem trata os dados">
            <p>
              O LineFlow é desenvolvido e operado pela <strong className="text-lf-primary">MP Develop</strong>,
              controladora dos dados de conta, empresa, equipe e cobrança.
            </p>
            <p>
              Os dados dos clientes que entram nas filas e agendas pertencem à empresa que os atende. Nesse
              caso o LineFlow trata os dados em nome dela, seguindo as instruções dessa empresa.
            </p>
          </Section>

          <Section title="Este site">
            <p>
              Esta página de apresentação não tem formulários e não pede dados pessoais. Ao clicar em
              &ldquo;Criar conta grátis&rdquo; ou &ldquo;Entrar&rdquo;, você vai para o sistema, onde valem a
              Política de Privacidade e os Termos de Uso.
            </p>
            <p>
              A única coisa que guardamos no seu navegador é a sua escolha de tema (claro ou escuro), para
              lembrar dela na próxima visita. Ela não identifica você e não sai do seu aparelho.
            </p>
          </Section>

          <Section title="Seus direitos">
            <ul className="space-y-2">
              {rights.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lf-accent shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <p>
              Se você entrou na fila ou marcou horário numa empresa, fale primeiro com ela, porque é ela que
              decide sobre esses dados. Se não tiver resposta, escreva para nós que ajudamos a resolver.
            </p>
          </Section>

          <Section title="Como falar com a gente">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-xl border border-lf-border-strong bg-lf-card px-5 py-3.5 text-lf-primary font-medium hover:border-lf-accent transition-colors"
            >
              <Mail size={18} className="text-lf-accent" />
              {CONTACT_EMAIL}
            </a>
            <p>Use esse endereço para pedidos sobre seus dados e qualquer dúvida de privacidade.</p>
          </Section>

          <Section title="Documentos completos">
            <ul className="space-y-2">
              {[
                { label: "Política de Privacidade", href: `${LEGAL_BASE}/privacidade` },
                { label: "Cookies e armazenamento local", href: `${LEGAL_BASE}/privacidade#cookies` },
                { label: "Termos de Uso", href: `${LEGAL_BASE}/termos` },
              ].map((doc) => (
                <li key={doc.label}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-lf-accent hover:text-lf-accent-hover"
                  >
                    {doc.label}
                    <ArrowUpRight size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </article>

      <Footer />
    </main>
  );
}

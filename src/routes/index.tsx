import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Leaf,
  Rabbit,
  Scale,
  ShieldCheck,
  Sparkles,
  Wheat,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NutriCoelho | Nutrição completa para coelhos" },
      {
        name: "description",
        content:
          "Landing page sobre ração para coelhos com foco em nutrição equilibrada, fibras, bem-estar e cuidado diário.",
      },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: Wheat,
    title: "Fibras de qualidade",
    description:
      "Uma alimentação rica em fibras contribui para a rotina digestiva e para o desgaste natural dos dentes.",
  },
  {
    icon: HeartPulse,
    title: "Bem-estar diário",
    description:
      "Nutrientes essenciais ajudam a manter energia, disposição e uma rotina mais equilibrada.",
  },
  {
    icon: ShieldCheck,
    title: "Seleção cuidadosa",
    description:
      "Ingredientes escolhidos para complementar uma dieta que também deve incluir feno e água fresca.",
  },
];

const nutrition = [
  "Fonte de fibras para a rotina digestiva",
  "Vitaminas e minerais essenciais",
  "Pellets uniformes que facilitam o manejo",
  "Formulação pensada para alimentação diária",
];

function RabbitIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute -left-8 top-16 h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-amber-200/70 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_-30px_rgba(22,101,52,0.35)] backdrop-blur sm:p-9">
        <div className="absolute right-5 top-5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
          Nutrição + cuidado
        </div>

        <svg viewBox="0 0 460 380" className="w-full">
          <defs>
            <linearGradient id="bowl" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#166534" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>

          <ellipse cx="235" cy="338" rx="158" ry="20" fill="#dcfce7" />

          <path
            d="M294 121c23-72 17-103-7-106-24-3-39 34-45 94"
            fill="#f5f5f4"
            stroke="#d6d3d1"
            strokeWidth="5"
          />
          <path
            d="M212 115c-4-75-24-104-48-96-24 8-21 49-2 103"
            fill="#fafaf9"
            stroke="#d6d3d1"
            strokeWidth="5"
          />
          <path d="M279 95c9-45 8-64-2-67-11-2-20 21-23 61" fill="#fecdd3" />
          <path d="M197 92c-5-43-15-62-26-58-11 4-7 27 6 64" fill="#fecdd3" />

          <ellipse cx="234" cy="193" rx="92" ry="92" fill="#fafaf9" />
          <ellipse cx="171" cy="180" rx="34" ry="46" fill="#f5f5f4" />
          <ellipse cx="298" cy="180" rx="34" ry="46" fill="#f5f5f4" />
          <circle cx="204" cy="182" r="9" fill="#292524" />
          <circle cx="264" cy="182" r="9" fill="#292524" />
          <circle cx="207" cy="179" r="3" fill="white" />
          <circle cx="267" cy="179" r="3" fill="white" />
          <path d="M226 211c5-6 12-6 17 0-1 10-6 15-9 15s-8-5-8-15Z" fill="#fb7185" />
          <path d="M234 226c-7 10-18 11-26 4" fill="none" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
          <path d="M234 226c7 10 18 11 26 4" fill="none" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />

          <path d="M188 257c18-10 29-13 46-13 17 0 31 4 49 14l18 69H167l21-70Z" fill="#f5f5f4" />

          <ellipse cx="234" cy="307" rx="126" ry="35" fill="#d6b27b" />
          <circle cx="171" cy="296" r="7" fill="#8b5e34" />
          <circle cx="192" cy="309" r="6" fill="#95683d" />
          <circle cx="217" cy="293" r="7" fill="#7c4f2c" />
          <circle cx="240" cy="307" r="7" fill="#8b5e34" />
          <circle cx="265" cy="294" r="6" fill="#95683d" />
          <circle cx="287" cy="308" r="7" fill="#7c4f2c" />
          <circle cx="308" cy="296" r="6" fill="#8b5e34" />
          <path d="M109 300h250c0 35-27 61-61 61H170c-34 0-61-26-61-61Z" fill="url(#bowl)" />
          <path d="M140 336h188" stroke="#86efac" strokeWidth="5" strokeLinecap="round" opacity="0.55" />

          <path d="M86 258c12-29 31-44 54-51" fill="none" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" />
          <path d="M92 244c-21-4-31-17-31-37 21-1 36 9 42 28" fill="#4ade80" />
          <path d="M105 227c-9-18-4-33 12-45 15 13 18 29 9 45" fill="#22c55e" />
        </svg>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfdf8] text-stone-900">
      <header className="relative z-20 border-b border-emerald-950/5 bg-[#fbfdf8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3 font-black tracking-tight text-emerald-950">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-900/15">
              <Rabbit size={22} strokeWidth={2.4} />
            </span>
            <span className="text-xl">NutriCoelho</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-600 md:flex" aria-label="Navegação principal">
            <a className="transition hover:text-emerald-700" href="#beneficios">
              Benefícios
            </a>
            <a className="transition hover:text-emerald-700" href="#nutricao">
              Nutrição
            </a>
            <a className="transition hover:text-emerald-700" href="#cuidados">
              Cuidados
            </a>
          </nav>

          <a
            href="#nutricao"
            className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-800"
          >
            Conheça mais
          </a>
        </div>
      </header>

      <section id="inicio" className="relative">
        <div className="absolute inset-x-0 top-0 -z-0 h-[520px] bg-[radial-gradient(circle_at_20%_10%,rgba(187,247,208,0.55),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(254,215,170,0.55),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700 shadow-sm">
              <Sparkles size={15} />
              Alimentação equilibrada todos os dias
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-emerald-950 sm:text-6xl lg:text-7xl">
              Mais nutrição para uma vida mais leve e saudável.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              Uma boa ração complementa a alimentação do seu coelho com fibras, vitaminas e minerais importantes para a rotina, o bem-estar e a vitalidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                Ver benefícios
                <ArrowRight size={18} />
              </a>
              <a
                href="#cuidados"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-7 py-4 text-sm font-extrabold text-stone-700 transition hover:border-emerald-300 hover:text-emerald-800"
              >
                Guia de alimentação
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-stone-200 pt-6">
              <div>
                <strong className="block text-2xl font-black text-emerald-800">Fibras</strong>
                <span className="text-xs font-semibold text-stone-500">na rotina alimentar</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-emerald-800">Vitaminas</strong>
                <span className="text-xs font-semibold text-stone-500">suporte nutricional</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-emerald-800">Equilíbrio</strong>
                <span className="text-xs font-semibold text-stone-500">para o dia a dia</span>
              </div>
            </div>
          </div>

          <RabbitIllustration />
        </div>
      </section>

      <section id="beneficios" className="bg-emerald-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-300">Por que a escolha importa</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Nutrição pensada para acompanhar cada fase da rotina.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-emerald-50/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nutricao" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative rounded-[2.2rem] bg-[#eff8e9] p-7 sm:p-10">
            <div className="absolute -right-5 -top-5 grid h-20 w-20 place-items-center rounded-[1.75rem] bg-amber-300 text-emerald-950 shadow-xl rotate-6">
              <Leaf size={34} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-700">Composição inteligente</span>
            <h2 className="mt-4 max-w-lg text-4xl font-black tracking-[-0.035em] text-emerald-950 sm:text-5xl">
              O essencial para complementar uma alimentação bem cuidada.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
              A ração deve fazer parte de um conjunto de cuidados. Feno de qualidade, água limpa e orientação profissional continuam sendo fundamentais para uma dieta adequada.
            </p>
          </div>

          <div className="space-y-4">
            {nutrition.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={22} />
                <span className="font-bold leading-7 text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cuidados" className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2.5rem] bg-amber-100">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-amber-300 text-emerald-950">
                  <Scale size={30} />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-800">Quantidade certa</span>
                  <h2 className="mt-1 text-3xl font-black tracking-tight text-emerald-950">Cada coelho é único.</h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-5">
                  <strong className="text-emerald-900">1. Observe</strong>
                  <p className="mt-2 text-sm leading-6 text-stone-600">Idade, peso, rotina e condição corporal influenciam a alimentação.</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-5">
                  <strong className="text-emerald-900">2. Equilibre</strong>
                  <p className="mt-2 text-sm leading-6 text-stone-600">Combine ração adequada, feno abundante e água sempre disponível.</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-5">
                  <strong className="text-emerald-900">3. Acompanhe</strong>
                  <p className="mt-2 text-sm leading-6 text-stone-600">Para ajustes individuais, procure orientação de um médico-veterinário.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-2 font-extrabold text-emerald-900">
            <Rabbit size={19} />
            NutriCoelho
          </div>
          <p>Informação, equilíbrio e cuidado para uma rotina mais saudável.</p>
        </div>
      </footer>
    </main>
  );
}

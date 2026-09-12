import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Heart,
  Leaf,
  PackageCheck,
  Rabbit,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Wheat,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NutriCoelho | Rações premium para coelhos" },
      {
        name: "description",
        content:
          "Rações premium para coelhos com fibras, ingredientes selecionados e opções para diferentes fases da vida.",
      },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "NutriCoelho Select",
    subtitle: "Adultos",
    description: "Fórmula equilibrada para a rotina de coelhos adultos, com fibras e nutrientes essenciais.",
    badge: "Mais vendido",
    accent: "from-emerald-700 to-emerald-950",
    sizes: "500 g · 1,5 kg · 3 kg",
  },
  {
    name: "NutriCoelho Sensitive",
    subtitle: "Digestão delicada",
    description: "Composição cuidadosa para tutores que buscam uma opção leve e rica em fibras para o dia a dia.",
    badge: "Fórmula leve",
    accent: "from-teal-600 to-emerald-900",
    sizes: "500 g · 1,5 kg",
  },
  {
    name: "NutriCoelho Junior",
    subtitle: "Filhotes",
    description: "Nutrição pensada para a fase de crescimento, com uma combinação completa de vitaminas e minerais.",
    badge: "Crescimento",
    accent: "from-amber-500 to-orange-700",
    sizes: "500 g · 1,5 kg",
  },
];

const benefits = [
  {
    icon: Wheat,
    title: "Fibras na medida certa",
    description: "Uma base alimentar equilibrada para complementar o feno e apoiar a rotina digestiva.",
  },
  {
    icon: ShieldCheck,
    title: "Ingredientes selecionados",
    description: "Composição desenvolvida com foco em qualidade, equilíbrio e cuidado diário.",
  },
  {
    icon: Heart,
    title: "Bem-estar todos os dias",
    description: "Nutrientes essenciais para uma rotina mais ativa, saudável e cheia de vitalidade.",
  },
];

const trustItems = [
  { icon: Truck, label: "Envio seguro", detail: "Embalagem protegida" },
  { icon: PackageCheck, label: "Compra prática", detail: "Escolha o tamanho ideal" },
  { icon: BadgeCheck, label: "Qualidade premium", detail: "Seleção cuidadosa" },
];

const selectionSteps = [
  ["01", "Identifique a fase", "Filhote, adulto ou um coelho com necessidades alimentares específicas."],
  ["02", "Confira a composição", "Priorize fibras, pellets uniformes e uma formulação adequada para coelhos."],
  ["03", "Faça a transição gradual", "Mudanças de alimentação devem ser progressivas para preservar a adaptação digestiva."],
];

function ProductBag({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <div className="relative mx-auto flex h-72 w-full max-w-[230px] items-end justify-center sm:h-80">
      <div className="absolute bottom-2 h-10 w-44 rounded-full bg-emerald-950/15 blur-2xl" />
      <div
        className={`relative flex h-64 w-48 flex-col overflow-hidden rounded-[1.8rem_1.8rem_2.2rem_2.2rem] border border-white/15 bg-gradient-to-br ${product.accent} p-5 text-white shadow-[0_28px_60px_-24px_rgba(6,78,59,0.7)] transition duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-1 sm:h-72 sm:w-52`}
      >
        <div className="absolute -right-9 -top-10 h-32 w-32 rounded-full border-[20px] border-white/10" />
        <div className="absolute -left-12 bottom-9 h-32 w-32 rounded-full bg-white/[0.06]" />
        <div className="absolute inset-x-5 top-3 h-px bg-white/20" />

        <div className="relative flex items-center justify-between">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/15 backdrop-blur">
            <Rabbit size={22} />
          </div>
          <span className="rounded-full border border-white/20 bg-black/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] backdrop-blur-sm">
            Premium
          </span>
        </div>

        <div className="relative mt-7">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/60">NutriCoelho</p>
          <h3 className="mt-2 text-2xl font-black leading-none tracking-tight">{product.subtitle}</h3>
        </div>

        <div className="relative mt-auto flex items-end justify-between border-t border-white/15 pt-4">
          <div>
            <p className="text-[11px] font-bold text-white/60">Ração completa</p>
            <p className="mt-1 text-sm font-black">Fibras + vitaminas</p>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-emerald-900 shadow-lg shadow-black/15">
            <Leaf size={20} />
          </div>
        </div>

        <span className="absolute bottom-3 right-4 text-[64px] font-black leading-none text-white/[0.035]">0{index + 1}</span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff9e8] text-[#17231b] selection:bg-emerald-900 selection:text-white">
      <div className="relative overflow-hidden bg-emerald-950 px-5 py-2.5 text-center text-xs font-bold tracking-wide text-emerald-50 sm:text-sm">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)]" />
        <span className="relative inline-flex items-center gap-2">
          <Sparkles size={14} className="text-amber-300" />
          Nutrição premium para uma rotina mais saudável e equilibrada
        </span>
      </div>

      <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-[#fff9e8]/90 shadow-[0_10px_35px_-28px_rgba(6,78,59,0.45)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
          <a
            href="#inicio"
            className="group flex items-center gap-3 rounded-2xl text-emerald-950 outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-900 text-white shadow-[0_10px_28px_-12px_rgba(6,78,59,0.8)] transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <Rabbit size={24} strokeWidth={2.4} />
            </span>
            <div>
              <span className="block text-xl font-black leading-none tracking-[-0.035em]">NutriCoelho</span>
              <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.22em] text-emerald-700 sm:text-[10px]">Premium nutrition</span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-emerald-950/[0.08] bg-white/55 p-1 text-sm font-bold text-stone-600 shadow-sm md:flex" aria-label="Navegação principal">
            <a className="rounded-full px-4 py-2 transition hover:bg-white hover:text-emerald-900" href="#produtos">Produtos</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white hover:text-emerald-900" href="#beneficios">Benefícios</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white hover:text-emerald-900" href="#como-escolher">Como escolher</a>
          </nav>

          <a
            href="#produtos"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-900 px-4 py-2.5 text-sm font-black text-white shadow-[0_12px_30px_-15px_rgba(6,78,59,0.75)] outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-950 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4 sm:px-5"
          >
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">Ver rações</span>
            <span className="sm:hidden">Comprar</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative scroll-mt-24 border-b border-emerald-950/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_13%_18%,rgba(253,224,71,0.3),transparent_30%),radial-gradient(circle_at_84%_28%,rgba(110,231,183,0.28),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(6,78,59,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[760px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 shadow-[0_8px_25px_-20px_rgba(6,78,59,0.6)] backdrop-blur sm:text-xs">
              <Leaf size={15} />
              Cuidado que começa pela alimentação
            </div>

            <h1 className="max-w-3xl text-[2.8rem] font-black leading-[0.98] tracking-[-0.055em] text-emerald-950 sm:text-6xl lg:text-[4.75rem]">
              Ração premium para coelhos que merecem o melhor.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:mt-7 sm:text-xl sm:leading-8">
              Fórmulas equilibradas, ricas em fibras e pensadas para diferentes fases da vida. Mais praticidade para você e mais cuidado na rotina do seu coelho.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#produtos"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-emerald-900 px-7 py-3.5 text-sm font-black text-white shadow-[0_18px_38px_-18px_rgba(6,78,59,0.75)] outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-950 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4"
              >
                Escolher minha ração
                <ArrowRight size={18} />
              </a>
              <a
                href="#como-escolher"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-emerald-950/15 bg-white/65 px-7 py-3.5 text-sm font-black text-emerald-950 shadow-sm outline-none backdrop-blur transition duration-300 hover:border-emerald-900/20 hover:bg-white focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4"
              >
                Qual é a ideal?
              </a>
            </div>

            <div className="mt-9 grid gap-3 text-sm font-bold text-stone-600 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-700" /> Fibras de qualidade</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-700" /> Vitaminas e minerais</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-700" /> Pellets uniformes</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
            <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-amber-300/35 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-emerald-300/45 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-emerald-950 p-1.5 shadow-[0_42px_95px_-40px_rgba(6,78,59,0.75)] sm:rounded-[2.75rem]">
              <div className="relative overflow-hidden rounded-[1.65rem] sm:rounded-[2.35rem]">
                <img
                  src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1400&q=88"
                  alt="Coelho em ambiente natural representando alimentação saudável"
                  className="h-[460px] w-full object-cover object-center sm:h-[620px]"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7">
                  <div className="max-w-sm rounded-[1.6rem] border border-white/15 bg-emerald-950/78 p-4 text-white shadow-2xl backdrop-blur-xl sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-300 sm:text-xs">Escolha premium</p>
                        <p className="mt-1 text-lg font-black sm:text-xl">NutriCoelho Select</p>
                      </div>
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-amber-300 text-emerald-950 shadow-lg shadow-black/15 sm:h-12 sm:w-12">
                        <Wheat size={24} />
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-emerald-50/75">Nutrição equilibrada para complementar o feno e a água fresca todos os dias.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-12 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-emerald-950/10 backdrop-blur sm:block">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-700">Alta fibra</p>
              <p className="mt-1 text-sm font-bold text-stone-600">Rotina equilibrada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-px border-y border-emerald-950/[0.07] bg-white/65 backdrop-blur">
        <div className="mx-auto grid max-w-7xl divide-y divide-emerald-950/[0.08] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
          {trustItems.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center justify-start gap-4 py-5 sm:justify-center sm:px-5 sm:py-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-emerald-900/10 bg-emerald-50 text-emerald-800 shadow-sm">
                <Icon size={21} />
              </div>
              <div>
                <p className="font-black text-emerald-950">{label}</p>
                <p className="mt-0.5 text-xs font-semibold text-stone-500">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="produtos" className="scroll-mt-24 bg-[#fffdf6] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                <span className="h-px w-7 bg-emerald-700/50" />
                Nossa linha
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-emerald-950 sm:text-5xl">A fórmula certa para cada fase.</h2>
              <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">Escolha de acordo com a idade e as necessidades do seu coelho. Em caso de dúvida, peça orientação ao médico-veterinário.</p>
            </div>
            <div className="max-w-md rounded-2xl border border-amber-300/60 bg-amber-50 px-5 py-3.5 text-sm font-bold leading-6 text-amber-950 shadow-sm">
              Feno de qualidade e água fresca continuam essenciais.
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-7">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="group relative overflow-hidden rounded-[2rem] border border-emerald-950/[0.08] bg-white p-5 shadow-[0_20px_55px_-38px_rgba(6,78,59,0.42)] transition duration-500 hover:-translate-y-1.5 hover:border-emerald-700/20 hover:shadow-[0_34px_70px_-36px_rgba(6,78,59,0.48)] sm:p-7"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 via-emerald-500 to-emerald-900 opacity-70" />
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-emerald-800/10 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-800 sm:text-[11px]">{product.badge}</span>
                  <span className="text-right text-[11px] font-bold text-stone-400 sm:text-xs">{product.sizes}</span>
                </div>

                <ProductBag product={product} index={index} />

                <div className="mt-1 border-t border-emerald-950/[0.07] pt-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700 sm:text-sm">{product.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-emerald-950">{product.name}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-stone-600">{product.description}</p>
                  <a
                    href="#como-escolher"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3.5 text-sm font-black text-white outline-none transition duration-300 hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4"
                  >
                    Ver detalhes
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="relative scroll-mt-24 overflow-hidden bg-emerald-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-600/25 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
              <span className="h-px w-7 bg-emerald-300/50" />
              Por que NutriCoelho
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Qualidade que aparece na rotina.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50/70 sm:text-lg sm:leading-8">Uma boa ração deve complementar uma alimentação rica em feno, água fresca e vegetais adequados, respeitando a orientação profissional.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/[0.08] sm:p-7"
              >
                <span className="absolute right-6 top-5 text-5xl font-black text-white/[0.035]">0{index + 1}</span>
                <div className="mb-7 grid h-13 w-13 place-items-center rounded-2xl border border-emerald-300/10 bg-emerald-400/15 text-emerald-300 shadow-inner">
                  <Icon size={25} />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-emerald-50/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-escolher" className="scroll-mt-24 bg-[#fff9e8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-amber-200/55 to-emerald-200/45 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-emerald-900 p-1.5 shadow-[0_34px_80px_-38px_rgba(6,78,59,0.65)] sm:rounded-[2.5rem]">
              <div className="relative overflow-hidden rounded-[1.65rem] sm:rounded-[2.1rem]">
                <img
                  src="https://images.unsplash.com/photo-1480554840075-72cbdabbf689?auto=format&fit=crop&w=1200&q=85"
                  alt="Coelho em área verde"
                  className="h-[430px] w-full object-cover sm:h-[520px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="max-w-md border-l-2 border-amber-300 pl-4">
                    <p className="text-xl font-black leading-tight text-white sm:text-2xl">Alimentação equilibrada é cuidado em cada detalhe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
              <span className="h-px w-7 bg-emerald-700/50" />
              Como escolher
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-emerald-950 sm:text-5xl">Três passos para acertar na compra.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">Observe a fase de vida, o peso e a rotina do seu coelho antes de escolher a fórmula. A quantidade diária também deve ser ajustada de forma individual.</p>

            <div className="mt-8 space-y-3.5">
              {selectionSteps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="group flex gap-4 rounded-2xl border border-emerald-950/[0.08] bg-white/80 p-4 shadow-[0_12px_35px_-28px_rgba(6,78,59,0.5)] backdrop-blur transition duration-300 hover:border-emerald-700/20 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(6,78,59,0.5)] sm:p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-950 text-sm font-black text-white shadow-md shadow-emerald-950/15 transition group-hover:bg-emerald-800">{number}</span>
                  <div>
                    <h3 className="font-black text-emerald-950">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9e8] pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-amber-100 via-[#fff6c7] to-emerald-100 px-6 py-10 shadow-[0_24px_60px_-42px_rgba(6,78,59,0.5)] sm:rounded-[2.5rem] sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[32px] border-white/35" />
            <div className="absolute -bottom-16 right-28 h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">Pronto para escolher?</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-emerald-950 sm:text-5xl">Encontre a ração ideal para o seu coelho.</h2>
              <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">Compare nossas fórmulas e escolha a opção que melhor combina com a fase e a rotina do seu pet.</p>
            </div>
            <a
              href="#produtos"
              className="relative mt-8 inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-950 px-8 py-3.5 text-sm font-black text-white shadow-[0_18px_35px_-18px_rgba(6,78,59,0.7)] outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4 lg:mt-0"
            >
              Ver todas as opções
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-950/[0.08] bg-[#fffdf6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 text-emerald-950">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-900 text-white shadow-md shadow-emerald-950/15"><Rabbit size={21} /></span>
            <div>
              <p className="font-black tracking-tight">NutriCoelho</p>
              <p className="text-xs font-semibold text-stone-500">Nutrição, equilíbrio e cuidado.</p>
            </div>
          </div>
          <p className="max-w-lg text-xs leading-5 text-stone-500 sm:text-right">A alimentação deve ser adequada às necessidades individuais do animal. Para recomendações específicas, consulte um médico-veterinário.</p>
        </div>
      </footer>
    </main>
  );
}

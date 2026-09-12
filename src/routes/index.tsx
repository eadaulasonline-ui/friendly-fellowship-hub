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

function ProductBag({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <div className="relative mx-auto flex h-72 w-full max-w-[230px] items-end justify-center">
      <div className="absolute bottom-3 h-8 w-40 rounded-full bg-emerald-950/15 blur-xl" />
      <div
        className={`relative flex h-64 w-48 flex-col overflow-hidden rounded-[1.6rem_1.6rem_2rem_2rem] bg-gradient-to-br ${product.accent} p-5 text-white shadow-[0_24px_50px_-18px_rgba(6,78,59,0.5)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1`}
      >
        <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full border-[18px] border-white/10" />
        <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-white/5" />
        <div className="relative flex items-center justify-between">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 backdrop-blur">
            <Rabbit size={22} />
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em]">
            Premium
          </span>
        </div>
        <div className="relative mt-7">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/65">NutriCoelho</p>
          <h3 className="mt-2 text-2xl font-black leading-none tracking-tight">{product.subtitle}</h3>
        </div>
        <div className="relative mt-auto flex items-end justify-between border-t border-white/15 pt-4">
          <div>
            <p className="text-xs font-bold text-white/65">Ração completa</p>
            <p className="mt-1 text-sm font-black">Fibras + vitaminas</p>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-emerald-900 shadow-lg">
            <Leaf size={20} />
          </div>
        </div>
        <span className="absolute bottom-3 right-4 text-[62px] font-black leading-none text-white/[0.035]">0{index + 1}</span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f5ee] text-[#162019]">
      <div className="bg-emerald-950 px-5 py-2.5 text-center text-xs font-bold tracking-wide text-emerald-50 sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <Sparkles size={14} className="text-amber-300" />
          Nutrição premium para uma rotina mais saudável e equilibrada
        </span>
      </div>

      <header className="relative z-30 border-b border-emerald-950/10 bg-[#f6f5ee]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3 text-emerald-950">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-800 text-white shadow-lg shadow-emerald-950/15">
              <Rabbit size={24} strokeWidth={2.4} />
            </span>
            <div>
              <span className="block text-xl font-black leading-none tracking-[-0.03em]">NutriCoelho</span>
              <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-700">Premium nutrition</span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-stone-600 md:flex" aria-label="Navegação principal">
            <a className="transition hover:text-emerald-800" href="#produtos">Produtos</a>
            <a className="transition hover:text-emerald-800" href="#beneficios">Benefícios</a>
            <a className="transition hover:text-emerald-800" href="#como-escolher">Como escolher</a>
          </nav>

          <a
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-900"
          >
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">Ver rações</span>
            <span className="sm:hidden">Comprar</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(167,243,208,0.38),transparent_28%),radial-gradient(circle_at_92%_22%,rgba(253,230,138,0.35),transparent_26%)]" />
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm backdrop-blur">
              <Leaf size={15} />
              Cuidado que começa pela alimentação
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.055em] text-emerald-950 sm:text-6xl lg:text-[4.8rem]">
              Ração premium para coelhos que merecem o melhor.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
              Fórmulas equilibradas, ricas em fibras e pensadas para diferentes fases da vida. Mais praticidade para você e mais cuidado na rotina do seu coelho.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-900"
              >
                Escolher minha ração
                <ArrowRight size={18} />
              </a>
              <a
                href="#como-escolher"
                className="inline-flex items-center justify-center rounded-full border border-emerald-950/15 bg-white/70 px-7 py-4 text-sm font-black text-emerald-950 transition hover:bg-white"
              >
                Qual é a ideal?
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-stone-600">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-700" /> Fibras de qualidade</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-700" /> Vitaminas e minerais</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-700" /> Pellets uniformes</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
            <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-amber-300/40 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-emerald-300/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-emerald-950 shadow-[0_40px_100px_-35px_rgba(6,78,59,0.65)]">
              <img
                src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1400&q=88"
                alt="Coelho em ambiente natural representando alimentação saudável"
                className="h-[560px] w-full object-cover object-center sm:h-[620px]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-sm rounded-[1.7rem] border border-white/15 bg-emerald-950/80 p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">Escolha premium</p>
                      <p className="mt-1 text-xl font-black">NutriCoelho Select</p>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-300 text-emerald-950">
                      <Wheat size={24} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-emerald-50/75">Nutrição equilibrada para complementar o feno e a água fresca todos os dias.</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-12 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="text-xs font-black uppercase tracking-[0.13em] text-emerald-700">Alta fibra</p>
              <p className="mt-1 text-sm font-bold text-stone-600">Rotina equilibrada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-950/10 bg-white/80">
        <div className="mx-auto grid max-w-7xl divide-y divide-emerald-950/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
          {trustItems.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center justify-center gap-4 py-6 sm:px-5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">
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

      <section id="produtos" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Nossa linha</span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-emerald-950 sm:text-5xl">A fórmula certa para cada fase.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">Escolha de acordo com a idade e as necessidades do seu coelho. Em caso de dúvida, peça orientação ao médico-veterinário.</p>
            </div>
            <div className="rounded-2xl bg-amber-100 px-5 py-3 text-sm font-bold text-amber-900">
              Feno de qualidade e água fresca continuam essenciais.
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.name} className="group rounded-[2.25rem] border border-stone-200 bg-[#fbfbf7] p-6 shadow-[0_18px_60px_-35px_rgba(6,78,59,0.3)] transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_30px_70px_-35px_rgba(6,78,59,0.45)] sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-emerald-800">{product.badge}</span>
                  <span className="text-xs font-bold text-stone-400">{product.sizes}</span>
                </div>
                <ProductBag product={product} index={index} />
                <div className="mt-2">
                  <p className="text-sm font-extrabold uppercase tracking-[0.13em] text-emerald-700">{product.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-emerald-950">{product.name}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-stone-600">{product.description}</p>
                  <a href="#como-escolher" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3.5 text-sm font-black text-white transition hover:bg-emerald-800">
                    Ver detalhes
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="relative overflow-hidden bg-emerald-950 py-20 text-white sm:py-24">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-700/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Por que NutriCoelho</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">Qualidade que aparece na rotina.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/70">Uma boa ração deve complementar uma alimentação rica em feno, água fresca e vegetais adequados, respeitando a orientação profissional.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">
                <div className="mb-7 grid h-13 w-13 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <Icon size={25} />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-emerald-50/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-escolher" className="bg-[#f6f5ee] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-emerald-900 shadow-[0_30px_80px_-35px_rgba(6,78,59,0.55)]">
            <img
              src="https://images.unsplash.com/photo-1480554840075-72cbdabbf689?auto=format&fit=crop&w=1200&q=85"
              alt="Coelho em área verde"
              className="h-[520px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="max-w-md text-2xl font-black leading-tight text-white">Alimentação equilibrada é cuidado em cada detalhe.</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Como escolher</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-emerald-950 sm:text-5xl">Três passos para acertar na compra.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">Observe a fase de vida, o peso e a rotina do seu coelho antes de escolher a fórmula. A quantidade diária também deve ser ajustada de forma individual.</p>

            <div className="mt-8 space-y-4">
              {[
                ["01", "Identifique a fase", "Filhote, adulto ou um coelho com necessidades alimentares específicas."],
                ["02", "Confira a composição", "Priorize fibras, pellets uniformes e uma formulação adequada para coelhos."],
                ["03", "Faça a transição gradual", "Mudanças de alimentação devem ser progressivas para preservar a adaptação digestiva."],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-4 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-sm font-black text-emerald-800">{number}</span>
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

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-200 via-amber-100 to-emerald-100 px-7 py-12 sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[32px] border-white/30" />
            <div className="relative max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">Pronto para escolher?</span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-emerald-950 sm:text-5xl">Encontre a ração ideal para o seu coelho.</h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">Compare nossas fórmulas e escolha a opção que melhor combina com a fase e a rotina do seu pet.</p>
            </div>
            <a href="#produtos" className="relative mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-950 px-8 py-4 text-sm font-black text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 lg:mt-0">
              Ver todas as opções
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-950/10 bg-[#f6f5ee]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 text-emerald-950">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-800 text-white"><Rabbit size={21} /></span>
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

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Wheat,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NutriCoelho | Rações para coelhos" },
      {
        name: "description",
        content:
          "Nutrição pensada para coelhos: rações equilibradas, ingredientes selecionados e opções para diferentes fases da vida.",
      },
      { property: "og:title", content: "NutriCoelho | Nutrição que cuida de verdade" },
      {
        property: "og:description",
        content: "Conheça uma linha de rações desenvolvida para o bem-estar diário dos coelhos.",
      },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: Wheat,
    title: "Fibras em destaque",
    text: "Uma alimentação pensada para acompanhar a rotina natural dos coelhos e complementar o consumo de feno.",
  },
  {
    icon: ShieldCheck,
    title: "Ingredientes selecionados",
    text: "Composição cuidadosa, sem excessos desnecessários e com foco em qualidade nutricional no dia a dia.",
  },
  {
    icon: HeartPulse,
    title: "Cuidado em cada fase",
    text: "Opções para crescimento, vida adulta e necessidades específicas, com escolhas mais simples para o tutor.",
  },
];

const products = [
  {
    tag: "Mais escolhida",
    name: "Essencial Adultos",
    description: "Equilíbrio para a rotina diária de coelhos adultos, com perfil rico em fibras e alta aceitação.",
    detail: "Uso diário",
    icon: Leaf,
  },
  {
    tag: "Cuidado especial",
    name: "Sensitive Balance",
    description: "Uma opção delicada para tutores que buscam uma composição simples e atenção redobrada à alimentação.",
    detail: "Fórmula equilibrada",
    icon: Sparkles,
  },
  {
    tag: "Primeiros meses",
    name: "Júnior Crescer",
    description: "Nutrição pensada para a fase de desenvolvimento, com praticidade para uma rotina alimentar bem organizada.",
    detail: "Fase de crescimento",
    icon: Sprout,
  },
];

const checkpoints = [
  "Ração como complemento de uma dieta rica em feno",
  "Água fresca disponível durante todo o dia",
  "Porções ajustadas à fase de vida e orientação veterinária",
  "Transição alimentar feita de forma gradual",
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ea] text-[#173b2c] selection:bg-[#d5e7a5] selection:text-[#173b2c]">
      <header className="sticky top-0 z-50 border-b border-[#173b2c]/10 bg-[#f7f4ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="NutriCoelho - início">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#2f6b4f] text-white shadow-sm">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <strong className="block text-base font-black tracking-[-0.03em]">NutriCoelho</strong>
              <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-[#6a7d70]">
                nutrição natural
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#52675b] md:flex" aria-label="Principal">
            <a className="transition hover:text-[#173b2c]" href="#beneficios">
              Benefícios
            </a>
            <a className="transition hover:text-[#173b2c]" href="#produtos">
              Nossas rações
            </a>
            <a className="transition hover:text-[#173b2c]" href="#cuidados">
              Alimentação
            </a>
          </nav>

          <a
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-[#173b2c] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#24513e]"
          >
            Ver linha
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#dceab7]/65 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#efc77a]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2f6b4f]/15 bg-white/70 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#2f6b4f] shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              cuidado começa pela alimentação
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#173b2c] sm:text-6xl lg:text-7xl">
              Ração de verdade para coelhos
              <span className="text-[#79a33a]"> felizes.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b6f63] sm:text-xl">
              Uma linha criada para tornar a escolha mais simples: bons ingredientes, fibras em destaque e opções para diferentes fases da vida do seu coelho.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2f6b4f] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_35px_rgba(47,107,79,0.22)] transition hover:-translate-y-1 hover:bg-[#285d45]"
              >
                Conhecer as rações
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#cuidados"
                className="inline-flex items-center justify-center rounded-2xl border border-[#173b2c]/15 bg-white/70 px-6 py-4 text-sm font-extrabold text-[#173b2c] transition hover:bg-white"
              >
                Guia de alimentação
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#607368]">
              {["Sem complicação", "Foco em fibras", "Rotina equilibrada"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#79a33a]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
            <div className="absolute -left-5 top-14 hidden rounded-3xl bg-[#173b2c] p-5 text-white shadow-2xl sm:block">
              <div className="flex items-center gap-1 text-[#f0c567]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-2 text-sm font-bold">Escolha com mais confiança</p>
              <p className="mt-1 text-xs text-white/65">Nutrição simples de entender</p>
            </div>

            <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-white p-3 shadow-[0_28px_70px_rgba(45,74,57,0.18)]">
              <div className="relative min-h-[540px] overflow-hidden rounded-[1.7rem] bg-[#d7dfbd]">
                <img
                  src="https://images.unsplash.com/photo-1753345687564-bf839640a69c?auto=format&fit=crop&fm=jpg&q=82&w=1400"
                  alt="Coelho branco se alimentando de feno"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102d22]/90 via-[#102d22]/45 to-transparent p-7 pt-28 text-white">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dceab7]">NutriCoelho</span>
                      <p className="mt-2 max-w-xs text-2xl font-black leading-tight">Uma rotina mais natural começa no comedouro.</p>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur-md">
                      <Leaf className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 rounded-3xl border border-[#173b2c]/10 bg-[#f7f4ea] px-5 py-4 shadow-xl sm:right-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#dceab7] text-[#2f6b4f]">
                  <PackageCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black">Escolha consciente</p>
                  <p className="text-xs text-[#66786d]">por fase e rotina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="border-y border-[#173b2c]/10 bg-white/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-[2rem] border border-[#173b2c]/10 bg-[#fbfaf5] p-7 shadow-sm">
                <div className="flex items-start justify-between gap-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e4edc8] text-[#2f6b4f]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-black tracking-[0.18em] text-[#98a59d]">0{index + 1}</span>
                </div>
                <h2 className="mt-6 text-xl font-black tracking-[-0.03em]">{title}</h2>
                <p className="mt-3 leading-7 text-[#65776c]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#79a33a]">Nossa linha</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">A escolha certa para cada momento.</h2>
          <p className="mt-5 text-lg leading-8 text-[#63766a]">
            Três propostas claras para facilitar a rotina alimentar e ajudar você a escolher com mais segurança.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map(({ tag, name, description, detail, icon: Icon }, index) => (
            <article
              key={name}
              className={`group relative overflow-hidden rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 ${
                index === 0
                  ? "border-[#2f6b4f] bg-[#2f6b4f] text-white shadow-[0_22px_50px_rgba(47,107,79,0.18)]"
                  : "border-[#173b2c]/10 bg-white text-[#173b2c] shadow-sm"
              }`}
            >
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${index === 0 ? "bg-white/10" : "bg-[#e4edc8]/65"}`} />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className={`rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] ${index === 0 ? "bg-white/12 text-[#e4edc8]" : "bg-[#edf2dd] text-[#557731]"}`}>
                    {tag}
                  </span>
                  <Icon className={`h-7 w-7 ${index === 0 ? "text-[#dceab7]" : "text-[#79a33a]"}`} aria-hidden="true" />
                </div>
                <h3 className="mt-9 text-2xl font-black tracking-[-0.035em]">{name}</h3>
                <p className={`mt-4 min-h-24 leading-7 ${index === 0 ? "text-white/72" : "text-[#66786d]"}`}>{description}</p>
                <div className={`mt-7 border-t pt-5 ${index === 0 ? "border-white/15" : "border-[#173b2c]/10"}`}>
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    {detail}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cuidados" className="bg-[#173b2c] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#cbe08f]">Mais que ração</span>
            <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">Uma boa alimentação é feita de equilíbrio.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              A ração faz parte da rotina, mas não trabalha sozinha. Feno de qualidade, água fresca e acompanhamento veterinário também são essenciais para o bem-estar do coelho.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#cbe08f] text-[#173b2c]">
                <Wheat className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-black">Checklist do tutor</p>
                <p className="text-sm text-white/50">Uma rotina simples e consistente</p>
              </div>
            </div>
            <div className="grid gap-3">
              {checkpoints.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.06] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#cbe08f]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#e2edbf] px-6 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
          <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[40px] border-white/25" />
          <div className="relative max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#557731]">NutriCoelho</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Seu coelho merece uma escolha mais cuidadosa todos os dias.</h2>
            <p className="mt-4 max-w-xl leading-7 text-[#58705f]">Conheça a linha e encontre a opção que mais combina com a fase de vida e a rotina do seu companheiro.</p>
          </div>
          <a
            href="#produtos"
            className="relative mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#173b2c] px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#24513e] lg:mt-0"
          >
            Escolher minha ração
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#173b2c]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-[#66786d] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-2 font-black text-[#173b2c]">
            <Leaf className="h-4 w-4" aria-hidden="true" />
            NutriCoelho
          </div>
          <p>Alimentação equilibrada, cuidado diário e muito carinho.</p>
        </div>
      </footer>
    </main>
  );
}

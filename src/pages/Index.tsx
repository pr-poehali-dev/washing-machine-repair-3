import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Zap",
    title: "Не включается",
    desc: "Диагностика и замена блока управления, кнопок, проводки",
    price: "от 990 ₽",
    time: "1–2 часа",
  },
  {
    icon: "Waves",
    title: "Течёт вода",
    desc: "Замена манжеты, сливного шланга, помпы, бака",
    price: "от 1 200 ₽",
    time: "1–3 часа",
  },
  {
    icon: "Volume2",
    title: "Шум и вибрация",
    desc: "Замена подшипников, амортизаторов, балансировочных грузов",
    price: "от 1 500 ₽",
    time: "2–4 часа",
  },
  {
    icon: "RotateCcw",
    title: "Не отжимает",
    desc: "Ремонт двигателя, щёток, таходатчика, платы",
    price: "от 1 100 ₽",
    time: "1–3 часа",
  },
  {
    icon: "Flame",
    title: "Не греет воду",
    desc: "Замена нагревательного элемента (ТЭН), термостата",
    price: "от 890 ₽",
    time: "1–2 часа",
  },
  {
    icon: "Lock",
    title: "Не открывается люк",
    desc: "Замена замка люка, ручки, петель, ремонт блокировки",
    price: "от 750 ₽",
    time: "30–60 мин",
  },
];

const guarantees = [
  { icon: "ShieldCheck", title: "Гарантия 12 месяцев", desc: "На все виды выполненных работ" },
  { icon: "Package", title: "Гарантия на запчасти", desc: "Оригинальные детали с гарантией 6–24 месяца" },
  { icon: "FileText", title: "Официальный договор", desc: "Заключаем договор с фиксированной стоимостью" },
  { icon: "RefreshCw", title: "Бесплатный повторный выезд", desc: "Если неисправность повторилась — устраним бесплатно" },
];

const brands = ["Samsung", "LG", "Bosch", "Indesit", "Candy", "Whirlpool", "Haier", "Beko", "Ariston", "Zanussi"];

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1e] font-golos text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ff5f1f] flex items-center justify-center">
              <Icon name="Wrench" size={16} className="text-white" />
            </div>
            <span className="font-oswald text-lg font-bold tracking-wide">ТехНадежно</span>
          </div>
          <a
            href="tel:+79131916828"
            className="flex items-center gap-2 bg-[#ff5f1f] hover:bg-[#e54e0e] transition-colors px-4 py-2 rounded-lg text-sm font-semibold text-white"
          >
            <Icon name="Phone" size={14} />
            +7 913 191-68-28
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/73515dab-4493-4394-bdd6-b544f8ce9610/files/e38381b2-fbc8-49ae-84bf-586cdc4f3d85.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
        </div>

        <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#ff5f1f]/10 z-0" />
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#ff5f1f]/15 z-0" />
        <div className="absolute right-[50px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#ff5f1f]/5 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20">
          <div
            className="max-w-xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-[#ff5f1f]/15 border border-[#ff5f1f]/30 rounded-full px-4 py-1.5 text-sm text-[#ff5f1f] font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff5f1f] animate-pulse" />
              Выезд мастера от 30 минут
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              РЕМОНТ<br />
              <span className="text-[#ff5f1f]">СТИРАЛЬНЫХ</span><br />
              МАШИН
            </h1>

            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Профессиональный ремонт любых марок. Диагностика бесплатно при заказе ремонта. Гарантия на все работы.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+79131916828"
                className="flex items-center justify-center gap-3 bg-[#ff5f1f] hover:bg-[#e54e0e] active:scale-95 transition-all px-8 py-4 rounded-xl text-white font-bold text-lg shadow-[0_0_40px_rgba(255,95,31,0.35)]"
              >
                <Icon name="Phone" size={20} />
                Вызвать мастера
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 active:scale-95 transition-all px-8 py-4 rounded-xl text-white font-semibold text-lg"
              >
                Наши услуги
                <Icon name="ArrowRight" size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { val: "2 000+", label: "Ремонтов в год" },
                { val: "10 лет", label: "Опыт работы" },
                { val: "12 мес.", label: "Гарантия" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-oswald text-3xl font-bold text-[#ff5f1f]">{s.val}</div>
                  <div className="text-white/50 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff5f1f]/30 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="text-[#ff5f1f] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Что мы ремонтируем</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold">НАШИ УСЛУГИ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="relative group cursor-pointer rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-[#ff5f1f]/40 transition-all duration-300 p-6 overflow-hidden flex flex-col"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,95,31,0.08) 0%, transparent 70%)" }}
                />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#ff5f1f]/10 border border-[#ff5f1f]/20 flex items-center justify-center mb-4 group-hover:bg-[#ff5f1f]/20 transition-colors">
                    <Icon name={s.icon} size={22} className="text-[#ff5f1f]" />
                  </div>
                  <h3 className="font-oswald text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#ff5f1f] font-bold text-lg">{s.price}</span>
                    <span className="text-white/30 text-sm flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {s.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm mb-4">Не нашли свою неисправность?</p>
            <a
              href="tel:+79131916828"
              className="inline-flex items-center gap-2 text-[#ff5f1f] hover:text-[#ff7a47] font-semibold transition-colors"
            >
              Позвоните — поможем разобраться
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#0d1326] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="text-[#ff5f1f] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Просто и быстро</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold">КАК МЫ РАБОТАЕМ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", icon: "Phone", title: "Звонок", desc: "Опишите проблему по телефону или в форме" },
              { num: "02", icon: "Clock", title: "Выезд", desc: "Мастер приедет в удобное для вас время" },
              { num: "03", icon: "Search", title: "Диагностика", desc: "Определим неисправность и озвучим стоимость" },
              { num: "04", icon: "CheckCircle", title: "Ремонт", desc: "Устраним поломку, выдадим гарантийный талон" },
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#ff5f1f]/40 to-transparent z-0 -translate-x-4" />
                )}
                <div className="relative z-10">
                  <div className="text-[#ff5f1f]/20 font-oswald text-6xl font-bold leading-none mb-4">{step.num}</div>
                  <div className="w-12 h-12 rounded-xl bg-[#ff5f1f]/10 flex items-center justify-center mb-4">
                    <Icon name={step.icon} size={22} className="text-[#ff5f1f]" />
                  </div>
                  <h3 className="font-oswald text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff5f1f]/30 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="text-[#ff5f1f] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Ваша уверенность</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold">НАША ГАРАНТИЯ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/8 hover:border-[#ff5f1f]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ff5f1f]/10 border border-[#ff5f1f]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff5f1f]/20 transition-colors">
                  <Icon name={g.icon} size={24} className="text-[#ff5f1f]" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-semibold mb-1">{g.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#ff5f1f]/15 to-[#ff5f1f]/5 border border-[#ff5f1f]/25 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#ff5f1f] flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={30} className="text-white" />
              </div>
              <div>
                <div className="font-oswald text-2xl font-bold mb-1">Гарантийный талон от ТехНадежно</div>
                <div className="text-white/50 text-sm">После каждого ремонта выдаём официальный документ с подписью мастера</div>
              </div>
            </div>
            <a
              href="tel:+79131916828"
              className="flex-shrink-0 flex items-center gap-3 bg-[#ff5f1f] hover:bg-[#e54e0e] transition-colors px-7 py-4 rounded-xl font-bold text-white shadow-[0_0_30px_rgba(255,95,31,0.3)] whitespace-nowrap"
            >
              <Icon name="Phone" size={18} />
              Вызвать мастера
            </a>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-16 bg-[#0d1326] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="text-white/40 text-sm uppercase tracking-[0.2em]">Ремонтируем все популярные марки</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((b) => (
              <div
                key={b}
                className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-colors font-medium text-white/60 hover:text-white/90 text-sm"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff5f1f]/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#ff5f1f]/5 blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ГОТОВЫ ПОЧИНИТЬ<br />
            <span className="text-[#ff5f1f]">ВАШУ МАШИНУ?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Звоните прямо сейчас. Мастер приедет в течение часа. Диагностика бесплатно.
          </p>
          <a
            href="tel:+79131916828"
            className="inline-flex items-center gap-3 bg-[#ff5f1f] hover:bg-[#e54e0e] active:scale-95 transition-all px-10 py-5 rounded-xl text-white font-bold text-xl shadow-[0_0_60px_rgba(255,95,31,0.4)]"
          >
            <Icon name="Phone" size={22} />
            +7 913 191-68-28
          </a>
          <p className="text-white/30 text-sm mt-4">Звонок бесплатный · Работаем без выходных</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#ff5f1f] flex items-center justify-center">
              <Icon name="Wrench" size={14} className="text-white" />
            </div>
            <span className="font-oswald font-bold tracking-wide">ТехНадежно</span>
          </div>
          <p className="text-white/30 text-sm">© 2026 ТехНадежно. Профессиональный ремонт стиральных машин</p>
        </div>
      </footer>
    </div>
  );
}
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/5b13f599-3cf9-4a30-9cd6-c31975191a30/files/d11ed65d-ecf4-4684-8220-b98672336534.jpg";

const timelineSteps = [
  {
    period: "1 день",
    dotColor: "bg-amber-400",
    borderColor: "border-amber-400",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    icon: "AlertTriangle",
    consequences: [
      "Блокируются расходные операции по карте: оплата в магазинах, переводы, снятие наличных",
      "В течение 2 рабочих дней информация передаётся в Бюро кредитных историй (БКИ)",
    ],
  },
  {
    period: "2–60 дней",
    dotColor: "bg-orange-500",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    icon: "PhoneCall",
    consequences: [
      "Мы свяжемся с вами по телефону, SMS или пуш-уведомлению",
      "Не игнорируйте наши сообщения — свяжитесь сами, мы найдём решение именно для вас",
    ],
  },
  {
    period: "61 день и более",
    dotColor: "bg-red-600",
    borderColor: "border-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    icon: "FileText",
    consequences: [
      "Возможно направление досудебного уведомления",
      "Даже на этом этапе мы продолжаем диалог — наша цель не взыскание, а совместное решение",
    ],
  },
];

const solutions = [
  {
    icon: "CheckCircle",
    title: "Погасить полностью",
    desc: "Подскажем удобные способы оплаты: онлайн-перевод, оплата через приложение или в офисе банка.",
  },
  {
    icon: "Coins",
    title: "Частичный платёж",
    desc: "Даже небольшая сумма покажет вашу готовность решить вопрос и поможет избежать дальнейших последствий.",
  },
  {
    icon: "Handshake",
    title: "Индивидуальное решение",
    desc: "У нас есть программы поддержки: гибкий график, отсрочка платежа или реструктуризация долга.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f4f6f9] font-golos">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#1e4fa0]">
            <a href="#" className="hover:underline">Главная</a>
            <Icon name="ChevronRight" size={14} className="text-gray-400" />
            <a href="#" className="hover:underline">Помощь клиентам</a>
            <Icon name="ChevronRight" size={14} className="text-gray-400" />
            <span className="text-gray-500">Просроченная задолженность</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#f4f6f9]">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 max-w-xl">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-[#1a1a2e] uppercase leading-tight mb-5">
              Что будет,<br />если я не<br />оплачу?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-7">
              Мы понимаем — жизнь не всегда идёт по плану. Главное — не оставлять
              ситуацию без внимания. Мы готовы предложить индивидуальные условия,
              чтобы помочь вернуться к финансовой стабильности.
            </p>
            <div className="bg-[#1e2d5a] text-white rounded-sm px-6 py-4 inline-flex flex-col gap-1">
              <span className="font-oswald font-semibold text-lg uppercase tracking-wide">
                Мы работаем круглосуточно
              </span>
              <span className="text-blue-300 text-sm">
                Свяжитесь удобным способом — мы поможем
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 md:w-72 overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Специалист банка готов помочь"
              className="w-full object-cover object-top"
              style={{ maxHeight: 360 }}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-oswald font-semibold text-3xl text-[#2c3e6b] mb-2">
            Что происходит при просрочке?
          </h2>
          <p className="text-gray-500 mb-10 text-base">
            Знайте последствия на каждом этапе — и обращайтесь к нам как можно раньше
          </p>

          {/* Progress bar */}
          <div className="hidden md:flex items-center mb-10 relative">
            <div className="absolute left-7 right-7 top-7 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 z-0" />
            {timelineSteps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                <div className={`w-14 h-14 rounded-full ${step.dotColor} flex items-center justify-center shadow-md`}>
                  <Icon name={step.icon} fallback="AlertCircle" size={22} className="text-white" />
                </div>
                <span className={`font-oswald font-bold text-base uppercase mt-2 ${step.textColor}`}>
                  {step.period}
                </span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {timelineSteps.map((step, i) => (
              <div key={i} className={`${step.bgColor} border-l-4 ${step.borderColor} rounded-sm p-5`}>
                {/* Mobile: show icon+period here */}
                <div className="md:hidden flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${step.dotColor} flex items-center justify-center`}>
                    <Icon name={step.icon} fallback="AlertCircle" size={18} className="text-white" />
                  </div>
                  <span className={`font-oswald font-bold text-lg uppercase ${step.textColor}`}>
                    {step.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {step.consequences.map((c, j) => (
                    <li key={j} className="flex gap-2 text-gray-700 text-sm leading-relaxed">
                      <Icon name="ArrowRight" size={14} className="text-gray-400 flex-shrink-0 mt-1" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#eef2f8] rounded-sm p-5 flex gap-3 items-start">
            <Icon name="Info" size={20} className="text-[#1e4fa0] flex-shrink-0 mt-0.5" />
            <p className="text-[#2c3e6b] text-sm leading-relaxed">
              <strong>Важно:</strong> Не игнорируйте наши сообщения. Свяжитесь с нами самостоятельно —
              мы обязательно найдём решение, подходящее именно вам. Даже на позднем этапе
              наша цель — помочь, а не взыскать.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#f4f6f9] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-oswald font-semibold text-3xl text-[#2c3e6b] mb-2">
            Что вы можете сделать прямо сейчас?
          </h2>
          <p className="text-gray-500 mb-10 text-base">
            Ваша ситуация — не приговор. Мы готовы работать с вами, чтобы найти выход
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-sm p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-[#1e2d5a] rounded-sm flex items-center justify-center mb-5">
                  <Icon name={s.icon} fallback="CircleCheck" size={22} className="text-white" />
                </div>
                <h3 className="font-oswald font-semibold text-xl text-[#1a1a2e] mb-3 uppercase">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="bg-[#1e2d5a] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="font-oswald font-bold text-3xl text-white mb-2 uppercase">
                Свяжитесь с нами
              </h2>
              <p className="text-blue-200 text-base mb-8">
                Мы готовы ответить круглосуточно, 24/7 — выберите удобный способ
              </p>

              <div className="space-y-4">
                <a
                  href="tel:88001001545"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-sm px-6 py-4 group"
                >
                  <div className="w-11 h-11 bg-[#d0021b] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-oswald font-semibold text-xl text-white tracking-wide">
                      8 800 100-15-45
                    </div>
                    <div className="text-blue-300 text-xs mt-0.5">
                      Бесплатно по России • Круглосуточно
                    </div>
                  </div>
                  <Icon name="ArrowRight" size={18} className="text-blue-300 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-4 bg-white/10 rounded-sm px-6 py-4">
                  <div className="w-11 h-11 bg-white/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-oswald font-semibold text-lg text-white">
                      Онлайн-чат на сайте
                    </div>
                    <div className="text-blue-300 text-xs mt-0.5">
                      Доступен на сайте и в мобильном приложении
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 rounded-sm px-6 py-4">
                  <div className="w-11 h-11 bg-white/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Smartphone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-oswald font-semibold text-lg text-white">
                      Чат-бот в приложении MAX
                    </div>
                    <div className="text-blue-300 text-xs mt-0.5">
                      Ответит мгновенно в любое время суток
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-72 bg-white/5 border border-white/10 rounded-sm p-7 flex-shrink-0">
              <div className="flex items-center gap-3 mb-5">
                <Icon name="ShieldCheck" size={28} className="text-[#d0021b]" />
                <span className="font-oswald font-semibold text-white text-xl uppercase">
                  Первым делом
                </span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                Если у вас появилась просроченная задолженность — не игнорируйте её.
                Обратитесь к нам самостоятельно. Чем раньше, тем больше вариантов
                решения мы сможем предложить.
              </p>
              <div className="border-t border-white/10 pt-5">
                <div className="font-oswald text-white text-base font-semibold mb-1">
                  Режим работы
                </div>
                <div className="text-blue-200 text-sm">
                  Круглосуточно, без выходных
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-[#15213f] py-4">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-400 text-xs text-center">
            Информация носит ознакомительный характер. По всем вопросам обращайтесь в службу поддержки банка.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
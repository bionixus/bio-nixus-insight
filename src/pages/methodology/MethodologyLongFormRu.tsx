import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export const METHODOLOGY_RU_FAQ = [
  {
    question: 'Использует ли BioNixus одну методологию для исследований здравоохранения и потребления?',
    answer:
      'Да — каркас управления один: дизайн от решения, проверенная выборка, полевые протоколы, многоступенчатая валидация, этика и отчёт для тех, кто действует. Меняются респонденты, кодексы и детализация таблиц. В здравоохранении мы набираем врачей, плательщиков и больничные аккаунты по правилам BHBIA, EphMRA и фармаконадзора. В потреблении — покупателей, категорийных байеров и именованные розничные аккаунты по ESOMAR и местным кодексам.',
  },
  {
    question: 'Как вы проверяете выборки в здравоохранении?',
    answer:
      'Панелисты здравоохранения проходят проверку лицензии по реестрам регуляторов, подтверждение специальности и проверку места практики по справочникам учреждений. Мы набираем из проверенных врачебных баз, больничных регистров и списков профессиональных обществ — не из открытых интернет-пулов. Ежеквартальное обновление исключает переехавших или вышедших на пенсию врачей.',
  },
  {
    question: 'Как вы строите выборку в потреблении и традиционной торговле?',
    answer:
      'Потребительские выборки строятся вокруг аккаунтов и каналов, где реально движется объём — современная торговля, независимые аптеки и бакалеи, бакалы и именованные дистрибьюторы — плюс квоты покупателей и категорийных байеров, если бриф требует данных корзины. Скринеры проверяются до поля. Mystery shop, визиты на аккаунты и перехваты используются, когда синдицированная панель недобирает канал.',
  },
  {
    question: 'Какие контроли качества действуют в поле?',
    answer:
      'Каждый проект идёт по протоколу сроков рекрутинга, соответствующих гонораров, окон записи и эскалации недобора квот. Количественные опросы мониторятся в реальном времени по длительности, отсеву и «прямым» ответам. Качественные сессии записываются с согласия, расшифровываются и разбираются в течение 24 часов. Многострановые исследования проводят ежедневные стендапы, чтобы ловить сдвиг перевода или рекрутинга.',
  },
  {
    question: 'Как обрабатываются GDPR и местная защита данных?',
    answer:
      'Проекты работают по GDPR, UK Data Protection Act, рекомендациям ESOMAR и местным законам, включая PDPL Саудовской Аравии, федеральный закон ОАЭ о данных и требования CITRA Кувейта. Работа в здравоохранении также следует BHBIA и EphMRA. Согласие берётся до сбора, данные псевдонимизируются, идентифицирующая информация не передаётся клиенту без дополнительного согласия на follow-up.',
  },
  {
    question: 'Что входит в методологический отчёт BioNixus?',
    answer:
      'Каждый пакет открывается ключевыми выводами и рекомендуемыми действиями, затем идут подтверждающие данные. Количественные пакеты включают таблицы выборки, взвешивание, доверительные интервалы и анкету. Качественные — тематический анализ с анонимизированными цитатами. Трекеры могут включать дашборды. Досье здравоохранения могут содержать приложения для HTA; потребительские пакеты — разрезы бренда и торговли, которые директор по маркетингу отнесёт коммерческому директору.',
  },
] as const;

const THEATRE_ROWS = [
  {
    cut: 'С кем мы говорим',
    healthcare: 'Врачи, плательщики, KOL, больничные и аптечные аккаунты',
    consumer: 'Покупатели, категорийные байеры, ритейл, дистрибьюторы, традиционная торговля',
  },
  {
    cut: 'Как мы их находим',
    healthcare: 'Реестры лицензий, больничные сети, профессиональные общества',
    consumer: 'Именованные аккаунты, торговые списки, перехваты, mystery shop, повторный контакт с согласия',
  },
  {
    cut: 'Кодексы, которые связывают работу',
    healthcare: 'BHBIA, EphMRA, фармаконадзор, гонорары по справедливой рыночной стоимости',
    consumer: 'ESOMAR, местные кодексы потребительских исследований, аудируемые стимулы',
  },
  {
    cut: 'Что пакет должен выдержать',
    healthcare: 'Медицинская, access- и HTA-проверка',
    consumer: 'Проверку бренда, торговли и коммерческого директора',
  },
] as const;

export function MethodologyLongFormRu({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="premium-home-ivory section-padding py-16 md:py-20" id="two-theatres" aria-labelledby="two-theatres-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <PremiumEyebrow>Один каркас</PremiumEyebrow>
            <h2
              id="two-theatres-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              Здравоохранение и потребление делят метод, не респондента
            </h2>
            <p className="mt-5 max-w-3xl font-light leading-relaxed text-[#7A7267]">
              BioNixus — компания первичных исследований. Те же шесть контролей — дизайн, выборка, поле, валидация, этика и отчёт —
              работают на брифе{' '}
              <Link to={p('/healthcare-market-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                исследований рынка здравоохранения
              </Link>{' '}
              и на брифе потребления или{' '}
              <Link to={p('/bionixus-industries')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                отрасли
              </Link>
              . Меняется, кто в выборке, какой кодекс регулирует гонорар и насколько мелко режутся таблицы.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.05)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Как методология BioNixus применяется в здравоохранении и потреблении</caption>
              <thead>
                <tr className="bg-[#06101F] text-[#FFFEFB]">
                  <th scope="col" className="px-5 py-4 font-medium">
                    Контроль
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium text-white/70">
                    Здравоохранение
                  </th>
                  <th scope="col" className="border-l border-[#C9A84C]/30 px-5 py-4 font-medium text-[#C9A84C]">
                    Потребление и другие отрасли
                  </th>
                </tr>
              </thead>
              <tbody>
                {THEATRE_ROWS.map((row, index) => (
                  <tr key={row.cut} className={index % 2 === 0 ? 'bg-[#FFFEFB]' : 'bg-[#F4F2ED]/60'}>
                    <th scope="row" className="px-5 py-4 align-top font-medium text-[#0C1B33]">
                      {row.cut}
                    </th>
                    <td className="px-5 py-4 align-top font-light leading-relaxed text-[#7A7267]">{row.healthcare}</td>
                    <td className="border-l border-[#C9A84C]/15 px-5 py-4 align-top font-light leading-relaxed text-[#0C1B33]">
                      {row.consumer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="research-design" aria-labelledby="research-design-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">01</PremiumEyebrow>
          <h2
            id="research-design-heading"
            className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
          >
            Принципы дизайна исследования
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Каждый проект начинается с перевода коммерческого вопроса в то, на что исследование реально может ответить. Мы садимся с теми,
            кто будет пользоваться доказательствами — бренд, medical и access на брифе здравоохранения; бренд, категория и торговля на
            потребительском — и фиксируем цели достаточно конкретные для решения, но гибкие, чтобы скорректировать курс, если ранние
            данные указывают иначе. Исследование вокруг неверного вопроса быстро, дёшево и бесполезно.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Количественное</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Структурированные анкеты, валидированные шкалы, conjoint или MaxDiff, когда важны компромиссы — выбор лечения врачом или
                выбор упаковки покупателем. Инструменты проходят когнитивный претест минимум с пятью респондентами.{' '}
                <Link to={p('/services/quantitative-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                  Количественные исследования
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Качественное</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Полуструктурированные гайды с логикой дерева решений. Здравоохранение: интервью с врачами, payer-борды, больничная
                этнография. Потребление: глубины с покупателями, интервью с ритейлом и дистрибьюторами, наблюдение в магазине.{' '}
                <Link to={p('/services/qualitative-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                  Качественные исследования
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Смешанный метод</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Когда брифу нужны и статистическая зернистость, и объяснительная глубина — исследование запуска с опросом 200 врачей и
                глубинами со специалистами, или категорийное исследование с опросом покупателей и визитами на именованные аккаунты,
                которых нет в синдицированной ленте.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="sampling-frameworks" aria-labelledby="sampling-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>02</PremiumEyebrow>
          <h2 id="sampling-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Рамки выборки и управление её размером
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Качество выборки определяет достоверность любого инсайта. Выборки здравоохранения берутся из собственных профессиональных панелей
            в 17+ рынках EMEA и ССАГПЗ плюс аккредитованные партнёры ESOMAR и BHBIA. Потребительские и отраслевые выборки строятся вокруг
            аккаунтов и каналов брифа — не из открытого интернет-пула.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">Здравоохранение</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">Источники панели</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                <p>
                  <strong className="font-medium text-[#0C1B33]">Проверка лицензии.</strong> Рекрутинг из регуляторных баз — DHA Дубай,
                  DOH Абу-Даби, SFDA Саудовская Аравия, MOHAP ОАЭ и MOH Кувейт — чтобы у каждого панелиста были проверяемые лицензия,
                  специальность и место практики до первого контакта.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Больничные сети.</strong> Специализированные направления через
                  координаторов в SEHA, Mediclinic, Aster, NMC, Cleveland Clinic Abu Dhabi и Saudi German Hospital.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Профессиональные ассоциации.</strong> Списки обществ сверяются с
                  лицензионными реестрами, чтобы членство никогда не стояло отдельно.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Трёхслойная валидация.</strong> Лицензия, специальность и место практики.
                  Ежеквартальное обновление исключает переехавших или вышедших на пенсию врачей.
                </p>
              </div>
            </div>
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#0EA5A0]">Потребление и отрасли</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">Источники по аккаунту и каналу</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                <p>
                  <strong className="font-medium text-[#0C1B33]">Именованные аккаунты.</strong> Ритейл, дистрибьюторы, независимые аптеки,
                  бакалеи и бакалы отбираются там, где движется объём — зерно, которое ленты вроде{' '}
                  <Link to={p('/nielsen-alternative')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    Nielsen
                  </Link>{' '}
                  и{' '}
                  <Link to={p('/gfk-alternative-egypt')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    GfK
                  </Link>{' '}
                  обычно пропускают. См.{' '}
                  <Link to={p('/account-level-market-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    исследования на уровне аккаунта
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Квоты покупателей и байеров.</strong> Категорийные байеры и домашние
                  покупатели набираются под SKU, канал и город брифа — не национальное среднее, которое прячет аккаунт.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Mystery shop и перехват.</strong> Когда вопрос — что происходит на полке,
                  у прилавка или в традиционной торговле.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Повторный контакт с согласия.</strong> Проверенные респонденты прошлых волн,
                  согласившиеся на новый контакт, — самый быстрый путь, когда сроки критичны.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Размер выборки считается под заранее заданную статистическую мощность. Для большинства количественных программ мы целимся в
            минимум ±5% погрешности при 95% доверии в каждой отчётной подгруппе. Если совокупность мала — специалисты по редким болезням,
            члены национального формуляра или короткий список key-account байеров — применяем набор по типу переписи и корректируем
            анализ под меньшую базу.
          </p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="fieldwork-governance" aria-labelledby="fieldwork-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">03</PremiumEyebrow>
          <h2 id="fieldwork-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Управление полем и контроли качества
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Поле — место, где методология встречается с операционной дисциплиной. Каждый проект — здравоохранение или потребление — идёт
            по протоколу сроков рекрутинга, гонораров (в рамках отраслевого кодекса), окон записи и эскалации недобора квот.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Количественные опросы включают дашборды в реальном времени по завершению, медиане времени, отсеву и «прямым» ответам. Анкеты,
            которые стабильно заканчиваются менее чем за треть ожидаемой медианы, помечаются и исключаются при провале качества.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Качественное поле записывается с согласия и расшифровывается дословно. Модераторы сдают дебриф в течение 24 часов.
            Многострановые исследования имеют центрального менеджера и ежедневные стендапы с локальными командами.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Поддержка{' '}
            <Link to={p('/services/clinical-trial-support')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              клинических исследований
            </Link>{' '}
            идёт по тому же каркасу, с дополнительными контролями идентификации площадок и профиля исследователей. Волны mystery shop и
            визитов на аккаунты — с логами выбора магазина и наличия SKU.
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="data-validation" aria-labelledby="validation-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>04</PremiumEyebrow>
          <h2 id="validation-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Валидация данных и контроль качества с ИИ
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Сырые данные проходят многоступенчатый конвейер валидации. Первый этап автоматический: алгоритмы ловят дубли ID, невозможные
            сочетания и статистически аномальные паттерны ответов.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Второй этап ведёт аналитик. Старший исследователь сверяет помеченные записи с данными рекрутинга и при необходимости связывается
            с респондентом. Неподтверждённые записи удаляются с документированным обоснованием.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Контроль качества с ИИ добавляет третий слой. Языковые модели оценивают открытые ответы на связность, релевантность и
            минимальную длину. Качественные транскрипты проходят тематическое моделирование. Машинные темы затем валидирует аналитическая
            команда — ИИ ускоряет поиск паттернов; каждый интерпретационный вывод проверяет человек.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Клиенты получают наборы данных, на которые можно опираться во внутренних решениях и, на брифах здравоохранения, в регуляторных
            или HTA-подачах. Как доказательства питают{' '}
            <Link to={p('/services/market-access')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              доступ на рынок и HTA-стратегию
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="ethics-compliance" aria-labelledby="ethics-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">05</PremiumEyebrow>
          <h2 id="ethics-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Этика, GDPR и отраслевые кодексы
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Каждый проект BioNixus работает по GDPR, UK Data Protection Act, рекомендациям ESOMAR и местному закону о защите данных —
            включая PDPL Саудовской Аравии, федеральный закон ОАЭ и требования CITRA Кувейта. Этот пол действует и для здравоохранения, и
            для потребления.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Программы здравоохранения добавляют Legal &amp; Ethical Guidelines BHBIA и кодекс EphMRA. Исследования, которые касаются
            данных пациентов — даже косвенно через записи, сообщённые врачами — проходят этическую экспертизу, где это требуется.
            Сообщение о нежелательных явлениях брифуется каждому модератору, с эскалацией за 24 часа в фармаконадзор клиента.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Потребительские и отраслевые программы остаются в рамках ESOMAR и применимого местного кодекса. Стимулы проходят по
            аудируемым каналам. Гонорары в здравоохранении дополнительно сверяются с ориентирами справедливой рыночной стоимости.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Согласие берётся до сбора, на предпочтительном языке респондента. Персональные данные псевдонимизируются и хранятся на
            зашифрованных серверах в ЕС.
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="reporting-standards" aria-labelledby="reporting-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>06</PremiumEyebrow>
          <h2 id="reporting-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Стандарты отчётности и структура пакетов
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Инсайт не имеет ценности, пока не дойдёт до тех, кто действует. Отчёты открываются тремя–пятью ключевыми выводами и
            рекомендуемыми действиями — до подтверждающих данных. Это верно и для директора по маркетингу потребительского бренда, и для
            лида по доступу при запуске терапии.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Количественные отчёты включают методологические приложения — состав выборки, взвешивание, доверительные интервалы и анкету.
            Качественные представляют тематический анализ с анонимизированными цитатами.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Стандартные пакеты включают интерактивные дашборды для трекеров, исполнительные слайды и технические приложения. Пакеты
            здравоохранения можно резать под HTA. Потребительские — под решения бренда, торговли и SKU. Для{' '}
            <Link to={p('/services/competitive-intelligence')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              конкурентной разведки
            </Link>{' '}
            мы даём мониторинговые отчёты с обновлениями по алертам.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Все отчёты проходят двухэтапную внутреннюю проверку — аналитик на точность данных, старший директор на стратегическую
            согласованность.{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              Картирование KOL и стейкхолдеров
            </Link>{' '}
            следует тому же протоколу, с дополнительной визуализацией сетей влияния.
          </p>
        </div>
      </section>

      <div className="premium-home-cream">
        <FAQSection
          premium
          title="Часто задаваемые вопросы"
          items={[...METHODOLOGY_RU_FAQ]}
          className="section-padding py-16 md:py-20"
        />
      </div>
    </>
  );
}

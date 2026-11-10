import appIcon from './assets/app-icon.webp'
import { PhoneMockup } from './components/PhoneMockup'
import { StoreBadges } from './components/StoreBadges'
import { copy, type Lang } from './i18n'
import { galleryScreens, heroScreens } from './data/screens'
import { useReveal } from './hooks/useReveal'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 rounded-lg" aria-label="EventLighter">
      <img src={appIcon} width={30} height={30} alt="" className="h-[30px] w-[30px] rounded-[8px]" />
      <span className="text-[15px] font-medium tracking-[-0.01em] text-white/90">EventLighter</span>
    </a>
  )
}

function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const item = (code: Lang, href: string) => (
    <a
      href={href}
      hrefLang={code}
      lang={code}
      aria-current={lang === code ? 'page' : undefined}
      className={`rounded-full px-3 py-1.5 text-[12px] font-medium tracking-[0.08em] transition-colors ${
        lang === code ? 'bg-white/10 text-white' : 'text-white/45 hover:text-white/80'
      }`}
    >
      {code.toUpperCase()}
    </a>
  )
  return (
    <nav
      aria-label={label}
      className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur"
    >
      {item('en', '/')}
      {item('pl', '/pl/')}
    </nav>
  )
}

export default function App({ lang }: { lang: Lang }) {
  const t = copy[lang]
  useReveal()

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5 sm:px-8 sm:py-7">
          <Logo />
          <LangSwitch lang={lang} label={t.langLabel} />
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 pb-10 pt-28 sm:px-8 sm:pt-36 lg:min-h-[94svh] lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-12 lg:pt-28">
            <div className="text-center lg:text-left">
              <h1
                id="hero-title"
                className="hero-in text-[clamp(2.9rem,11vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white"
              >
                {t.heroTitleLead} <span className="flame-text">{t.heroTitleAccent}</span>
              </h1>
              <p
                className="hero-in mx-auto mt-7 max-w-[30rem] text-[17px] leading-relaxed text-[#EBEBF5]/60 sm:text-lg lg:mx-0"
                style={{ animationDelay: '120ms' }}
              >
                {t.heroSubtitle}
              </p>
              <div className="hero-in mt-10" style={{ animationDelay: '240ms' }}>
                <StoreBadges t={t} className="justify-center lg:justify-start" />
              </div>
            </div>

            <div className="hero-phones">
              <PhoneMockup
                screen={heroScreens.left}
                alt={t.screens[heroScreens.left.key]}
                sizes="(min-width: 1024px) 250px, 46vw"
                className="hero-phone hero-phone--left"
              />
              <PhoneMockup
                screen={heroScreens.right}
                alt={t.screens[heroScreens.right.key]}
                sizes="(min-width: 1024px) 250px, 46vw"
                className="hero-phone hero-phone--right"
              />
              <PhoneMockup
                screen={heroScreens.center}
                alt={t.screens[heroScreens.center.key]}
                sizes="(min-width: 1024px) 300px, 56vw"
                priority
                className="hero-phone hero-phone--center"
              />
            </div>
          </div>
        </section>

        {/* Preview */}
        <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24" aria-labelledby="preview-title">
          <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-8">
            <h2
              id="preview-title"
              data-reveal
              className="mx-auto max-w-[20ch] text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white"
            >
              {t.previewTitle.split(/(?<=\.)\s+/).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p
              data-reveal
              style={{ ['--d' as string]: '100ms' }}
              className="mx-auto mt-6 max-w-[34rem] text-[17px] leading-relaxed text-[#EBEBF5]/55 sm:text-lg"
            >
              {t.previewText}
            </p>
          </div>

          <ul className="gallery mt-16 sm:mt-20" aria-label={t.galleryLabel}>
            {galleryScreens.map((screen, i) => (
              <li key={screen.key} data-reveal style={{ ['--d' as string]: `${i * 90}ms` }} className="gallery-item">
                <PhoneMockup screen={screen} alt={t.screens[screen.key]} sizes="(min-width: 1024px) 214px, 220px" />
              </li>
            ))}
          </ul>
        </section>

        {/* Download */}
        <section className="relative isolate overflow-hidden pb-28 pt-12 sm:pb-36 sm:pt-20" aria-labelledby="cta-title">
          <div className="cta-glow" aria-hidden="true" />
          <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 text-center sm:px-8">
            <img
              data-reveal
              src={appIcon}
              width={88}
              height={88}
              alt=""
              loading="lazy"
              className="h-[88px] w-[88px] rounded-[22px] shadow-[0_20px_60px_-10px_rgba(244,108,36,0.45)]"
            />
            <h2
              id="cta-title"
              data-reveal
              style={{ ['--d' as string]: '80ms' }}
              className="mt-10 max-w-[18ch] text-balance text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white"
            >
              {t.ctaTitle}
            </h2>
            <div data-reveal style={{ ['--d' as string]: '160ms' }} className="mt-10">
              <StoreBadges t={t} className="justify-center" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-8 text-[13px] text-white/40 sm:flex-row sm:px-8">
          <span className="font-medium text-white/70">EventLighter</span>
          <span>© 2026 EventLighter. {t.rights}</span>
        </div>
      </footer>
    </>
  )
}

import type { ReactNode } from 'react'
import { config } from '../config'
import type { Copy } from '../i18n'

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-[26px] w-[26px] shrink-0" aria-hidden="true" fill="currentColor">
      <path d="M16.37 12.69c-.03-2.73 2.23-4.05 2.33-4.11-1.27-1.86-3.25-2.11-3.95-2.14-1.68-.17-3.28.99-4.13.99-.86 0-2.17-.97-3.56-.94-1.83.03-3.52 1.07-4.46 2.7-1.9 3.3-.49 8.19 1.37 10.87.91 1.31 1.99 2.78 3.41 2.73 1.37-.05 1.89-.88 3.54-.88 1.66 0 2.12.88 3.57.86 1.47-.03 2.4-1.33 3.3-2.65 1.04-1.52 1.47-3 1.49-3.07-.03-.02-2.86-1.1-2.91-4.36zM13.66 4.67c.75-.91 1.26-2.18 1.12-3.44-1.08.04-2.39.72-3.17 1.63-.7.8-1.31 2.09-1.15 3.33 1.21.09 2.44-.62 3.2-1.52z" />
    </svg>
  )
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 26" className="h-[25px] w-[23px] shrink-0" aria-hidden="true">
      <path fill="#00D7FE" d="M1.04.6C.79.87.64 1.28.64 1.81v22.38c0 .53.15.94.4 1.21l.07.06L13.6 12.92v-.3L1.11.54z" />
      <path fill="#FFCE00" d="m17.76 17.1-4.16-4.17v-.3l4.16-4.17.1.05 4.93 2.8c1.41.8 1.41 2.11 0 2.91l-4.93 2.8z" />
      <path fill="#FF3A44" d="M17.86 17.05 13.6 12.78 1.04 25.35c.46.49 1.23.55 2.1.06l14.72-8.36" />
      <path fill="#00F076" d="M17.86 8.51 3.14.15C2.27-.34 1.5-.28 1.04.21L13.6 12.78z" />
    </svg>
  )
}

interface BadgeProps {
  href: string
  label: string
  srExtra: string
  children: ReactNode
}

function Badge({ href, label, srExtra, children }: BadgeProps) {
  const base =
    'store-badge inline-flex h-[50px] min-w-[156px] items-center gap-2 rounded-[10px] border border-[#A6A6A6]/70 bg-black px-3.5 text-white sm:h-[54px] sm:min-w-[172px] sm:gap-2.5 sm:px-4'
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} store-badge--active`}>
        {children}
        <span className="sr-only">{label}</span>
      </a>
    )
  }
  return (
    <span className={base} role="link" aria-disabled="true" aria-label={`${label} (${srExtra})`}>
      {children}
    </span>
  )
}

export function StoreBadges({ t, className = '' }: { t: Copy; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2.5 sm:gap-3 ${className}`}>
      <Badge href={config.appStoreUrl} label={`${t.appStore.top} ${t.appStore.label}`} srExtra={t.comingSoon}>
        <AppleLogo />
        <span className="flex flex-col leading-none" aria-hidden="true">
          <span className="text-[11px] font-medium tracking-[0.01em]">{t.appStore.top}</span>
          <span className="mt-[3px] text-[20px] font-semibold sm:text-[22px] tracking-[-0.02em]">
            {t.appStore.label}
          </span>
        </span>
      </Badge>
      <Badge href={config.googlePlayUrl} label={`${t.googlePlay.top} ${t.googlePlay.label}`} srExtra={t.comingSoon}>
        <PlayLogo />
        <span className="flex flex-col leading-none" aria-hidden="true">
          <span className="text-[10px] font-medium tracking-[0.06em]">{t.googlePlay.top}</span>
          <span className="mt-[3px] text-[19px] font-medium sm:text-[21px] tracking-[-0.01em]">
            {t.googlePlay.label}
          </span>
        </span>
      </Badge>
    </div>
  )
}

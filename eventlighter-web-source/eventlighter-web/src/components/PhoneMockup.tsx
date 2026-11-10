import type { Screen } from '../data/screens'

interface Props {
  screen: Screen
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}

export function PhoneMockup({ screen, alt, sizes, priority = false, className = '' }: Props) {
  return (
    <figure className={`phone ${className}`}>
      <span className="phone-btn phone-btn--action" aria-hidden="true" />
      <span className="phone-btn phone-btn--vol-up" aria-hidden="true" />
      <span className="phone-btn phone-btn--vol-down" aria-hidden="true" />
      <span className="phone-btn phone-btn--power" aria-hidden="true" />
      <div className="phone-screen">
        <img
          src={screen.large}
          srcSet={`${screen.small} 420w, ${screen.large} 750w`}
          sizes={sizes}
          width={375}
          height={812}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          draggable={false}
        />
        <span className="phone-island" aria-hidden="true" />
      </div>
    </figure>
  )
}

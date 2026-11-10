export type Lang = 'en' | 'pl'

export type ScreenKey =
  'splash' | 'ironflame' | 'quickflick' | 'campfire' | 'blaziLocked' | 'match' | 'blaziUnlocked' | 'preferences'

export interface Copy {
  heroTitleLead: string
  heroTitleAccent: string
  heroSubtitle: string
  previewTitle: string
  previewText: string
  ctaTitle: string
  rights: string
  comingSoon: string
  appStore: { top: string; label: string }
  googlePlay: { top: string; label: string }
  galleryLabel: string
  langLabel: string
  screens: Record<ScreenKey, string>
}

export const copy: Record<Lang, Copy> = {
  en: {
    heroTitleLead: 'Light up the',
    heroTitleAccent: 'moment.',
    heroSubtitle:
      'Turn your phone into a realistic lighter, candle or glowing light effect. Perfect for concerts, celebrations and unforgettable moments.',
    previewTitle: 'A little light. A big atmosphere.',
    previewText: 'From concerts to celebrations, bring your favorite light effects wherever you go.',
    ctaTitle: 'Your light is just a tap away.',
    rights: 'All rights reserved.',
    comingSoon: 'coming soon',
    appStore: { top: 'Download on the', label: 'App Store' },
    googlePlay: { top: 'GET IT ON', label: 'Google Play' },
    galleryLabel: 'EventLighter app screens',
    langLabel: 'Language',
    screens: {
      splash: 'EventLighter start screen with the Light Up the Moment slogan',
      ironflame: 'IronFlame, a metal lighter effect',
      quickflick: 'QuickFlick, a match ignition effect',
      campfire: 'Campfire effect in full screen',
      blaziLocked: 'Blazi lighter, a Premium effect',
      match: 'Match flame in full screen',
      blaziUnlocked: 'Blazi lighter after unlocking',
      preferences: 'Preferences screen with flashlight and flame sound settings',
    },
  },
  pl: {
    heroTitleLead: 'Rozświetl tę',
    heroTitleAccent: 'chwilę.',
    heroSubtitle:
      'Zamień telefon w realistyczną zapalniczkę, świecę albo efekt świetlny. Sprawdzi się na koncertach, uroczystościach i w chwilach, które chcesz zapamiętać.',
    previewTitle: 'Małe światło. Wielki klimat.',
    previewText: 'Od koncertów po rodzinne uroczystości, ulubione efekty świetlne zawsze masz przy sobie.',
    ctaTitle: 'Twoje światło jest na wyciągnięcie ręki.',
    rights: 'Wszelkie prawa zastrzeżone.',
    comingSoon: 'wkrótce',
    appStore: { top: 'Pobierz w', label: 'App Store' },
    googlePlay: { top: 'POBIERZ Z', label: 'Google Play' },
    galleryLabel: 'Ekrany aplikacji EventLighter',
    langLabel: 'Język',
    screens: {
      splash: 'Ekran startowy EventLighter z hasłem Light Up the Moment',
      ironflame: 'IronFlame, efekt metalowej zapalniczki',
      quickflick: 'QuickFlick, efekt zapalanej zapałki',
      campfire: 'Efekt ogniska na pełnym ekranie',
      blaziLocked: 'Zapalniczka Blazi, efekt Premium',
      match: 'Płomień zapałki na pełnym ekranie',
      blaziUnlocked: 'Zapalniczka Blazi po odblokowaniu',
      preferences: 'Ekran preferencji z ustawieniami latarki i dźwięku płomienia',
    },
  },
}

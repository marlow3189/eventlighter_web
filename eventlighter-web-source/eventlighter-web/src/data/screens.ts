import type { ScreenKey } from '../i18n'

import splash420 from '../assets/screens/splash-420.webp'
import splash750 from '../assets/screens/splash-750.webp'
import ironflame420 from '../assets/screens/ironflame-420.webp'
import ironflame750 from '../assets/screens/ironflame-750.webp'
import quickflick420 from '../assets/screens/quickflick-420.webp'
import quickflick750 from '../assets/screens/quickflick-750.webp'
import campfire420 from '../assets/screens/campfire-420.webp'
import campfire750 from '../assets/screens/campfire-750.webp'
import blaziLocked420 from '../assets/screens/blazi-locked-420.webp'
import blaziLocked750 from '../assets/screens/blazi-locked-750.webp'
import match420 from '../assets/screens/match-420.webp'
import match750 from '../assets/screens/match-750.webp'
import blaziUnlocked420 from '../assets/screens/blazi-unlocked-420.webp'
import blaziUnlocked750 from '../assets/screens/blazi-unlocked-750.webp'
import preferences420 from '../assets/screens/preferences-420.webp'
import preferences750 from '../assets/screens/preferences-750.webp'

export interface Screen {
  key: ScreenKey
  small: string
  large: string
}

const s = (key: ScreenKey, small: string, large: string): Screen => ({ key, small, large })

export const heroScreens = {
  left: s('ironflame', ironflame420, ironflame750),
  center: s('splash', splash420, splash750),
  right: s('quickflick', quickflick420, quickflick750),
}

export const galleryScreens: Screen[] = [
  s('campfire', campfire420, campfire750),
  s('blaziLocked', blaziLocked420, blaziLocked750),
  s('match', match420, match750),
  s('blaziUnlocked', blaziUnlocked420, blaziUnlocked750),
  s('preferences', preferences420, preferences750),
]

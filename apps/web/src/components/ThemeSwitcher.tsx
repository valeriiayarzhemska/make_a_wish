import { useTranslation } from 'react-i18next';

import {
  THEME_PREFERENCES,
  useThemePreference,
  type ThemePreference,
} from '@/theme/theme.ts';

export function ThemeSwitcher() {
  const { t } = useTranslation();
  const [preference, setPreference] = useThemePreference();

  return (
    <label>
      <span className="visually-hidden">{t('theme.label')}</span>
      <select
        value={preference}
        onChange={(e) => setPreference(e.target.value as ThemePreference)}
      >
        {THEME_PREFERENCES.map((option) => (
          <option key={option} value={option}>
            {t(`theme.${option}`)}
          </option>
        ))}
      </select>
    </label>
  );
}

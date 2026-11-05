import { useTranslation } from 'react-i18next';

import { LANGUAGES, type Language } from '@/i18n/index.ts';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? 'en') as Language;

  return (
    <label className="lang-switcher">
      <span className="visually-hidden">{t('language.label')}</span>
      <select
        value={current}
        onChange={(e) => void i18n.changeLanguage(e.target.value)}
      >
        {LANGUAGES.map((lng) => (
          <option key={lng} value={lng}>
            {t(`language.${lng}`)}
          </option>
        ))}
      </select>
    </label>
  );
}

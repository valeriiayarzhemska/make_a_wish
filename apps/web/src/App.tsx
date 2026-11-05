import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/components/LanguageSwitcher.tsx';
import { ThemeSwitcher } from '@/components/ThemeSwitcher.tsx';

// Temporary placeholder until the screens from the design are built.
export default function App() {
  const { t } = useTranslation();

  return (
    <main className="container">
      <header className="header">
        <h1>{t('app.name')}</h1>
        <div className="header-controls">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </header>

      <section>
        <h2>{t('home.pasteTitle')}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="url"
            placeholder={t('home.pastePlaceholder')}
            aria-label={t('home.pasteTitle')}
          />
          <button type="submit">{t('home.fetchData')}</button>
        </form>
      </section>

      <section>
        <h2>{t('home.myWishlists')}</h2>
        <p>
          {[1, 3, 5, 21]
            .map((count) => t('wishlist.wishCount', { count }))
            .join(' · ')}
        </p>
      </section>
    </main>
  );
}

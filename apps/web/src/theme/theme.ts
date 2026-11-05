import { useEffect, useState } from 'react';

export const THEME_PREFERENCES = ['system', 'light', 'dark'] as const;
export type ThemePreference = (typeof THEME_PREFERENCES)[number];

// Same key as the inline script in index.html, which applies the theme
// before React loads so the page never flashes the wrong colors.
const STORAGE_KEY = 'theme';

function isPreference(value: unknown): value is ThemePreference {
  return THEME_PREFERENCES.includes(value as ThemePreference);
}

function readPreference(): ThemePreference {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    return isPreference(saved) ? saved : 'system';
  } catch {
    return 'system';
  }
}

function applyPreference(preference: ThemePreference) {
  const root = document.documentElement;

  if (preference === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', preference);
  }

  try {
    localStorage.setItem(STORAGE_KEY, preference);
  } catch {
    // Storage blocked (private mode): the choice lasts for this visit only.
  }
}

export function useThemePreference() {
  const [preference, setPreference] = useState<ThemePreference>(readPreference);

  useEffect(() => {
    applyPreference(preference);
  }, [preference]);

  return [preference, setPreference] as const;
}

import type { en } from './en.ts';

// Same shape as `en`, with string values. Extra keys are allowed because
// Ukrainian needs more plural forms (_few, _many) than English.
type Messages<T> = {
  [K in keyof T]: T[K] extends string ? string : Messages<T[K]>;
} & Record<string, unknown>;

export const uk: Messages<typeof en> = {
  app: {
    name: 'make a wish',
  },
  language: {
    label: 'Мова',
    en: 'English',
    uk: 'Українська',
  },
  theme: {
    label: 'Тема',
    system: 'Як у системі',
    light: 'Світла',
    dark: 'Темна',
  },
  nav: {
    myWishlists: 'Мої вішлисти',
    addWish: 'Додати бажання',
    friends: 'Друзі',
    profile: 'Профіль',
  },
  home: {
    pasteTitle: 'Вставте посилання на те, що хочете',
    pastePlaceholder: 'https://…',
    fetchData: 'Підтягнути дані',
    myWishlists: 'Мої вішлисти',
    friendsUpdated: 'Друзі оновили списки',
    iReserve: 'Я бронюю',
  },
  wishlist: {
    wishCount_one: '{{count}} бажання',
    wishCount_few: '{{count}} бажання',
    wishCount_many: '{{count}} бажань',
    wishCount_other: '{{count}} бажання',
  },
};

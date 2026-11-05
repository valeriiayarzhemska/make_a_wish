// English is the source of truth: every other locale must provide the same keys.
// Plural keys use i18next suffixes (_one, _other); see uk.ts for _few/_many.
export const en = {
  app: {
    name: 'make a wish',
  },
  language: {
    label: 'Language',
    en: 'English',
    uk: 'Українська',
  },
  theme: {
    label: 'Theme',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
  },
  nav: {
    myWishlists: 'My wishlists',
    addWish: 'Add a wish',
    friends: 'Friends',
    profile: 'Profile',
  },
  home: {
    pasteTitle: 'Paste a link to something you want',
    pastePlaceholder: 'https://…',
    fetchData: 'Fetch details',
    myWishlists: 'My wishlists',
    friendsUpdated: 'Friends updated their lists',
    iReserve: "Gifts I'm giving",
  },
  wishlist: {
    wishCount_one: '{{count}} wish',
    wishCount_other: '{{count}} wishes',
  },
};

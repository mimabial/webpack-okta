import i18n from '@/i18n';
import { LOCAL_STORAGE_KEY_LANGUAGE, LOCAL_STORAGE_KEY_DARK_THEME_ENABLED, LOCAL_STORAGE_KEY_SCROLL_OFF_NAVBAR } from './constants';

export default {
  SET_SIDEBAR_OPENED: (state, opened) => {
    state.sidebar.opened = opened;
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language;
    i18n.locale = language;
    window.localStorage.setItem(LOCAL_STORAGE_KEY_LANGUAGE, language);
  },
  SET_AUTHENTICATED: (state, authenticated) => {
    state.authenticated = authenticated;
  },
  SET_DARK_THEME: (state, darkThemeEnabled) => {
    state.darkThemeEnabled = darkThemeEnabled;
    window.localStorage.setItem(LOCAL_STORAGE_KEY_DARK_THEME_ENABLED, JSON.stringify(darkThemeEnabled));
  },
  SET_SCROLL_OFF_NAVBAR: (state, scrollOffNavbarEnabled) => {
    state.scrollOffNavbarEnabled = scrollOffNavbarEnabled;
    window.localStorage.setItem(LOCAL_STORAGE_KEY_SCROLL_OFF_NAVBAR, JSON.stringify(scrollOffNavbarEnabled));
  },
};

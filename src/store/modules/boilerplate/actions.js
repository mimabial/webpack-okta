import { LOCAL_STORAGE_KEY_LANGUAGE, LOCAL_STORAGE_KEY_DARK_THEME_ENABLED, LOCAL_STORAGE_KEY_SCROLL_OFF_NAVBAR } from './constants';

export default {
  initLocalPreference({ commit, state }) {
    const languagePreference = window.localStorage.getItem(LOCAL_STORAGE_KEY_LANGUAGE) || state.language;
    commit('SET_LANGUAGE', languagePreference);
    const darkThemeEnabledPreference = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY_DARK_THEME_ENABLED) || `${state.darkThemeEnabled}`
    );
    commit('SET_DARK_THEME', darkThemeEnabledPreference);
    const scrollOffNavbarEnabledPreference = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY_SCROLL_OFF_NAVBAR) || `${state.scrollOffNavbarEnabled}`
    );
    commit('SET_SCROLL_OFF_NAVBAR', scrollOffNavbarEnabledPreference);
  },
  toggleSideBar({ commit, state }) {
    commit('SET_SIDEBAR_OPENED', !state.sidebar.opened);
  },
  setSideBarOpened({ commit }, opened) {
    commit('SET_SIDEBAR_OPENED', opened);
  },
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language);
  },
  setAuthenticated({ commit }, authenticated) {
    commit('SET_AUTHENTICATED', authenticated);
  },
  toggleDarkTheme({ commit, state }) {
    commit('SET_DARK_THEME', !state.darkThemeEnabled);
  },
  toggleScrollOffNavbar({ commit, state }) {
    commit('SET_SCROLL_OFF_NAVBAR', !state.scrollOffNavbarEnabled);
  },
};

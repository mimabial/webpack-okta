/* State module specific to the boilerplate. Typically, there is no need to change this. */

// App module store contains all states that manage application
import locale from 'locale2';

// Mutations and Actions
import mutations from './mutations';
import actions from './actions';

const boilerplate = {
  namespaced: true,
  state: {
    sidebar: {
      opened: false,
    },
    language: locale.split('-')[0] || 'fr',
    authenticated: true,
    darkThemeEnabled: false,
    scrollOffNavbarEnabled: false,
  },
  getters: {
    sidebar: (state) => state.sidebar,
    language: (state) => state.language,
    authenticated: (state) => state.authenticated,
    darkThemeEnabled: (state) => state.darkThemeEnabled,
    scrollOffNavbarEnabled: (state) => state.scrollOffNavbarEnabled,
  },
  mutations,
  actions,
};

export default boilerplate;

<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      app
      height="58"
      fixed
      :hide-on-scroll="scrollOffNavbarEnabled"
    >
      <v-btn @click="logout()">logout</v-btn>
    </v-app-bar>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { generateMessage } from '@/utils/i18n';

export default {
  name: 'c-toolbar',

  data() {
    return {};
  },
  computed: {
    ...mapGetters({ scrollOffNavbarEnabled: 'boilerplate/scrollOffNavbarEnabled' }),
    searchQuery: {
      get() {
        return this.$store.state.global.searchQuery;
      },
      set(value) {
        this.$store.dispatch('global/searchFor', value);
      },
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('boilerplate/toggleSideBar');
    },
    setItem() {
      this.items = [
        {
          id: 'login',
          icon: 'exit_to_app',
          href: '#',
          title: 'boilerplate.logout',
          click: this.logout,
        },
        {
          id: 'theme',
          icon: 'wb_sunny',
          href: '#',
          title: this.getThemeTitle(this.darkThemeEnabled),
          click: this.toggleDarkTheme,
        },
        {
          id: 'scrollOffNavbar',
          icon: 'border_horizontal',
          href: '#',
          title: this.getScrollOffNavbarTitle(this.scrollOffNavbarEnabled),
          click: this.toggleScrollOffNavbar,
        },
      ];
    },
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    toggleDarkTheme() {
      this.$store.dispatch('boilerplate/toggleDarkTheme');
    },
    toggleScrollOffNavbar() {
      this.$store.dispatch('boilerplate/toggleScrollOffNavbar');
    },
    async logout() {
      this.$store.dispatch('global/setUser', null);
      this.$store.dispatch('boilerplate/setAuthenticated', false);
      try {
        await this.$auth.logout();
        await this.isAuthenticated();
      } catch (error) {
        // logout function do 2 things sequencely
        // at first clearing localStorage and second destroying user session on server
        // if origin are not allowed cors error will be raised
        // this leads to clearing localStorage but not destroying session
        // to fix the issue origin most be declared on the trusted oring in okta org
        // this fix are juste for not blocking vue js app
        await this.isAuthenticated();
      }
    },
    async login() {
      this.$store.dispatch('boilerplate/setAuthenticated', true);
      await this.$auth.loginRedirect('/');
      await this.isAuthenticated();
    },
    setLanguage(language) {
      this.$store.dispatch('boilerplate/setLanguage', language);
    },
    getThemeTitle(darkThemeEnabled) {
      return darkThemeEnabled ? 'boilerplate.light' : 'boilerplate.dark';
    },
    getScrollOffNavbarTitle(scrollOffNavbarEnabled) {
      return scrollOffNavbarEnabled ? 'boilerplate.scrollOffNavbarOff' : 'boilerplate.scrollOffNavbarOn';
    },
    generateMessage,
  },
};
</script>
<style scoped>
#appDrawer.drawer-menu--scroll {
  height: calc(100vh - 158px);
  overflow: auto;
}
.c-toolbar {
  width: 233px; /* aside_width - toolbar_icon_width*/
  font-size: 16px;
  height: 100%;
  padding: 6px;
}
.c-img {
  height: 40px;
  width: 58px !important;
}
.c-search {
  min-width: 350px;
}
.c-button-toolbar {
  min-width: 65px !important;
}
/* On screens that are between 720 and 600px  */
@media screen and (min-width: 600px) and (max-width: 720px) {
  .c-search {
    min-width: 280px;
  }
}
/* On screens that are between 900 and 600px  */
@media screen and (min-width: 600px) and (max-width: 850px) {
  .c-toolbar {
    width: 95px;
  }
}
</style>

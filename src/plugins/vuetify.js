import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import colors from 'vuetify/lib/util/colors';

// Definition of the theme colors
const lightColors = {
  primary: '#008CD0' /* indigo */,
  secondary: '#005288' /* bleu  */,
  accent: '#003b70' /* deep orange */,
  error: '#F44336' /* rouge */,
  info: '#00BCD4' /* cyan */,
  success: '#4CAF50' /* vert */,
  warning: '#FF9800' /* orange */,
};

const darkColors = {
  primary: '#008CD0' /* indigo */,
  secondary: '#005288' /* bleu  */,
  accent: '#003b70' /* deep orange */,
  error: '#F44336' /* rouge */,
  info: '#00BCD4' /* cyan */,
  success: '#4CAF50' /* vert */,
  warning: '#FF9800' /* orange */,
};

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  // theme: colors,
  theme: {
    themes: {
      light: lightColors,
      dark: darkColors,
    },
  },
};

export default new Vuetify(opts);

/* {
  theme: {
    themes: {
      light: colors,
      dark: colors,
    }
  }
} */

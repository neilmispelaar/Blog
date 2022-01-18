import './assets/inter/inter.css';
import './styles/index.css';
import './styles/code.css';

import DefaultLayout from './layouts/Default.vue';
import NotFound from './pages/NotFound.vue';

export default {
  // override the Layout with a wrapper component that injects the slots
  Layout: DefaultLayout,
  NotFound,
};

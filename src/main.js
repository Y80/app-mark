import Vue from 'vue';
import App from './App.vue';

import { Tag, Row, Col, Button, SwipeCell } from 'vant';
Vue.use(Tag);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(SwipeCell);


Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
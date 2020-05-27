import Vue from 'vue';
import App from './App.vue';

import { Tag, Row, Col, Button, SwipeCell, Image, Dialog, Divider } from 'vant';
Vue.use(Tag);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(SwipeCell);
Vue.use(Image);
Vue.use(Dialog);
Vue.use(Divider);


Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
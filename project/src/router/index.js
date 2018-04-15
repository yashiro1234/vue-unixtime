import Vue from 'vue'
import Router from 'vue-router'
import TimeSheet from '@/components/TimeSheet'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TimeSheet',
      component: TimeSheet
    }
  ]
})
window.addEventListener('message', e => {
  if ('production' !== process.env.NODE_ENV) {
    // console.clear();
  }
});

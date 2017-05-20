/**
 * Created by qingcheng on 17/5/20.
 */
var VueRouter = require('vue-router').default,
    top = require('./components/top'),
    content = require('./components/content'),
    router;

Vue.use(VueRouter);
router = new VueRouter({
    routes: [
        {path: '/nav', component: top},
        {path: '/table', component: content}
    ]
});
new Vue({
    el: '#app',
    router: router
});
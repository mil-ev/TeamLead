import VueRouter from 'vue-router'
import Home from './components/Home'
import Movie from './components/Movie'

export default new VueRouter({
  routes: [
    {
      path: '/',
      caseSensitive: true,
      component: Home
    },
    {
      path: '/movie',
      caseSensitive: true,
      component: Movie,
      name: 'movie'
    },
],
  mode: 'history'

})

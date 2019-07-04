import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import Story from '../components/Story'
import Footer from '../components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Header',
      component: Header
    },
    {
      path: '/abut',
      name: 'About',
      component: Header
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Footer
    }
  ]
})
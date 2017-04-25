import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import about from './components/about'
import home from './components/home'
import news from './components/news'
import messages from './components/messages'
import messageDetail from './components/message_detail'

// 声明使用VueRouter
Vue.use(VueRouter)
// 构造函数，用来创建路由器对象，来管理路由分发
var router = new VueRouter({
  linkActiveClass: 'active', // 指定当前路由链接的样式名
  history: true //去掉#!
})
// 注册路由  分发路由
router.map({
  '/about': {
    component: about
  },
  '/home': {
    component: home,
    subRoutes: {
      '/news': {
        component: news
      },
      '/message': {
        component: messages,
        subRoutes: {
          '/mdetail/:id': {
            component: messageDetail
          }
        }
      }
    }
  }
})
// 启动路由
router.start(App, '#app')
// 请求指定路由
router.go('/about')

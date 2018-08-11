import Home from './components/Home'
import Login from './components/auth/login';
import customerMain from './components/customer/customer'
import customerList from './components/customer/list'

export const routes = [{
    path: '/',
    component: Home,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/customer',
    component: customerMain,
    meta: {
      requiredAuth: true
    },
    children: [{
      path: '/',
      component: customerList
    }]
  }
]
import Home from './components/Home'
import Login from './components/auth/login';

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
  }
]
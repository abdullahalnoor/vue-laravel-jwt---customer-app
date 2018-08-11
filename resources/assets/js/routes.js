import Home from './components/Home'
import Login from './components/auth/login';
import customerMain from './components/customer/Main'
import customerList from './components/customer/List'
import newCustomer from './components/customer/New'
import viewCustomer from './components/customer/View'

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
      },
      {
        path: 'new',
        component: newCustomer
      },
      {
        path: ':id',
        component: viewCustomer
      }
    ]
  }
]
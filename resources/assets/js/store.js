import {
  getLocalUser
} from './helpers/auth';
const user = getLocalUser();
export default {
  state: {
    welecomeMessage: 'welcome my app',
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,
    customers: []
  },
  getters: {
    welcome(state) {
      return state.welecomeMessage
    },
    currentUser(state) {
      return state.currentUser
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    },
    loading(state) {
      return state.loading
    },
    authError(state) {
      return state.auth_error
    },
    customers(state) {
      return state.customers
    },
  },
  actions: {
    login(context) {
      context.commit('login')
    }
  },
  mutations: {
    login(state) {
      state.loading = true;
      state.auth_error = false
    },
    loginSuccess(state, payload) {
      state.loading = false;
      state.isLoggedIn = true;
      state.auth_error = null;
      state.currentUser = Object.assign({}, payload.user, {
        token: payload.access_token
      });
      localStorage.setItem('user', JSON.stringify(state.currentUser))
    },
    loginFailed(state, payload) {
      state.loading = false;
      state.auth_error = payload.error
    },
    logout(state) {
      localStorage.removeItem('user');
      state.currentUser = null;
      state.isLoggedIn = false
    }
  }
}
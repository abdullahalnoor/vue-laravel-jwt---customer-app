export function login(credentials) {
  return new Promise((res, rej) => {
    axios.post('/api/auth/login', credentials)
      .then(response => {
        res(response.data)
      })
      .catch(error => {
        rej('eamil or passeord is wrong')
      })
  })
}

export function getLocalUser() {
  const userStr = localStorage.getItem('user')
  if (!userStr) {
    return null;
  } else {
    return JSON.parse(userStr)
  }
}
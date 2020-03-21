export default {
  // authentication

  register: {
    path: '/api/v1/auth/register',
    method: 'POST',
  },

  currentUser: {
    path: '/api/v1/auth/user',
  },

  login: {
    path: '/api/v1/auth/login',
    method: 'POST',
  },

}

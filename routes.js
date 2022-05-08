const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello, world!';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return `Halaman tidak dapat diakses dengan method ${request.method}`;
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About page';
    },
  },
  {
    method: 'POST',
    path: '/about',
    handler: (request, h) => {
      return `Halaman tidak dapat diakses dengan method ${request.method}`;
    },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'World' } = request.params;
      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai, ${name}`;
      }

      return `Hello, ${name}!`;
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload;
      return h.response(`Welcome ${username}!`).code(201);
    },
  },
  {
    method: '*',
    path: '/budi',
    handler: (request, h) => {
      return `Halaman tidak ditemukan`;
    },
  },
];

module.exports = routes;

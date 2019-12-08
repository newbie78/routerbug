function loadComponent(name) {
  return () => import(`@/components/${name}`);
}

export default [
  {
    path: '/:lang',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '',
        name: 'home',
        component: loadComponent('Home'),
      },
      {
        path: 'about',
        name: 'about',
        component: loadComponent('About'),
      },
    ],
  },
  {
    path: '*',
    redirect: () => '/en',
  },
];

const routes = [
  {
    path: "/",
    name: <About />,
    id: 1,
  },
  {
    path: "/skills",
    name: <Skills />,
    id: 2,
  },
  {
    path: "/contact",
    name: <Contact />,
    id: 3,
  },
  {
    path: "*",
    name: <PageNotFound />,
    id: 4,
  },
];

export default routes;

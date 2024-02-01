import Skills from "../pages/Skills/Skills";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import PageNotFound from "../pages/pagenotfound/PageNotFound";
import Projects from "../pages/projects/Projects";

const routes = [
  {
    path: "/",
    element: <About />,
    id: 1,
  },
  {
    path: "/skills",
    element: <Skills />,
    id: 2,
  },
  {
    path: "/projects",
    element: <Projects />,
    id: 4,
  },
  {
    path: "/contact",
    element: <Contact />,
    id: 4,
  },
  {
    path: "*",
    element: <PageNotFound />,
    id: 5,
  },
];

export default routes;

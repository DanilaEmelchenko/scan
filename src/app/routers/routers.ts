import Authorization from '../../pages/Authorization/Authorization';
import Main from "../../pages/Main/Main";
import Search from '../../pages/Search/Search';

interface IRoute {
  path: string;
  name: string;
  component: React.FC;
}

export const routers: IRoute[] = [
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/authorization",
    name: "authorization",
    component: Authorization,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
];

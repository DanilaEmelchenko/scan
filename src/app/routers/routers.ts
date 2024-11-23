import Results from "../../module/Results/Results";
import Authorization from "../../pages/Authorization/Authorization";
import Main from "../../pages/Main/Main";
import Search from "../../pages/Search/Search";

interface IRoute {
  path: string;
  name: string;
  component: React.FC;
}

export const publicRouters: IRoute[] = [
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
];

export const privateRouters: IRoute[] = [
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/search/results",
    name: "results",
    component: Results,
  },
];

import Authorization from '../../pages/Authorization/Authorization';
import Main from "../../pages/Main/Main";

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
];

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
];

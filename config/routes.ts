import { ExRoute } from "../src/models/route";

const routes: ExRoute[] = [
  {
    path: "/",
    routes: [
      {
        path: "/",
        redirect: "/main",
      },
      {
        path: "/auth",
        Routes: [],
        component: "../layouts/auth",
        routes: [
          {
            path: "/auth",
            redirect: "/auth/login",
          },
          {
            path: "/auth/login",
            title: "title.login",
            component: "auth/login",
          },
          {
            path: "/auth/register",
            title: "title.register",
            component: "auth/login",
          },
          {
            path: "/auth/forgot",
            title: "title.forgot",
            component: "auth/login",
          },
          {
            path: "/auth/reset",
            title: "title.reset",
            component: "auth/login",
          },
        ],
      },
      {
        path: "/main",
        title: "title.main",
        Routes: [],
        component: "../layouts/main",
        routes: [
          {
            path: "/main",
            redirect: "/main/home",
          },
          {
            icon: "home",
            name: "menu.home",
            title: "title.home",
            path: "/main/home",
            component: "auth/login",
            authority: ["admin", "user"],
          },
          {
            icon: "build",
            name: "menu.firm",
            path: "/main/firm",
            authority: ["user"],
            routes: [
              {
                path: "/main/firm",
                redirect: "/main/firm/detail",
              },
              {
                hideInMenu: true,
                name: "menu.firmGuide",
                title: "title.firmGuide",
                path: "/main/firm/guide",
                component: "auth/login",
              },
              {
                name: "menu.firmDetail",
                title: "title.firmDetail",
                path: "/main/firm/detail",
                component: "auth/login",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;

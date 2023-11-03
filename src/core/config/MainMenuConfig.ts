export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  accessible?: boolean;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

export const getMainMenu = (role): Array<MenuItem> => {
  return [
    {
      accessible: true,
      pages: [
        {
          heading: "dashboard",
          route: "/dashboard",
          accessible: true,
          keenthemesIcon: "element-11",
          bootstrapIcon: "bi-app-indicator",
        },
      ],
    },
    {
      heading: "apps",
      route: "/apps",
      accessible: true,
      pages: [
        // {
        //   heading: "user",
        //   route: "/apps/user-management",
        //   accessible: "user" in role.grantedPermissions,
        //   keenthemesIcon: "people",
        //   bootstrapIcon: "bi-graph-up",
        // },
        {
          heading: "Fund",
          route: "/apps/fund-certificates",
          accessible: "setting" in role.grantedPermissions,
          keenthemesIcon: "people",
          bootstrapIcon: "bi-graph-up",
        },
        {
          heading: "Fund Information",
          route: "/apps/fund-information",
          accessible: "setting" in role.grantedPermissions,
          keenthemesIcon: "people",
          bootstrapIcon: "bi-graph-up",
          sub: [
            {
              heading: "Fund Information Detail",
              route: "/apps/fund-information/:id?",
            },
          ],
        },
        {
          heading: "Fund Declaration",
          route: "/apps/fund-declaration",
          accessible: "setting" in role.grantedPermissions,
          keenthemesIcon: "people",
          bootstrapIcon: "bi-graph-up",
        },
      ],
    },
  ];
};

export default { getMainMenu };

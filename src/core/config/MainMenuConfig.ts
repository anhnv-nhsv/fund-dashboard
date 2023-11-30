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
      heading: "apps",
      route: "/apps",
      accessible: true,
      pages: [
        {
          heading: "fund",
          route: "/apps/fund-certificates",
          accessible: true,
          keenthemesIcon: "people",
          bootstrapIcon: "bi-graph-up",
        },
        {
          heading: "fundBalance",
          route: "/apps/fund-balance",
          accessible: true,
          keenthemesIcon: "people",
          bootstrapIcon: "bi-graph-up",
        },
        {
          heading: "fundDeclaration",
          route: "/apps/fund-declaration",
          accessible: true,
          keenthemesIcon: "people",
          bootstrapIcon: "bi-graph-up",
        },
        {
          heading: "fundInformation",
          route: "/apps/fund-information",
          accessible: true,
          keenthemesIcon: "people",
          bootstrapIcon: "bi-graph-up",
        },
      ],
    },
  ];
};

export default { getMainMenu };

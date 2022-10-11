import BaseLayout from "./BaseLayout";
import LayoutOne from "./LayoutOne";
import LayoutTopBanner from "./LayoutTopBanner";

const layouts = [BaseLayout, LayoutOne, LayoutTopBanner];

export const getLayoutById = (id: number) => {
  if (typeof id === "undefined" || !layouts[id]) {
    return BaseLayout;
  }

  return layouts[id];
};

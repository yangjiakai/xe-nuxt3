

import menuUI from "./menus/ui.menu";
import menuAuth from "./menus/auth.menu";
import menuWidget from "./menus/widget.menu";
import menuServices from "./menus/services.menu";
import menuChart from "./menus/chart.menu";


export default {
  menu: [
    {
      text: "",
      items: [
        {

          text: "Dashboard",
          link: "/",
          icon: "solar:widget-line-duotone",
        },
      ],
    },


    {
      text: "UI ",
      items: menuUI,
    },
    {
      text: "Auth ",
      items: menuAuth,
    },
    {
      text: "Chart",
      items: menuChart,
    },
    {
      text: "Services",
      items: menuServices
    }
  ],
};

import { lazy, ComponentType, LazyExoticComponent } from "react";

interface Route {
  leftMenu: boolean;
  path: string;
  title: string;
  Icon: LazyExoticComponent<ComponentType<any>>;
  Page: LazyExoticComponent<ComponentType<any>>;
  // Loader: ComponentType<any>;
}

export default [
  {
    leftMenu: true,
    path: "/dashboard",
    title: "Dashboard",
    Icon: lazy(() => import("@material-ui/icons/Dashboard")),
    Page: lazy(() => import("Page/DashboardPage")),
  },
  {
    leftMenu: true,
    path: "/accounts",
    title: "Accounts",
    Icon: lazy(() => import("@material-ui/icons/AccountBalanceWallet")),
    Page: lazy(() => import("Page/AccountsPage")),
  },
  {
    leftMenu: true,
    path: "/bills",
    title: "Bills",
    Icon: lazy(() => import("@material-ui/icons/Receipt")),
    Page: lazy(() => import("Page/BillsPage")),
  },
  {
    leftMenu: true,
    path: "/analytics",
    title: "Analytics",
    Icon: lazy(() => import("@material-ui/icons/Assessment")),
    Page: lazy(() => import("Page/AnalyticsPage")),
  },
  {
    leftMenu: true,
    path: "/settings",
    title: "Settings",
    Icon: lazy(() => import("@material-ui/icons/Settings")),
    Page: lazy(() => import("Page/SettingsPage")),
  },
] as Route[];

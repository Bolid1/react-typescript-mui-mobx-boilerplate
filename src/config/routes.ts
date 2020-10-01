import { lazy, ComponentType, LazyExoticComponent } from "react";

interface Route {
  path: string;
  exact?: boolean;
  title: string;
  Page: LazyExoticComponent<ComponentType<any>>;
  // Loader: ComponentType<any>;

  // Left Menu
  hideLeftMenu?: boolean;
  leftMenu: number;
  Icon: LazyExoticComponent<ComponentType<any>>;

  // Top Menu
  hideTopMenu?: boolean;
  TopMenu?: LazyExoticComponent<ComponentType<any>>;
}

export default [
  {
    path: "/",
    exact: true,
    title: "SmartChoice",
    Page: lazy(() => import("Page/WelcomePage")),
    leftMenu: 0,
    Icon: lazy(() => import("@material-ui/icons/PieChart")),
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    Page: lazy(() => import("Page/DashboardPage")),
    leftMenu: 1,
    Icon: lazy(() => import("@material-ui/icons/Dashboard")),
  },
  {
    path: "/accounts",
    title: "Accounts",
    Page: lazy(() => import("Page/AccountsPage")),
    leftMenu: 1,
    Icon: lazy(() => import("@material-ui/icons/AccountBalanceWallet")),
  },
  {
    path: "/bills",
    title: "Bills",
    Page: lazy(() => import("Page/BillsPage")),
    leftMenu: 1,
    Icon: lazy(() => import("@material-ui/icons/Receipt")),
  },
  {
    path: "/analytics",
    title: "Analytics",
    Page: lazy(() => import("Page/AnalyticsPage")),
    leftMenu: 1,
    Icon: lazy(() => import("@material-ui/icons/Assessment")),
  },
  {
    Page: lazy(() => import("Page/SettingsPage")),
    path: "/settings",
    title: "Settings",
    leftMenu: 1,
    Icon: lazy(() => import("@material-ui/icons/Settings")),
  },
] as Route[];

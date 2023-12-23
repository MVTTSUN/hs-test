import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const basicNavTree = [
  {
    key: "sidenav.basic",
    path: `${APP_PREFIX_PATH}/`,
    title: "sidenav.basic",
    icon: "",
    breadcrumb: true,
    submenu: [
      {
        key: "sidenav.basic.dashboard",
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: "sidenav.basic.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sidenav.basic.catalog",
        path: `${APP_PREFIX_PATH}/catalog`,
        title: "sidenav.basic.catalog",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "sidenav.basic.catalog.goods",
            path: `${APP_PREFIX_PATH}/catalog/goods`,
            title: "sidenav.basic.catalog.goods",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "sidenav.basic.catalog.categories",
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            title: "sidenav.basic.catalog.categories",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "sidenav.basic.catalog.collections",
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: "sidenav.basic.catalog.collections",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "sidenav.basic.catalog.combo",
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            title: "sidenav.basic.catalog.combo",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "sidenav.basic.orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "sidenav.basic.orders",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sidenav.basic.clients",
        path: `${APP_PREFIX_PATH}/clients`,
        title: "sidenav.basic.clients",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "sidenav.basic.clients.list",
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: "sidenav.basic.clients.list",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "sidenav.basic.clients.group",
            path: `${APP_PREFIX_PATH}/clients/group`,
            title: "sidenav.basic.clients.group",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "sidenav.basic.banners",
        path: `${APP_PREFIX_PATH}/banners`,
        title: "sidenav.basic.banners",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sidenav.basic.promoCodes",
        path: `${APP_PREFIX_PATH}/promoCodes`,
        title: "sidenav.basic.promoCodes",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sidenav.basic.offlinePoints",
        path: `${APP_PREFIX_PATH}/offlinePoints`,
        title: "sidenav.basic.offlinePoints",
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "sidenav.basic.addresses",
            path: `${APP_PREFIX_PATH}/addresses`,
            title: "sidenav.basic.addresses",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "sidenav.basic.geoZones",
            path: `${APP_PREFIX_PATH}/geoZones`,
            title: "sidenav.basic.geoZones",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "sidenav.basic.employees",
        path: `${APP_PREFIX_PATH}/employees`,
        title: "sidenav.basic.employees",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sidenav.basic.mailings",
        path: `${APP_PREFIX_PATH}/mailings`,
        title: "sidenav.basic.mailings",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemsNavTree = [
  {
    key: "sidenav.systemic",
    path: `${APP_PREFIX_PATH}/`,
    title: "sidenav.systemic",
    icon: "",
    breadcrumb: true,
    submenu: [
      {
        key: "sidenav.systemic.settings",
        path: `${APP_PREFIX_PATH}/settings`,
        title: "sidenav.systemic.settings",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sidenav.systemic.mobileApp",
        path: `${APP_PREFIX_PATH}/mobileApp`,
        title: "sidenav.systemic.mobileApp",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "sidenav.systemic.logs",
        path: `${APP_PREFIX_PATH}/logs`,
        title: "sidenav.systemic.logs",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...basicNavTree, ...systemsNavTree];

export default navigationConfig;

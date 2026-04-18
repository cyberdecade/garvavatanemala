export interface MegaHomeItem {
  title: string;
  link: string;
  image: string;
}

export interface SubMenuItem {
  label: string;
  link: string;
}

export interface DesktopMenuItem {
  label: string;
  type: "mega" | "submenu" | "link";
  link?: string;
  megaItems?: MegaHomeItem[];
  subMenu?: SubMenuItem[];
}

export const desktopMenuData: DesktopMenuItem[] = [
  {
    label: "Home",
    type: "link",
    link: "/",
  },
  {
    label: "About Us",
    type: "link",
    link: "/about",
  },
  {
    label: "Stay",
    type: "submenu",
    subMenu: [
      { label: "Agrotourism Stays", link: "/room" },
      { label: "BirdHouse Stays", link: "/room-details" },
    ],
  },
  {
    label: "Dining",
    type: "submenu",
    subMenu: [
      { label: "Traditional Farm Kitchen", link: "/dining#farm-kitchen" },
      { label: "Gamla Garden Cafe", link: "/dining#gamla-cafe" },
    ],
  },
  {
    label: "Experiences",
    type: "submenu",
    subMenu: [
      { label: "Nature Walks", link: "/service-details" },
      { label: "Bird Watching", link: "/service-details" },
      { label: "Barbeque & Bonfire", link: "/service-details" },
    ],
  },
  {
    label: "Gallery",
    type: "link",
    link: "/gallery",
  },
  {
    label: "Pages",
    type: "submenu",
    subMenu: [
      { label: "Service", link: "/service" },
      { label: "Service Details", link: "/service-details" },
      { label: "Pricing", link: "/pricing" },
    ],
  },
  {
    label: "Blog",
    type: "link",
    link: "/blog",
  },
  {
    label: "Contact",
    type: "link",
    link: "/contact",
  },
];

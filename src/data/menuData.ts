export interface SubMenuItem {
  label: string;
  link: string;
}

export interface MenuItem {
  label: string;
  link?: string;
  subMenu?: SubMenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Stay",
    subMenu: [
      { label: "Agrotourism Stays", link: "/room" },
      { label: "BirdHouse Stays", link: "/room-details" },
    ],
  },
  {
    label: "Dining",
    subMenu: [
      { label: "Traditional Farm Kitchen", link: "/dining#farm-kitchen" },
      { label: "Gamla Garden Cafe", link: "/dining#gamla-cafe" },
    ],
  },
  {
    label: "Experiences",
    subMenu: [
      { label: "Nature Walks", link: "/service-details" },
      { label: "Bird Watching", link: "/service-details" },
      { label: "Barbeque & Bonfire", link: "/service-details" },
    ],
  },
  {
    label: "Gallery",
    link: "/gallery",
  },
  {
    label: "Pages",
    subMenu: [
      { label: "Service", link: "/service" },
      { label: "Service Details", link: "/service-details" },
      { label: "Pricing", link: "/pricing" },
    ],
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export interface Route {
  name: string;
  route: string;
  icon: number;
  alt?: string[];
  children: Route[];
}

export const ADMIN_ROUTES: Route[] = [
  {
    name: 'Dashboard',
    route: '/admin',
    icon: 59530,
    children: [] as Route[]
  },
  {
    name: 'Equipment',
    route: '/admin/equipment',
    icon: 59964,
    children: [] as Route[]
  },
  {
    name: 'Attendance',
    route: '/admin/attendance',
    icon: 62821,
    children: [] as Route[]
  },
  {
    name: 'Sessions',
    route: '/admin/sessions',
    icon: 59404,
    children: [] as Route[]
  },
  {
    name: 'Events',
    route: '/admin/events',
    icon: 59512,
    children: [] as Route[]
  },
  {
    name: 'Orders',
    route: '/admin/orders',
    icon: 60180,
    children: [] as Route[]
  },
  {
    name: 'Users',
    route: '/admin/users',
    icon: 59375,
    children: [] as Route[]
  }
];

export const USER_ROUTES: Route[] = [
  {
    name: 'Dashboard',
    route: '/dash',
    icon: 59530,
    children: [] as Route[]
  },
  {
    name: 'Orders',
    route: '/dash/orders/cart',
    icon: 60180,
    alt: ['/dash/orders/cart', '/dash/orders/bookings'],
    children: [] as Route[]
  }
];

export const HOME_ROUTES: Route[] = [
  {
    name: 'Home',
    route: '/',
    icon: 0,
    children: []
  },
  // {
  // 	name: 'Guides',
  // 	route: '/guides',
  // 	icon: 0,
  // 	children: []
  // },
  {
    name: 'Learning Modules',
    route: '/learning-modules',
    icon: 0,
    children: []
  },
  {
    name: 'Events',
    route: '/events',
    icon: 0,
    children: []
  },
  {
    name: 'Contact',
    route: '/contact',
    icon: 0,
    children: []
  },
  {
    name: 'Archive',
    route: '/archive',
    icon: 0,
    children: []
  },
  {
    name: 'Equipments',
    route: '/equipment',
    icon: 0,
    children: []
  }
];

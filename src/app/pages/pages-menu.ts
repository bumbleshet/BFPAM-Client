import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Applications',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Applications',
        link: '/pages/layout/list',
        icon: 'file-text-outline',
      },
      {
        title: 'Applicant',
        link: '/pages/layout/list',
        icon: 'people-outline',
      },
    ],
  },
  {
    title: 'Announcements',
    icon: 'volume-mute-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Cities',
    icon: 'map-outline',
    link: '/pages/city/list',
  },
  {
    title: 'Services',
    icon: 'folder-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Email Templates',
    icon: 'email-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Certificates',
    icon: 'award-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Admin',
    icon: 'settings-outline',
    children: [
      {
        title: 'Users',
        link: '/pages/admin/user/list',
        icon: 'people-outline',
      },
      {
        title: 'User Permissions',
        link: '/pages/admin/permission/list',
        icon: 'lock-outline',
      },
    ],
  },
];

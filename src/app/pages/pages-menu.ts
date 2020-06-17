import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../auth/services/auth.service';
const authService = new AuthService();
let menuItems: NbMenuItem[];

if ((typeof(localStorage.getItem('permissions')) !== 'undefined')) {
  menuItems = [
    {
      title: 'Dashboard',
      icon : 'home-outline',
      link : '/pages/dashboard',
      home : true,
    },
    {
      title   : 'Applications',
      icon    : 'file-text-outline',
      children: [
        {
          title: 'Applications',
          link : '/pages/layout/list',
          icon : 'file-text-outline',
        },
        {
          title: 'Applicant',
          link : '/pages/layout/list',
          icon : 'people-outline',
        },
      ],
    },
    {
      title: 'Announcements',
      icon : 'volume-mute-outline',
      link : '/pages/dashboard',
    },
    {
      title: 'Cities',
      icon : 'map-outline',
      link : '/pages/city/list',
    },
    {
      title: 'Services',
      icon : 'folder-outline',
      link : '/pages/service/list',
      children: [
        {
          title : 'Requirements',
          link  : '/pages/service/requirement/list',
          icon  : 'attach-outline',
        },
      ],
    },
    {
      title: 'Email Templates',
      icon : 'email-outline',
      link : '/pages/dashboard',
    },
    {
      title: 'Certificates',
      icon : 'award-outline',
      link : '/pages/dashboard',
    },
    {
      title   : 'Admin',
      icon    : 'settings-outline',
      children: [
        {
          title : 'Users',
          link  : '/pages/admin/user/list',
          icon  : 'people-outline',
          hidden: !authService.checkPermission('USER', 'USER_VIEW'),
        },
        {
          title: 'Permissions',
          link : '/pages/admin/permission/modules',
          icon : 'lock-outline',
        },
      ],
    },
  ];
} else {
  menuItems = [];
}

export const MENU_ITEMS = menuItems;

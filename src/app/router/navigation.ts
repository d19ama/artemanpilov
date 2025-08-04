import { RouteNames } from '@/app/router/route-names';

interface Navigation {
  label: string;
  routeName: RouteNames;
}

export const navigation: Navigation[] = [
  {
    label: 'about',
    routeName: RouteNames.About,
  },
  {
    label: 'pets',
    routeName: RouteNames.Pets,
  },
  {
    label: 'experience',
    routeName: RouteNames.Experience,
  },
];

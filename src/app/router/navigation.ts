import { RouteNames } from '@/app/router/route-names';

interface Navigation {
  label: string;
  routeName: RouteNames;
}

export const navigation: Record<RouteNames, Navigation> = {
  Home: {
    label: 'main',
    routeName: RouteNames.Home,
  },
  About: {
    label: 'about',
    routeName: RouteNames.About,
  },
  Pets: {
    label: 'pets',
    routeName: RouteNames.Pets,
  },
  Experience: {
    label: 'experience',
    routeName: RouteNames.Experience,
  },
};

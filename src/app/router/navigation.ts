import { RouteNames } from '@/app/router/route-names';

interface Navigation {
  label: string;
  routeName: RouteNames;
}

export const navigation: Navigation[] = [
  {
    label: 'кратко',
    routeName: RouteNames.About,
  },
  {
    label: 'проекты',
    routeName: RouteNames.PetProjects,
  },
  {
    label: 'опыт',
    routeName: RouteNames.Experience,
  },
  // {
  //   label: 'creation',
  //   routeName: RouteNames.Creation,
  // },
];

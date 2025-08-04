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
    label: 'pet_projects',
    routeName: RouteNames.PetProjects,
  },
  {
    label: 'experience',
    routeName: RouteNames.Experience,
  },
  {
    label: 'creation',
    routeName: RouteNames.Creation,
  },
];

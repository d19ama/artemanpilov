export type AppListTags = 'ul' | 'ol';

export interface AppListItemProps {
  tag?: AppListTags;
  noMarkers?: boolean;
}

export interface AppListItemType {
  id: string;
  label: string;
}

export interface AppListProps
  extends AppListItemProps {
  items?: AppListItemType[];
}

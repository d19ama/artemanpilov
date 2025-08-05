export type AppTitleWeight = 'bold' | 'normal';

export type AppTitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface AppTitleProps {
  text?: string;
  comment?: boolean;
  bordered?: boolean;
  uppercase?: boolean;
  tag?: AppTitleTags;
  weight?: AppTitleWeight;
}

export interface AppTitleSlots {
  default: [];
}

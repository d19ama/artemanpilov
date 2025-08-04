export interface AppLinkProps {
  url?: string;
  prevent?: boolean;
  underline?: boolean;
  hover?: AppLinkHover;
  target?: AppLinkTarget;
}

export interface AppLinkEmits {
  click: [event: Event];
}

export type AppLinkHover = 'red' | 'off';

export type AppLinkTarget = '_blank' | '_self';

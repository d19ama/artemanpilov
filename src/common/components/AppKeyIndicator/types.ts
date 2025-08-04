export interface AppKeyIndicatorProps {
  label?: string;
  value?: string;
}

export interface AppKeyIndicatorSlots {
  label: [name: AppKeyIndicatorProps['label']];
  value: [name: AppKeyIndicatorProps['value']];
}

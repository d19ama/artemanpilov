export function slotName<T>(prefix: string = 'slot', body: T): string {
  return `${prefix}-${body}`.toLowerCase();
}

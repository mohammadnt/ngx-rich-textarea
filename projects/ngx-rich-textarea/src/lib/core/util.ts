export function isNullOrUndefined(v: any) {
  return v === undefined || v === null;
}
export function isNullOrEmpty(str: string | any | undefined): boolean {
  return str === undefined || str === null || str === '';
}
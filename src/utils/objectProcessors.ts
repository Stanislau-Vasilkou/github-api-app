export const isEmptyObject = (object: Record<any, any>): boolean => {
  return Object.keys(object).length === 0
}

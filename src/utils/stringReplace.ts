export function stringReplace(template: string, values: readonly (string | number)[]): string {
  return template.replace(/\{\{(\d+)\}\}/g, (placeholder, position: string) => {
    const valueIndex = Number(position) - 1
    const value = values[valueIndex]

    return value === undefined ? placeholder : String(value)
  })
}
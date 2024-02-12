export const PreprocessData = <T extends object>(items: T[], data: Partial<T> | undefined): T[] => {
  if (!Array.isArray(items)) return items
  return items.map(item => {
    const processedItem: Partial<T> = { ...item }
    if (data) {
      for (const key in data) {
        if (item.hasOwnProperty(key)) {
          const newKey = data[key] as keyof T
          processedItem[newKey] = item[key]
          delete processedItem[key]
        }
      }
    }
    return processedItem as T
  })
}

import { TimeLineDataStucture } from '@/interfaces'

export const areTimeLineDataEqual = (
  arr1: TimeLineDataStucture[],
  arr2: TimeLineDataStucture[]
): boolean => {
  if (arr1.length !== arr2.length) {
    return false
  }

  const compareObjects = (
    obj1: TimeLineDataStucture,
    obj2: TimeLineDataStucture
  ): boolean => {
    return (
      obj1.open === obj2.open &&
      obj1.date === obj2.date &&
      obj1.close === obj2.close &&
      obj1.low === obj2.low &&
      obj1.high === obj2.high
    )
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!compareObjects(arr1[i], arr2[i])) {
      return false
    }
  }
  return true
}

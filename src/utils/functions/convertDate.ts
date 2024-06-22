export const convertDate = (date: string) => {
  return date.split('').map((char) => {
    if (char === 'T') return ' at '
    if (char === 'Z') return ''
    return char
  })
}

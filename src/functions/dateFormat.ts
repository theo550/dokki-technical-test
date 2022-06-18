// Transform American date format to european date format
export default function customiseDate(date: string): string {

  const currentDate = date.split('-')

  if (currentDate[0].length === 4 && (currentDate[1].length === 2 && Number(currentDate[1]) < 13) && (currentDate[2].length === 2 && Number(currentDate[2]) < 32)) {
    return date.split('-').reverse().join('-')
  } else {
    return 'Date format does not fit, it should be yyyy/mm/dd'
  }
}

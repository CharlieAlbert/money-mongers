export default function getRandomString(
  strings: string[],
  count: number,
  excluded: string[] = []
): string[] {
  const filteredStrings = strings.filter(str => !excluded.includes(str))
  const shuffled = filteredStrings.sort(() => 0.5 - Math.random())
  return shuffled.splice(0, count)
}

export default function getRandomString(
  strings: string[],
  count: number
): string[] {
  const shuffled = strings.sort(() => 0.5 - Math.random())
  return shuffled.splice(0, count)
}

export default function RandomLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h2>This is the random list of members with the winning vouchers:</h2>
      <div>{children}</div>
    </div>
  )
}

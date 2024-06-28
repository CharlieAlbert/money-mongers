export default function RandomLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='m-2'>
      <h2>This is the random list of members with the winning vouchers:</h2>
      <div>{children}</div>
    </div>
  )
}

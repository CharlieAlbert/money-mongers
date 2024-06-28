export default function Mti() {
  const strings = [
    'Davis',
    'Charles',
    'Ryan',
    'Alvin',
    'Lebu',
    'Sherryl',
    'Shalon',
    'Lorraine',
    'Gracious'
  ]
  return (
    <div className='container'>
      <h2>The following is a list of the esteem members of Money Mongers:</h2>
      <ul>
        {strings.map((name, i) => (
          <li key={i}>
            {i + 1}. {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

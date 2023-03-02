import React, { memo } from 'react'

function Header({increment}) {
  console.log('Heade component re-render')
  return (
    <div>
      Header
        <button onClick={increment}>Arttır</button>
    </div>
  )
}

export default memo(Header) // useCallback kullanırken metodu yolladığı copmonenti memo nun sarmalaması gerekiyor
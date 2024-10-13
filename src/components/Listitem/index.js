import React from 'react'

const Listitem = ({data, onDelate}) => {

    const {name} = data

  return (
    <div className='listitem'>
    <div className='decor'></div>
    <div>{name}</div>
    <button onClick={onDelate}>Delate</button>
  </div>
  )
}

export default Listitem


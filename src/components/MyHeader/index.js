import React from 'react'

const MyHeader = () => {
  return (
    <section className='header'>
    <h2>Library</h2>
    <h4>Books for students</h4>
    <input className='search' type='text' placeholder='Search a book' name='search'></input>
    </section>
  )
}

export default MyHeader

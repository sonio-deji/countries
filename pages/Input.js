import React from 'react'

function Input({searchChange, searchValue, themeChanger}) {
 
  const submit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className={`${themeChanger && 'dark'}`}>
        <form action="">
            <input type="search"
            className='dark:bg-gray-700 bg-white dark:border-none border border-gray-400 dark:text-white p-3 rounded-sm outline-none'
            placeholder='Search for a country...'
            onChange={searchChange}
            value={searchValue}
            onSubmit={submit}
            />
        </form>
    </div>
  )
}

export default Input
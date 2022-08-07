import React from 'react';
const region = [
    {continent: 'Africa', id: 1},
    {continent: 'America', id: 2},
    {continent:' Asia', id: 3},
    {continent: 'Europe', id: 4},
    {continent: 'Oceania', id: 5},
  
  ]

function Region({ selectChange, themeChanger}) {

  return (
    <select defaultValue={'filter by region'} id="" className='dark:bg-gray-700 bg-white border border-gray-300 dark:border-none dark:text-white rounded-sm' onChange={selectChange}>
    {
      region.map(({continent, id}) =>
         (
            <option key={id} placeholder='Filter by Region' >
          {continent}
            </option>
        )
        )
    }
    <option value="filter by region " disabled className='hg'>Filter by Region</option>
</select>
  )
}

export default Region
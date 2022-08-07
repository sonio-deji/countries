import React, { useState} from 'react'
import Image from 'next/image'
import Country from './Country';

function ListedCountries(props) {
    const [modal, setmodal] = useState(false);
    const [content, setcontent] = useState({
        name: '',
        region: '',
        image: '',
        nativeName: '',
        subRegion: '',
        capital: '',
        currencies: [],
        languages: [],
        borderCountries: [],
        population: '',
        topLevelDomain:[]
      });
    
      const setClicked = () => {
        setmodal(true);
        setcontent({
            name: props.name,
            population: props.population.toLocaleString(),
            region: props.region,
            image: props.image,
            nativeName: props.nativeName,
            subRegion: props.subRegion,
            capital: props.capital,
            currencies:props.currencies? props.currencies.map(currency => (<p>{currency.name}</p>)): 'Not available',
            languages: props.languages.map(language => (<p className='pl-3 font-light'>{language.name}</p>)),
            borderCountries: props.borderCountries? props.borderCountries.map(border => (<button className='px-2 md:px-4 rounded-sm bg-gray-700'>{border}</button> )) :  <p className='pl-2'>Not available</p>,
            topLevelDomain: props.topLevelDomain.map(topdomain => (<p>{topdomain}</p>))
        })
      }
    
  return (
    <>
    <div className={`${props.themeChanger && 'dark'}`}>
    <div className={`text-black bg-gray-200 dark:bg-gray-700 dark:text-white cursor-pointer border border-gray-400 dark:border-none rounded-lg ${props.themeChanger && 'dark'}`} onClick={setClicked} >
<div >
  <Image src={props.image} layout='responsive' objectFit='cover' width='100%' height='70%' className='rounded-lg' />
</div>
<div className='p-3'>
<h1 className='font-bold pb-2'>{props.name}</h1>
<p>Population: <span className='text-gray-700 dark:text-gray-300 font-light'>{props.population.toLocaleString()}</span></p>
<p>Region:<span className='text-gray-700 dark:text-gray-300 font-light'> {props.region}</span></p>
<p>Capital: <span className='text-gray-700 dark:text-gray-300 font-light'>{props.capital}</span></p>
</div>
</div>

    </div>
    
<Country modal={modal} themeChanger={props.themeChanger} content={content} onClose={() => setmodal(false)}/>

    </>
    
  )
}

export default ListedCountries

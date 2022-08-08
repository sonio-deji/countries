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
            population: props.population?.toLocaleString(),
            region: props.region,
            image: props.image,
            nativeName: props.nativeName,
            subRegion: props.subRegion,
            capital: props.capital,
            currencies:props.currencies? props.currencies?.map((currency, i) => (<p key={i}>{currency.name}</p>)): 'Not available',
            languages: props.languages? props.languages?.map((language, i) => (<p key={i} className='pl-3 font-light'>{language.name}</p>)) : <p className='text-sm'>Not available</p>,
            borderCountries: props.borderCountries? props.borderCountries?.map((border, i) => (<button key={i} className='px-2 md:px-3 rounded-sm bg-gray-700 text-white'>{border}</button> )) :  <p className='pl-2'>Not available</p>,
            topLevelDomain: props.topLevelDomain?.map((topdomain, i) => (<p key={i}>{topdomain}</p>))
        })
      }
    
  return (
    <>
    <div className={`${props.themeChanger && 'dark'}`}>
    <div className={`text-black bg-gray-200 dark:bg-gray-700 dark:text-white cursor-pointer border border-gray-400 h-80 sm:h-fit md:h-fit lg:h-fit dark:border-none rounded-lg ${props.themeChanger && 'dark'}`} onClick={setClicked} >
<div>
  <Image alt={props.name} src={props.image} layout='responsive' objectFit='cover' width='100%' height='70%' className='rounded-lg' />
</div>
<div className='p-3'>
<h1 className='font-bold pb-2 text-center'>{props.name}</h1>
<p>Population: <span className='dark:text-gray-300 font-light text-sm'>{props.population?.toLocaleString()}</span></p>
<p>Region:<span className='dark:text-gray-300 font-light'> {props.region}</span></p>
<p>Capital: <span className='dark:text-gray-300 font-light'>{props.capital}</span></p>
</div>
</div>

    </div>
    
<Country modal={modal} themeChanger={props.themeChanger} content={content} onClose={() => setmodal(false)}/>

    </>
    
  )
}

export default ListedCountries

const BASE_URL = "https://restcountries.com/v3.1";

const getCountriesData = (info) => {
    const url = new URL(BASE_URL + '/' + info)
    url.search = new URLSearchParams(info)
    console.log(url)
}

export default getCountriesData
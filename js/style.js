const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = countries =>{
    // console.log(countries);
    const countriesHtml = countries.map(country =>getCountryHtml(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ')
}

const getCountryHtml = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCountries();
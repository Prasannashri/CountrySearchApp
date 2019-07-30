window.onload = function () {
  //In this url variable,the url from index page is stored.
    var url = document.location.href,
    //In the url,elimiating (?) and (=) and getting the value(i.e alpha3code)
        params = url.split('?')[1].split('=')[1];
        //search=url.split('?')[1].split('&')[1].split('=')[1];
    fetch('https://restcountries.eu/rest/v2/alpha/'+params)
  .then(function(response) {
    return response.json();
  })
  .then(function(countryData) {
  document.getElementById("cname").innerHTML = countryData.name;
  document.getElementById("flag").src = countryData.flag;
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("subregion").innerHTML = countryData.subregion;
  document.getElementById("timezone").innerHTML = countryData.timezones;

})
}
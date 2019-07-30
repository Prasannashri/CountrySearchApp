 
 function myfunc(keyword){
    document.getElementById("cards").innerHTML=" ";
    //fetches the response from api using Keyword entered in search
    fetch('https://restcountries.eu/rest/v2/name/'+keyword)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //response can be put in array to retrieve without refreshing of page
      var responseArray = myJson.map(obj =>{ 
       // sending alpha3code in form of url to show.html page to retrieve details for selected alpha3code
        var url="show.html?name="+obj.alpha3Code;
       document.getElementById("cards").innerHTML+='<div class="card"><a href='+url+'><img src='+obj.flag+' alt="countryFlag" style="width:100%"><div class=""><h4><b>'+obj.name+'</b></h4></div></a></div>';
        });
  });

}

var fecha = prompt("ingrese el nuevo dato");

var url = "https://api.nasa.gov/planetary/apod";
var key = "?api_key=gJ0jcjqcaEkO0uNhNGyn64S8d6XaajGiub0M4bmf";
var dateUrl = "&date="+fecha;
var urlWithKey = url+key+dateUrl;
console.log(urlWithKey);


fetch(urlWithKey)
  .then(response => { 
   console.log (response.json())
  })
  //.then(data => console.log(data)); 

 
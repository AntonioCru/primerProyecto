document.querySelector(".button").addEventListener("click",function(){

  var newDate = document.getElementById("textField").value;
  document.getElementById("dateId").innerHTML="Fecha: "+newDate;

  var url = "https://api.nasa.gov/planetary/apod";
  var key = "?api_key=gJ0jcjqcaEkO0uNhNGyn64S8d6XaajGiub0M4bmf";
  var dateUrl = "&date="+newDate;
  var urlWithKey = url+key+dateUrl;
  console.log(urlWithKey);
  
  
  
  fetch(urlWithKey)
    //.then(response => { 
     //console.log (response.json())
    //})
    //.then(data => console.log(data)); 
    .then(response =>  response.json())
    .then(data => datos(data))
    
});


function datos({date, explanation, hdurl, media_type, title, url}){

  const title1 = document.getElementById("titleId");
  title1.innerHTML = title;

  const description = document.querySelector(".explanation");
  description.innerHTML = explanation;

  const img = document.getElementById("imageId");
  const img2 = document.getElementById("bodyId");
  //const newUrl = url;
  //img.innerHTML = `src=${url}`;
  img.src = url;
 
  img2.background = url;
}




 
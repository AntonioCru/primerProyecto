


// document.querySelector("#calendarioId").addEventListener("onChange",function(){

//   fetch(urlWithKey)
//     //.then(response => { 
//      //console.log (response.json())
//     //})
//     //.then(data => console.log(data)); 
//     .then(response =>  response.json())
//     .then(data => datos(data))
    
// });


function datos({date, explanation, hdurl, media_type, title, service_version, url}){

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

  const version = document.getElementById("service_versionId");
  version.innerHTML = "Version "+service_version;

  const dateF = document.getElementById("dateId");
  dateF.innerHTML = "Date "+date;
}

const calDate = document.querySelector(".calendario");

flatpickr("#calendarioId", {onChange: function(selectedDates, dateStr, instance) {
  var url = "https://api.nasa.gov/planetary/apod";
  var key = "?api_key=gJ0jcjqcaEkO0uNhNGyn64S8d6XaajGiub0M4bmf";
  var dateUrl = "&date="+dateStr;
  var urlWithKey = url+key+dateUrl;

  fetch(urlWithKey)
    .then(response =>  response.json())
    .then(data => datos(data))
  
}});



 
window.onload = function(){
let date = new Date();

let mes = date.getMonth()+1;
let dia = date.getDate();
let año = date.getFullYear();

let dateInit = año+"-"+mes+"-"+dia;

callData(dateInit);

};


// document.querySelector("#calendarioId").addEventListener("onChange",function(){

//   fetch(urlWithKey)
//     //.then(response => { 
//      //console.log (response.json())
//     //})
//     //.then(data => console.log(data)); 
//     .then(response =>  response.json())
//     .then(data => datos(data))
    
// });

let auxDate;
function datos({date, explanation, hdurl, media_type, title, service_version, url}){

 auxDate = date;

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

const calDate = document.querySelector(".impData");



function callData(dataString){         
  var url = "https://api.nasa.gov/planetary/apod";
  var key = "?api_key=gJ0jcjqcaEkO0uNhNGyn64S8d6XaajGiub0M4bmf";
  var dateUrl = "&date="+dataString;
  var urlWithKey = url+key+dateUrl;

  fetch(urlWithKey)
  .then(response =>  response.json())
  .then(data => datos(data))

  changeDate(dataString);

  
}



function changeDate(dataString){
  calDate.textContent = dataString;
}



flatpickr("#calendarioId", {onChange: function(selectedDates, dateStr, instance) {

 callData(dateStr);
}});



 
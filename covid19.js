
var total_death=document.getElementById("total_death");
var total_case=document.getElementById("total_case");
var new_death=document.getElementById("new_death");
var new_case=document.getElementById("new_case");

var itotal_death=document.getElementById("itotal_death");
var itotal_case=document.getElementById("itotal_case");
var inew_death=document.getElementById("inew_death");
var inew_case=document.getElementById("inew_case");

window.onload = function () {
    fetch("https://api.covid19api.com/summary").then((req)=>{
    return req.json();
}).then((data)=>{
    
    total_death.innerHTML=`Total Cases<br>${data.Global.TotalDeaths}`;
    total_case.innerHTML=`Total Death<br>${data.Global.TotalConfirmed}`;
    new_death.innerHTML=`New Cases<br>${data.Global.NewDeaths}`;
    new_case.innerHTML=`New Death<br>${data.Global.NewConfirmed}`;

    itotal_death.innerHTML=`Total Cases<br>${data.Countries[76].TotalDeaths}`;
    itotal_case.innerHTML=`Total Death<br>${data.Countries[76].TotalConfirmed}`;
    inew_death.innerHTML=`New Cases<br>${data.Countries[76].NewDeaths}`;
    inew_case.innerHTML=`New Death<br>${data.Countries[76].NewConfirmed}`;


    document.getElementById('footer').innerHTML=`Last Update Time ${data.Global.Date}`;
}).catch((error)=>{
    console.log(error);
});
}




function reload(){
    total_death.innerHTML="";
    total_case.innerHTML="";
    new_death.innerHTML="";
    new_case.innerHTML="";

    itotal_death.innerHTML="";
    itotal_case.innerHTML="";
    inew_death.innerHTML="";
    inew_case.innerHTML="";
    fetch("https://api.covid19api.com/summary").then((req)=>{
    return req.json();
}).then((data)=>{

    
    total_death.innerHTML=`Total Cases<br>${data.Global.TotalDeaths}`;
    total_case.innerHTML=`Total Death<br>${data.Global.TotalConfirmed}`;
    new_death.innerHTML=`New Cases<br>${data.Global.NewDeaths}`;
    new_case.innerHTML=`New Death<br>${data.Global.NewConfirmed}`;

    itotal_death.innerHTML=`Total Cases<br>${data.Countries[76].TotalDeaths}`;
    itotal_case.innerHTML=`Total Death<br>${data.Countries[76].TotalConfirmed}`;
    inew_death.innerHTML=`New Cases<br>${data.Countries[76].NewDeaths}`;
    inew_case.innerHTML=`New Death<br>${data.Countries[76].NewConfirmed}`;

    document.getElementById('footer').innerHTML=`Last Update Time ${data.Global.Date}`;
}).catch((error)=>{
    console.log(error);
});
}

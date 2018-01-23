
var ajax=function(url,success)
{
	var ajaxRequest = new XMLHttpRequest(); 
	var handleResponse=function()
	{
		if(ajaxRequest.readyState===4)
		{
			if(ajaxRequest.status===200)
			{
		    	var data=JSON.parse(ajaxRequest.responseText);
		    	success(data); //this will call populateList
			}
		}
	}
	ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
	ajaxRequest.open('GET', url, true);
	ajaxRequest.send("test");
}


var navList;
var contentDiv;
function createHandler(country)
{
	return function(){
		contentDiv.innerHTML="<h2>"+country.name+"</h2><p>The capital city of "+country.name+" is "+country.capital+". "+country.name+" has a population of "+country.population+".</p>";
	}
}

function populateList(countries)
{
	navList=document.getElementById("nav");
	contentDiv=document.getElementById("content");

	countries.forEach(function(country){
		var newLi=document.createElement("li");
		newLi.innerHTML=country.name;
	    newLi.addEventListener("click", createHandler(country), false)
		navList.appendChild(newLi);
	})
}

function init(){
	ajax("data/countries.json",populateList);
}

init();


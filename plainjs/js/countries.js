
function ajax(url,success)
{
	const ajaxRequest = new XMLHttpRequest(); 
	function handleResponse()
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


const navList=document.getElementById("nav");
const titleH2=document.getElementById("title");
const infoP=document.getElementById("info");
function createHandler(country)
{
	return function(){
		titleH2.textContent=country.name;
		infoP.textContent=`The capital city of ${country.name} is ${country.capital}. ${country.name} has a population of ${country.population}.`;
	}
}

function populateList(countries)
{
	countries.forEach(function(country){
		var newLi=document.createElement("li");
		newLi.textContent=country.name;
	    newLi.addEventListener("click", createHandler(country), false)
		navList.appendChild(newLi);
	})
}

function init(){
	ajax("data/countries.json",populateList);
}

init();


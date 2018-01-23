$(document).ready(function(){
    $.getJSON("data/countries.json",function(countries){
        $.each(countries, function(index,country){
            var $newLi = $('<li>'+country.name+'</li>').click(function(){
                $("#content").html("<h2>"+country.name+"</h2><p>The capital city of "+country.name+" is "+country.capital+". "+country.name+" has a population of "+country.population+".</p>");
            })
            $("#nav").append($newLi);
        })
    });
});

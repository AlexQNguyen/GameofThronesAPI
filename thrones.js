var tar= "https://www.anapioficeandfire.com/api/houses/378";
var stark= "https://www.anapioficeandfire.com/api/houses/362";
var lan= "https://www.anapioficeandfire.com/api/houses/229";
var bar= "https://www.anapioficeandfire.com/api/houses/16";

$(document).on('click','#Baratheon', function(){
  $.get(bar,function(houseBar){
     Barname = houseBar.name;
     Barwords = houseBar.words;
     Bartitles = houseBar.titles;
    $('.name').html('<h3>'+"Name: " +  '</h3>'+'<p>'+Barname+'</p>');
    $('#words').html('<h3>'+"Words:  " +  '</h3>'+'<p>'+Barwords+'</p>');
    $('#titles').html('<h3>'+"Titles: " +  '</h3>'+'<p>'+Bartitles+'</p>');
  })
});

$(document).on('click','#lannister', function(){
  $.get(lan,function(houseLan){
     lanname = houseLan.name;
     lanwords = houseLan.words;
     lantitles = houseLan.titles;
    $('.name').html('<h3>'+ "Name: "+ '</h3>' + '<p>'+lanname+'</p>');
    $('#words').html('<h3>'+ "Words:  "+ '</h3>' + '<p>'+lanwords+'</p>');
    $('#titles').html('<h3>'+ "Titles: "+ '</h3>' + '<p>'+lantitles+'</p>');
  })
});

$(document).on('click','#taragaryen', function(){
  $.get(tar,function(houseTar){
     tarname = houseTar.name;
     tarwords = houseTar.words;
     tartitles = houseTar.titles;
    $('.name').html('<h3>'+ "Name: " + '</h3>'+ '<p>'+tarname+'</p>');
    $('#words').html('<h3>'+ "Words:  " + '</h3>'+ '<p>'+tarwords+'</p>');
    $('#titles').html('<h3>'+ "Titles: " + '</h3>'+ '<p>'+tartitles+'</p>');
  })
});

$(document).on('click','#stark', function(){
  $.get(stark,function(houseStark){
     starkname = houseStark.name;
     starkwords = houseStark.words;
     starktitles = houseStark.titles;
    $('.name').html('<h3>'+ "Name: " + '</h3>'+ '<p>'+starkname+'</p>');
    $('#words').html('<h3>'+ "Words: " + '</h3>'+ '<p>'+starkwords+'</p>');
    $('#titles').html('<h3>'+ "Titles: " + '</h3>'+ '<p>'+starktitles+'</p>');
  })
});

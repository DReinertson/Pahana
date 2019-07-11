//AboutPage mouseover and mouseleave events.
$('.aboutTrigger').mouseover(function(){
  $('.aboutOverlay').css({
    "opacity": "0.7"
  });
  $('.aboutTrigger').hide();
});
$('.aboutText').mouseleave(function(){
  $('.aboutTrigger').show();
  $('.aboutOverlay').css({
    'opacity':'0'
  });
});

$('.locationTrigger').mouseover(function(){
  $('.locationOverlay').css({
    "opacity": "0.7"
  });
  $('.locationTrigger').hide();
});
$('.locationText').mouseleave(function(){
  $('.locationTrigger').show();
  $('.locationOverlay').css({
    'opacity':'0'
  });
});

$('.accommodationsTrigger').mouseover(function(){
  $('.accommodationsOverlay').css({
    "opacity": "0.7"
  });
  $('.accommodationsTrigger').hide();
});
$('.accommodationsText').mouseleave(function(){
  $('.accommodationsTrigger').show();
  $('.accommodationsOverlay').css({
    'opacity':'0'
  });
});

$('.amenitiesTrigger').mouseover(function(){
  $('.amenitiesOverlay').css({
    "opacity": "0.7"
  });
  $('.amenitiesTrigger').hide();
});
$('.amenitiesText').mouseleave(function(){
  $('.amenitiesTrigger').show();
  $('.amenitiesOverlay').css({
    'opacity':'0'
  });
});

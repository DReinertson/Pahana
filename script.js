let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
};

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let x;
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');
  console.log('slides:', slides);
  console.log('dots:', dots);
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (x = 0; x < slides.length; x++){
    // slides[x].style.display = 'none';
    $(slides[x]).hide();
  }
  for (x = 0; x < dots.length; x++){
    dots[x].classList.remove('active');
  }
  console.log('slidesIndex: ', slides[slideIndex-1]);
  $(slides[slideIndex-1]).fadeIn(500);
  // slides[slideIndex-1].style.display = 'flex';
  dots[slideIndex-1].classList.add('active');
}


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

function choiceSelection(id){

}

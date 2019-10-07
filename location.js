$('.choiceContainer').hide();
$('#choiceExplore').fadeIn(200);

let image;
let text;
let choice = {
  haleakala : {
    src1 : './images/location/haleakala_crater.jpg',
    h1: 'Haleakala Crater & National Park',
    p:'This is the text for the description of what to do here. Including the tour and maybe a link to the national parks website. Give our anecdotal testimony about what is so great about this place. <br> Length: Time <br> Highlights: stuff'
  },
  hanaHwy:{
    src1 : './images/location/waterfallStock.jpg',
    h1: 'Hana Highway',
    p: 'Breakdown of how long the road is, general things about it. Need to go slow, takes the full day, some stops along the way. Maybe include something along the lines of bamboo forest, little forest foods, where to start and what is at the end. <br> Length: Time <br> Highlights: stuff'
  },
  bamboo : {
    src1 : './images/location/bamboo.jpg',
    h1 : 'Bamboo Forest',
    p : 'Location along the road to hana to get in. Understand that it can be a little dangerous during flood season and may need a guide if you want to get to the last waterfall. Total of 3 waterfalls, each one increasingly more difficult to reach. Will need waterproof things for the last one or stash your bag before you dive in. <br> Length: Time <br> Highlights: stuff'
  },
  pools : {
    src1 : './images/location/sacredPools.jpg',
    h1 : "Ohe'o Gulch and Seven Sacred Pools",
    p : 'Once in Hana, blah blah blah, talking about it and what makes it magical. <br> Length: Time <br> Highlights: stuff'
  },
  hana : {
    src1 : './images/location/Hana.jpg',
    h1 : "They City of Hana",
    p : 'Large area equipped with a couple national parks, good beaches, a local market and some good food.<br>Food reccommendations : list of food<br>Must-go shops: list of shops. <br> Activities : name of activities.'
  },
  paia : {
    src1 : './images/location/paia.jpg',
    h1 : "Pa'ia Town",
    p : 'Small quaint town with little shops, organic markets, good food and a wonderful beach.<br>Food reccommendations : list of food<br>Must-go shops: list of shops. <br> Activities : name of activities.'
  },
  makawao : {
    src1 : './images/location/makawao.jpg',
    h1 : "Makawao",
    p : 'Another small town, one of our favorite hot sauce compains (volcano spice co), good food and artsy shops. br>Food reccommendations : list of food<br>Must-go shops: list of shops. <br> Activities : name of activities.'
  },

};

$('.discoverItem').on('click', function(){
  console.log(this.id);
  console.log(this.id + 'Img');
  console.log($("#" + this.id + 'Img')[0].src);
  image = $("#" + this.id + 'Img')[0].src;
  changeLocation(this.id);
});

function changeLocation(id){
  // $('#image')[0].src = choice[id].src;
  $('#image1')[0].src = choice[id].src1;
  $('#image2')[0].src = choice[id].src2;
  $('#header')[0].innerHTML = choice[id].h1
  $('#paragraph')[0].innerHTML = choice[id].p;
};

$('.filters li').on('click', function(){
  $('.filters li').removeClass("current");
  $(this).addClass('current');
  $('.choiceContainer').fadeOut(200);
  $("#" + 'choice' + this.id).delay(200).fadeIn(200);
})

function changeTitle(text){
  $('#choiceTitle')[0].innerHTML = text;
}

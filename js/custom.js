(function($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

  });

  //nav-pills tab-pane
  $(".nav-pills li").click(function(e){
    console.log($(this).attr("id"));
    e.preventDefault();
    //get clicked element
    var pillObj = $(this);
    console.log(pillObj);
    //get id of clicked element
    var pillID = pillObj.attr("id");
    console.log(pillID);
    //remove active class
    $(".nav-pills li").removeClass("active");
    //set active class on clicked element
    pillObj.toggleClass("active");

    //get li id and trim last 4 characters
    pillObj.id = this.id.substr(0,this.id.length - 4);
    //$pill.id.substr(0,this.id.length - 4);
    console.log(pillObj.id);
    //this.id = this.id.substr(0,this.id.length - 4);
    var tabPane = "#"+pillObj.id;
    console.log(tabPane);
    //show tab-pane
    /*$(".tab-content .tab-pane").animate({height: [ "toggle", "swing" ]}, 1000, "linear", function(){
      $(".tab-content .tab-pane").removeClass("active");
      $(tabPane).addClass("active").fadeIn();
    });*/
    //.removeClass("active")

    $(".tab-content .tab-pane").slideUp().removeClass("active");
    $(tabPane).fadeIn().addClass("active");
    console.log($(tabPane).attr("class"));
  });

  $(".exp").click(function(){
    $(this).next(".exp-info").slideToggle();
    $(this).children("i").toggleClass("fa-plus-square fa-minus-square");
  });

})(jQuery);

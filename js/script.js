$(document).ready(function() {
  $("#greenmapTrigger").animatedModal({color: '#ffffff', modalTarget: 'greenmapModal'});
  $("#artistfinderTrigger").animatedModal({color: '#ffffff', modalTarget: 'artistfinderModal'});
  $("#weatherTrigger").animatedModal({color: '#ffffff', modalTarget: 'weatherModal'});
  $("#taskTrigger").animatedModal({color: '#ffffff', modalTarget: 'taskModal'});
  $("#nextexTrigger").animatedModal({color: '#ffffff', modalTarget: 'nextexModal'});
  $("#heatmappTrigger").animatedModal({color: '#ffffff', modalTarget: 'heatmappModal'});
  $("#wntTrigger").animatedModal({color: '#ffffff', modalTarget: 'wntModal'});
  $("#imdbTrigger").animatedModal({color: '#ffffff', modalTarget: 'imdbModal'});

  // Navbar links
  var sections = [];

  $('.inner-nav').each(function(index){
    sections.push($(this).attr('href'));
  });

  // Scroll listener
  window.addEventListener('scroll', function(e) {
    indicatePosition();
  });

  // Navbar click listener - Smooth scroll
  // Smooth scroll solution based on: http://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor
  $(".inner-nav").click(function(event) {
    event.preventDefault();

    var dest = 0;
    var navbar_size = 60;

    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height();
    }
    else {
      dest = $(this.hash).offset().top;
    }

    // Removes the navbar size of the destination;
    dest = dest - navbar_size;
    $('html,body').animate({scrollTop:dest}, 500, 'swing');
  });

  // Position indication reference: http://jsfiddle.net/traverso85/d2HaW/25/
  function indicatePosition() {
    // console.log(sections.length);
    for (var i = sections.length - 1; i >= 0; i--) {
      var section = sections[i];
        if ($(window).scrollTop() >= ($(section).offset().top) - 65) {
          $('.inner-nav').parent().removeClass('active');
              $('.inner-nav[href='+section+']').parent().addClass('active');
          break;
        }
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.inner-nav').parent().removeClass('active');
            $('.inner-nav:last').parent().addClass('active');
            break;
        }
    }
  }

  $(document).foundation();

  indicatePosition();
});

function switchFilter (id) {
  if ($('#f-'+id).hasClass('inactive')) {
    $('#f-'+id).removeClass('inactive');
    $('.'+id).removeClass('inactive');
  }
  else {
    $('#f-'+id).addClass('inactive');
    $('.'+id).addClass('inactive');
  }
}

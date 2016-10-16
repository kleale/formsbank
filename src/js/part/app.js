/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    // affix header
    $('.header').affix({
      /*
      offset: {
        top: 0,
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
      */
    });
    
    // search in header
    $('.searcher_js').click(function() {
      $(this).toggleClass('active');
      $('.searchbar').toggleClass('active');  
    });
    
    // expander block
    $('.list-loader').hide();
    if ($('#list-opener').height() > 50) {
      $('.list-loader').show();
      $('#list-opener').addClass('iseeyou');
    }
    $('.list-loader a').click(function() {
      $(this).toggleClass('active').html($(this).text() == 'Hide' ? 'Expand' : 'Hide');
      $('#list-opener').toggleClass('active');
    });    

    //textcutter
    (function($) {
      $.fn.clickToggle = function(func1, func2) {
          var funcs = [func1, func2];
          this.data('toggleclicked', 0);
          this.click(function() {
              var data = $(this).data();
              var tc = data.toggleclicked;
              $.proxy(funcs[tc], this)();
              data.toggleclicked = (tc + 1) % 2;
          });
          return this;
      };
    }(jQuery));

    $(".more").clickToggle(function(){
        $(this).text("less..").siblings(".complete").show();    
    }, function(){
        $(this).text("more..").siblings(".complete").hide();    
    });
    
    
    //  aftocomplete in search form example
    $('#typehead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1,
        autoSelect: true,
        source: [{ id: 1, name: 'Toronto' }, { id: 2, name: 'Montreal' }, { id: 3, name: 'New York' }, { id: 4, name: 'qwertyuiopasdfghjklzxcvbnm' }]
    });
    
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
    
    //tip
    $('.tip').tooltip();
    
    //form slider at index
    $('.f-slider ul').owlCarousel({
      loop:true,
      navigation: true,
      navigationText: ["",""],
      responsiveClass:true,
      items : 8, 
      itemsDesktop : [1000,6], 
      itemsDesktopSmall : [900,5], 
      itemsTablet: [600,3],
      itemsMobile : [400,1]
    });
    
    //page slider at doc page
    $('.doc-pages ul').owlCarousel({
      loop:false,
      navigation: true,
      navigationText: ["",""],
      responsiveClass:true,
      items : 7, 
      itemsDesktop : [1000,5], 
      itemsDesktopSmall : [900,4], 
      itemsTablet: [600,3],
      itemsMobile : [400,2]
    });
    
    //category chosen
    $(function() {
      $('.chosen-select').chosen();
      $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });
    
    //USA MAP
    
    
    
    
    
    
    // scale pdf on css3
    var maxWidth  = $('div.pdf').width();
    var maxHeight = $('div.pdf').height();

    var windowWidth = $(window).width();
    //var windowHeight = $(window).height();

    $(function() {
      var $window = $(window);
      var width = $window.width();
      //var height = $window.height();
      var scale;
      // early exit
      if(width >= maxWidth ) {
          $('div.pdf').css({'transform': ''});
          $('div.pdf').css({'-ms-transform': ''});
          $('div.pdf').css({'-webkit-transform': ''});
          $('div.pdf').css({'-o-transform': ''});
          $('.page-doc').css({ width: '', height: '' });
          return;
      }

      scale = Math.min(width/maxWidth);
      //var rscale = scale.toFixed(2);
      //scale = Math.min(width/windowWidth, height/windowHeight);
      $('div.pdf').css({'transform': 'scale(' + scale + ')'});
      $('div.pdf').css({'-ms-transform': 'scale(' + scale + ')'});
      $('div.pdf').css({'-webkit-transform': 'scale(' + scale + ')'});
      $('div.pdf').css({'-o-transform': 'scale(' + scale + ')'});

      $('div.page-doc').css({ width: maxWidth * scale, height: maxHeight * scale });
    });

    $(window).resize(function(evt) {
      var $window = $(window);
      var width = $window.width();
      //var height = $window.height();
      var scale;

      // early exit
      if(width >= maxWidth ) {
          $('div.pdf').css({'transform': ''});
          $('div.pdf').css({'-ms-transform': ''});
          $('div.pdf').css({'-webkit-transform': ''});
          $('div.pdf').css({'-o-transform': ''});
          $('.page-doc').css({ width: '', height: '' });
          return;
      }

      scale = Math.min(width/maxWidth);
      //scale = Math.min(width/windowWidth, height/windowHeight);

      $('div.pdf').css({'transform': 'scale(' + scale + ')'});
      $('div.pdf').css({'-ms-transform': 'scale(' + scale + ')'});
      $('div.pdf').css({'-webkit-transform': 'scale(' + scale + ')'});
      $('div.pdf').css({'-o-transform': 'scale(' + scale + ')'});

      $('div.page-doc').css({ width: maxWidth * scale, height: maxHeight * scale });
    });
    // end scale pdf on css3
    
    
  }); //end ready

}(jQuery));

(function($) {

  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');
    
    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });

})(jQuery);
/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    // header mobile opener
    $('.w_sub-sub-opener').click(function() {
      $(this).siblings('ul.sub').toggleClass('active');
      //$('ul.sub').removeClass('active');
    });
    
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
      itemsMobile : [400,2]
    });
    
    //page slider at doc page
    $('.doc-pages ul').owlCarousel({
      loop:false,
      navigation: true,
      navigationText: ["",""],
      responsiveClass:true,
      items : 7, 
      itemsDesktop : [1000,6], 
      itemsDesktopSmall : [900,6], 
      itemsTablet: [600,4],
      itemsMobile : [400,3]
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

      $('div.page-doc').css({ width: maxWidth * scale - 2, height: maxHeight * scale });
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

      $('div.page-doc').css({ width: maxWidth * scale - 2, height: maxHeight * scale });
    });
    // end scale pdf on css3
    
    
    // MAP INIT
    
      if ($('#vectorMap').length ) {
      // USA choosen two state selects
      $("#ctry").change(function(){
        if($("#ctry option:selected").val()=="United States"){
          $("#ifusa").show();
          $("#ifusa .chosen-select").chosen("destroy");
          $("#ifusa .chosen-select").chosen({width: "100%"}); 
        } else {
          $("#ifusa").hide();
        }
      });

      // dropdown select to button
      $(function(){
         $("#mapdrop .dropdown-menu li a").click(function(){
            $(".btn:first-child").text($(this).text());
            $(".btn:first-child").val($(this).text());
         });
      });

      // map init
      jQuery('#vmap-usa').vectorMap({
        map: 'usa_en',
        //backgroundColor: '#81c3d0',
        //borderColor: '#818181',
        //hoverColor: '#c9dfaf',
        showLabels: true,
        enableZoom: true,
        showTooltip: true,
        // click state ivent
        onRegionClick: function (element, code, region) {
          var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
          alert(message);
        }
      });

      jQuery('#vmap-asia').vectorMap({
        map: 'asia_en',
        //showLabels: true, //bugs margin ??
        enableZoom: true,
        showTooltip: true
      });
      jQuery('#vmap-europe').vectorMap({
        map: 'europe_en',
        //showLabels: true,
        enableZoom: true,
        showTooltip: true
      });
      jQuery('#vmap-australia').vectorMap({
        map: 'australia_en',
        //showLabels: true,
        enableZoom: true,
        showTooltip: true
      });
      jQuery('#vmap-africa').vectorMap({
        map: 'africa_en',
        //showLabels: true,
        enableZoom: true,
        showTooltip: true
      });
      jQuery('#vmap-northamerica').vectorMap({
        map: 'north-america_en',
        //showLabels: true,
        enableZoom: true,
        showTooltip: true
      });
      jQuery('#vmap-southamerica').vectorMap({
        map: 'south-america_en',
        //showLabels: true,
        enableZoom: true,
        showTooltip: true
      });
    }
    // end map init
    
  }); //end ready

}(jQuery));

// resposive bootstrap tabs
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

// GOOGLE SEARCH
(function() {
  var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();
/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    // swappable
    $(".swipe-area").swipe({
      swipeStatus: function (event, phase, direction, distance, duration, fingers) {
        if (phase == "move" && direction == "right") {
          $(".navbar-collapse").addClass("in");
          $(".navbar-toggle").addClass("active");
          $(".swipe-area").addClass("active");
          return false;
        }
        if (phase == "move" && direction == "left") {
          $(".navbar-collapse").removeClass("in");
          $(".navbar-toggle").removeClass("active");
          $(".swipe-area").removeClass("active");
          return false;
        }
      }
    });
    
    
    // breadcrumbs
    function toggle_ellipses() {
      var ellipses1 = $("#ellipses");
      var howlong = $("#bc1 li:hidden").length;
      if ($("#bc1 li:hidden").length > 1) {
        ellipses1.show();
        //console.log("length: " + howlong + " => show")
      } else {
        ellipses1.hide();
        //console.log("length: " + howlong + " => hide")
      }
    }
    toggle_ellipses();
    $(window).resize(function () {
      toggle_ellipses();
    });

    // header mobile opener
    $('.bc-opener').click(function () {
      $('#bc1').toggleClass('active');
      $(this).toggleClass('active');
      $(this).find('i.fa').toggleClass('fa-ellipsis-h').toggleClass('fa-chevron-left');
    });
    
    $('.navbar-toggle').click(function () {
      $(this).toggleClass('active');
      $('.swipe-area').toggleClass("active");
    });
    
    // header mobile opener
    $('.w_sub-sub-opener').click(function () {
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
    
    // upper
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height  > 100) {
          $('body').addClass('scrolled');
        }
        else{
          $('body').removeClass('scrolled');
        }
    });    
    $("a.upper").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "fast");
      return false;
    });
    
    // search in header
    $('.searcher_js').click(function () {
      $(this).toggleClass('active');
      $(this).find('i.fa').toggleClass('fa-search').toggleClass('fa-times');
      $('.searchbar').toggleClass('active');
    });
    
    //mob search
    $('#mob-show-search').click(function () {
      $(this).toggleClass('active').toggleClass('fa-times').toggleClass('fa-search');
      $('.doc-srch').toggleClass('active');
    });
    
    // expander block
    $('.list-loader').hide();
    if ($('#list-opener').height() > 50) {
      $('.list-loader').show();
      $('#list-opener').addClass('iseeyou');
    }
    $('.list-loader a').click(function () {
      $(this).toggleClass('active').html($(this).text() === 'Hide' ? 'Expand' : 'Hide');
      $('#list-opener').toggleClass('active');
    });

    //textcutter
    (function ($) {
      $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function () {
          var data = $(this).data();
          var tc = data.toggleclicked;
          $.proxy(funcs[tc], this)();
          data.toggleclicked = (tc + 1) % 2;
        });
        return this;
      };
    }(jQuery));

    $(".more").clickToggle(function () {
      $(this).text("less..").siblings(".complete").show();
    }, function () {
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
    
    $('#typehead_new_top').typeahead({
      hint: true,
      highlight: true,
      minLength: 1,
      autoSelect: true,
      source: [{ id: 1, name: 'Toronto' }, { id: 2, name: 'Montreal' }, { id: 3, name: 'New York' }, { id: 4, name: 'qwertyuiopasdfghjklzxcvbnm' }]
    });
    
/*    $('body').on('click', function (e) {
      if (!$('li.dropdown.mega-dropdown').is(e.target) 
          && $('li.dropdown.mega-dropdown').has(e.target).length === 0 
          && $('.open').has(e.target).length === 0
      ) {
          $('#typehead').typeahead('close');
      }
  });*/
    
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
    
    //tip
    $('.tip').tooltip();
    
    //form slider at index
    $('.f-slider').owlCarousel({
      loop: true,
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],      
      dots: true,
      slideBy: 3,
      responsiveClass:true,
      responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:true
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        },
        1300:{
            items:8,
            nav:true,
            loop:false
        }
      }
    });
    
   
    // DOC pages carousel
    var owl_doc = $('#doc_c');
    owl_doc.owlCarousel({
      loop: false,
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      //URLhashListener: true,
      //startPosition: 'URLHash',      
      //center:true,
      dots: false,
      slideBy: 3,
      responsiveClass:true,
      responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:true
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
      }
      //,
      //onChanged: callback
    });
    
    /*
    function callback(e) {
      var cur = e.item.index;
      $('.owl-item').removeClass('cur');
      $('.owl-item').eq(cur).addClass('cur');
    }
    */
    
    // jQuery method on
    /*
    owl_doc.on('changed.owl.carousel',function(e){
      var cur = e.item.index;
      $('.owl-item').removeClass('cur');
      $('.owl-item').eq(cur).addClass('cur');
    });
    */  

    //category chosen
    $(function () {
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

      $('div.page-doc').css({ width: maxWidth * scale - 15, height: maxHeight * scale });
    });

    $(window).resize(function (evt) {
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

      $('div.page-doc').css({ width: maxWidth * scale - 15, height: maxHeight * scale });
    });
    // end scale pdf on css3
    
    
    // MAP INIT
    
      if ($('#vectorMap').length ) {
      // USA choosen two state selects
      $("#ctry").change(function (){
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
(function ($) {
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
(function () {
  var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();
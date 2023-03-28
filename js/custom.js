

// 連續收合效果
// $(document).ready(function(){
// 	$('.start').click(function(event){
// 		$('.box2').slideUp(1000).slideDown(1000).slideUp(1000).slideDown(1000);
// 	});
// });
//
//


	// 側邊攔
	//
	// $(document).ready(function(){
	// 	$('.menu-wrapper , .overlay ').click(function(event){
	// 			$('.hamburger-menu').toggleClass('animate');
	// 		$('body').toggleClass('open');
	// 		$('.overlay').toggleClass('show');
	// 	});
	// });



	// QA下拉選單
	// $(document).ready(function(){
	// 	$('.question h3').click(function(event){
	//
	// 		$(this).toggleClass('active');
	//
	// 		$(this).parent().find('p').slideToggle();
	//
	// 		$(this).parent().siblings().find('p').slideUp();
	//
	// 		$(this).parent().siblings().find('h3').removeClass('active');
	// 	});
	// })
	//


	// top返回效果
	$(document).ready(function(){
		$('.top .arrow').click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:0},700);
			
		});
	});

$(document).ready(function(){
	 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {

      $(".tab_content").hide();
      var activeTab = $(this).attr("rel");
      $("#"+activeTab).fadeIn();

      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {

      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel");
      $("#"+d_activeTab).fadeIn();

	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");

	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });


	/* Extra class "tab_last"
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");

});


$(document).on('click', '.map-point-sm', function() {
  var show = $(this).data('show');
  $(show).removeClass("hide").siblings().addClass("hide");
});

$(document).ready(function(){
	$('.map-point-sm').click(function(event){
		$(this).addClass('active').siblings().removeClass('active');
	});
});

//
var $card = $('.card'),
    $modal = $('#modal');

$card.click(this, function(){
  var $this = $(this),
      $thisImage = $this.find( 'img' ),
      $thisTitle = $this.data( 'title' ),
      $thisBody = $this.data( 'body' ),
      $thisDate = $this.data( 'date' );

  $modal.find( '.header h2' ).html( $thisTitle );
  $modal.find( '.meta' ).html( $thisDate );
  $modal.find( '.body' ).html( $thisBody );
  $modal.find( '.image' ).css( 'background-image', 'url(' + $thisImage[0].src + ')' );

  $modal.modal();

  //alert( $this.data( 'date' ) );
} )
//
$(function () {
	$('#ebn').click(function () {
		$('html,body').animate({scrollTop: $('#e1').offset().top}, "show");
		return false;
	});
});

//


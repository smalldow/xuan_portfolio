$('a[href^="#"]').on('click',function (e) {
   var target = this.hash,
   $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top-70
   }, 900, 'swing', function () {
    window.location.hash = target;
   });
});

// 年度
function board(){
 const divBoard = document.createElement("div");
 divBoard.className = "grid-box";
 for (index in voteContentList) {
  $.each(voteContentList[index].list, function( key, val ){
     const div1 = document.createElement("div");
     div1.className = "slider-item";
 
     const desc1 = document.createElement("div");
     desc1.className = "desc";
     $( desc1 ).append( "<h2>人氣</h2><h2>"+val.hot+"</h2>" );
     
     div1.append(desc1);
 
     const imgBox = document.createElement( "div" );
     imgBox.className = "img-box";
     const pic = document.createElement( "img" );
     pic.setAttribute('src', val.img)
     imgBox.append(pic);
 
     if(val.logo!=""){
       const logoImg = document.createElement( "img" );
       logoImg.setAttribute('src', val.logo);
       logoImg.className = "img-logo";
       imgBox.append(logoImg);
     }else{
       imgBox.className = "none-bg";
     }
     div1.append(imgBox);

     const desc2 = document.createElement("div");
     desc2.className = "desc";
     $( desc2 ).append( "<p>"+val.title+"</p>"+"<p>"+val.des+"</p>" );

     div1.append(desc2);
     $(divBoard).append(div1);
   
   });
}

 $( '.boardCol' ).append( divBoard );
//   $( '#board' ).append( divClose );
 $('#board').addClass('board-open');
 
};

function closeBoard(){
   $('#board').removeClass('board-open');
   $('.grid-box').remove();
  }

// header
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > $('nav').height()) {
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	});
});

// mob header
$(".menu-toggle").on('click', function() {
   $(this).toggleClass("on");
   $('.menu-section').toggleClass("on");
   $(".navbar .mb-ul").toggleClass('hidden');
   $('body').toggleClass('overHidden');
   $('.mb-drop-ul').removeClass('drop-active');
});
$(".navbar .mb-ul .mb-li a").on('click', function() {
   $('.menu-section').removeClass("on");
   $('.menu-toggle').removeClass("on");
   $(".navbar .mb-ul").toggleClass('hidden');
   $('body').toggleClass('overHidden');
});
$('.drop-button').click(function(){
   $('.mb-drop-ul').toggleClass('drop-active');
 });
$('.drop-button .mb-drop-ul li .dislink').click(function(){
   $('.mb-drop-ul').removeClass('drop-active');
});
// 
$('.drop-button2').click(function(){
   $('.mb-drop-ul2').toggleClass('drop-active2');
 });
$('.drop-button2 .mb-drop-ul2 li .dislink').click(function(){
   $('.mb-drop-ul2').removeClass('drop-active2');
});


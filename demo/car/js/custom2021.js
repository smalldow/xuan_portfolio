$('a[href^="#"]').on('click',function (e) {
   var target = this.hash,
   $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top-70
   }, 900, 'swing', function () {
    window.location.hash = target;
   });
});

// 2021年度
function board2021(){
 const divBoard = document.createElement("div");
 divBoard.className = "grid-box";
 for (index in voteContentList2021) {
  $.each(voteContentList2021[index].list, function( key, val ){
     const div1 = document.createElement("div");
     div1.className = "slider-item";
    
     const desc3 = document.createElement("div");
     const descNo = document.createElement("div");
     div1.append(descNo);
     if(val.no==""){
      descNo.className = "no1";
      div1.append(descNo);
    }else{
      desc3.className = "desc01";
      $( desc3 ).append( "<p>"+'排名'+val.no+"</p>" );
    }

     div1.append(desc3);
     $(divBoard).append(div1);
     const desc2 = document.createElement("div");
     desc2.className = "desc";
     $( desc2 ).append( "<p>"+val.title+"</p>"+"<p>"+val.des+"</p>" );

     div1.append(desc2);
     $(divBoard).append(div1);

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
   const imgBox2 = document.createElement( "div" );
   if(val.icon!=""){
      imgBox2.className = "img-box2";
      const pic2 = document.createElement( "img" );
      pic2.setAttribute('src', val.icon)
      imgBox2.append(pic2);
      
      div1.append(imgBox2);
    }else{
      imgBox2.className = "none-bg";
    }
     const desc1 = document.createElement("div");
     desc1.className = "desc";
     $( desc1 ).append( "<h2>人氣</h2><h2>"+val.hot+"</h2>" );
     
     div1.append(desc1);
   });
}
 $( '.boardCol' ).append( divBoard );
 $('#board').addClass('board-open');
};
function closeBoard(){
   $('#board').removeClass('board-open');
   $('.grid-box').remove();
}

// 2021品牌
function logo2021(){
   const divLogo = document.createElement("div");
   divLogo.className = "grid-box";
   for (index in logoList) {
    $.each(logoList[index].list, function( key, val ){
       const div1 = document.createElement("div");
    
       const desc2 = document.createElement("div");
       desc2.className = "desc";
       $( desc2 ).append( "<p class='titleNo'>"+'排名'+val.no+"</p>" );
       $( desc2 ).append( "<p>"+val.title+"</p>" );
       $(divLogo).append(div1);
       div1.append(desc2);
      
   
       div1.append(desc2);
       if(val.no==""){
         desc2.className = "no1";
         div1.append(desc2);
     }

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
            const imgBox2 = document.createElement( "div" );
         if(val.icon!=""){
            imgBox2.className = "img-box2";
            const pic2 = document.createElement( "img" );
            pic2.setAttribute('src', val.icon)
            imgBox2.append(pic2);
            
            div1.append(imgBox2);
         }else{
            imgBox2.className = "none-bg";
         }
          div1.className = "slider-item";

       const desc1 = document.createElement("div");
       desc1.className = "desc";
       $( desc1 ).append( "<h2>人氣</h2><h2>"+val.hot+"</h2>" );
       
       div1.append(desc1);
     
     });
  }
  
   $( '.logoCol' ).append( divLogo );
   $('#logo').addClass('logo-open');
   
  };
  
function closeLogo(){
   $('#logo').removeClass('logo-open');
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


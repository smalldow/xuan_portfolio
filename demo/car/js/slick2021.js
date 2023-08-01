$(document).ready(
  function(){
    setTimeout(function() { 
      inst_api();
      slickTab2021();
      slick();
  }, 1);
    
  }
);

var tabListArr = [];
 function inst_api (){
  var items = [];
      $.each( voteContentList2021, function( key, val ) {
        tabListArr.push({name:val.name,type:key});
        items.push( "<div class='vote-tab-item' onclick='changeType("+key+")' data-key="+key+">" + val.name + "</div>" );
      });
      $('#vote-tab-layout').append(items);

      ////// slider
      $.each(voteContentList2021[1].list, function( key, val ) {
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
        const desc2p = document.createElement("div");
        $( desc2 ).append( "<p>"+val.title+"</p>"+"<p>"+val.des+"</p>" );
        div1.append(desc2);
        
        $('.slider').append(div1);

      });
      ///////List
      $.each(voteContentList2021[1].list, function( key, val ){
        const div1 = document.createElement("div");
        div1.className = "list-item";

        const desc1 = document.createElement("div");
        desc1.className = "desc-title";
          $( desc1 ).append( "<p class='titleNo'>"+'排名'+val.no+"</p>" );
          $( desc1 ).append( "<h2>人氣"+val.hot+"</h2>");
          
          div1.append(desc1);
          if(val.no==""){
            desc1.className = "no1";
            div1.append(desc1);
          }
        const imgBox2 = document.createElement( "div" );
        if(val.no==""){
          imgBox2.className = "img-box2";
          const pic2 = document.createElement( "img" );
          pic2.setAttribute('src', val.icon)
          imgBox2.append(pic2);
       
       div1.append(imgBox2);
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

        const desc2 = document.createElement("div");
        desc2.className = "desc";
        const desc2p = document.createElement("div");
         $( desc2 ).append( "<p>"+val.des+"</p><p class='carTitle1'>"+val.title+"</p>" );
        div1.append(desc2);

        $('.list-box ').append(div1);
      });
 }
 function slickTab2021 (){
    $(".slider-tab").not('.slick-initialized').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ],
      prevArrow: $('.tab-prev'),
      nextArrow: $('.tab-next'),
      focusOnSelect: true,
    });

 }

 function slick (){
  var $slider = $('.slider');
  if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
  $(".slider").not('.slick-initialized').slick({
      infinite: true,
      centerMode: true,
      centerPadding: '0px',
      dots: true,
      slidesToShow: 3,
      prevArrow: $('.slider-prev'),
      nextArrow: $('.slider-next'),
        responsive: [{ 
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          } 
        }]
    });	
  }
 } 
 // grid list  樣式切換
 function changeStyleClick(btnType){ 
  switch (btnType) {
    case 'gird':
      $('.btn-list').removeClass('btn-active');
      $('.btn-grid').addClass('btn-active');
      
      $('.slider-box').removeClass('hidden');
      $('.list-box').addClass('hidden');
      
    　break;
    case 'list':
      $('.btn-grid').removeClass('btn-active');
      $('.btn-list').addClass('btn-active');
      
      $('.list-box').removeClass('hidden');
      $('.slider-box').addClass('hidden');
    　break;
    default:
    　console.log("沒有符合的條件");
    }

    $('.slider-arrow-box').addClass('hidden');
    $('.slider').remove();
    setTimeout(function() { 
      var item1 = $('div.slick-active')[0];;
      changeType($('div.vote-tab-layout').find( item1 ).attr('data-key'));
  }, 1);
}

function tabArrowClick(num){
  setTimeout(function() { 
    var item1 = $('div.slick-active')[0];;
    changeType($('div.vote-tab-layout').find( item1 ).attr('data-key'));
}, 1);
  
}
// 類別更換
function changeType(type){
   $('.slider').remove();
   $('.slider__counter').remove();
   const divSlider = document.createElement("div");
   divSlider.className = "slider";
   $.each(voteContentList2021[type].list, function( key, val ) {
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
      imgBox.className = "img-box none-bg";
    }

    div1.append(imgBox);

    const desc2 = document.createElement("div");
    desc2.className = "desc";
    const desc2p = document.createElement("div");
    $( desc2 ).append( "<p>"+val.title+"</p>"+"<p>"+val.des+"</p>" );
    div1.append(desc2);
    $(divSlider).append(div1);
    $('.slider-box').append(divSlider)
  });
  ///////List
  $('.list-item').remove();
  $.each(voteContentList2021[type].list, function( key, val ){
    const div1 = document.createElement("div");
    div1.className = "list-item";

    const desc1 = document.createElement("div");
    desc1.className = "desc-title";
    $( desc1 ).append( "<p class='titleNo'>"+'排名'+val.no+"</p>" );
    $( desc1 ).append( "<h2>人氣"+val.hot+"</h2>");
          
    div1.append(desc1);
      if(val.no==""){
        desc1.className = "no1";
        div1.append(desc1);
    }
    const imgBox2 = document.createElement( "div" );
    if(val.no==""){
       imgBox2.className = "img-box2";
       const pic2 = document.createElement( "img" );
       pic2.setAttribute('src', val.icon)
       imgBox2.append(pic2);
       
       div1.append(imgBox2);
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
      imgBox.className = "img-box none-bg";
    }

    div1.append(imgBox);

    const desc2 = document.createElement("div");
    desc2.className = "desc";
    const desc2p = document.createElement("div");
    $( desc2 ).append( "<p>"+val.des+"</p><p class='carTitle1'>"+val.title+"</p>" );
    div1.append(desc2);

    
    $('.list-box ').append(div1);
  });
  $('.slider-arrow-box').removeClass('hidden');
  slick();
}

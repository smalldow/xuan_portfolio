// 2021年度
function boardYear(){
 const divBoard = document.createElement("div");
 divBoard.className = "grid-box";
 for (index in voteContentList2021Year) {
  $.each(voteContentList2021Year[index].list, function( key, val ){
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


function rule(){
  const divRule = document.createElement("div");
  divRule.className = "rule-box";
  
  const divClose = document.createElement("div");
  divClose.setAttribute('onclick','closeRule()')
  divClose.className = "btn-close";
  $( divClose ).append( "<i class='fas fa-times'></i><p>CLOSE</p>" );
  $( divRule ).append( divClose );
 
  $( '.ruleCol' ).append( divRule );
  $('#rule').addClass('rule-open');
  
 };
 
 function closeRule(){
    $('#rule').removeClass('rule-open');
    $('.rule-box').remove();
   }
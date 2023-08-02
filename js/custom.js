$(document).ready(function(){
	$('.top .arrow').click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:0},700);
	});
    $('.skill-button button').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
        var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
	});
    $('.card').click(this, function(){
        $('#modal').find('.header h2').html($(this).data('title'));
        $('#modal').find('.body').html($(this).data('body'));
        $('#modal').find('.image').css( 'background-image', 'url('+$(this).find('img')[0].src +')');
        $('#modal').modal();
    });
});

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
    $('#ebn').click(function () {
		$('html,body').animate({scrollTop: $('#other_work').offset().top}, "show");
		return false;
	});
    $('.card').click(this, function(){
        var $this = $(this),
            $thisImage = $this.find( 'img' ),
            $thisTitle = $this.data( 'title' ),
            $thisBody = $this.data( 'body' );
        $('#modal').find( '.header h2' ).html( $thisTitle );
        $('#modal').find( '.meta' ).html( $thisDate );
        $('#modal').find( '.body' ).html( $thisBody );
        $('#modal').find( '.image' ).css( 'background-image', 'url(' + $thisImage[0].src + ')' );
        $('#modal').modal();
    });
});

$(function(){
	//Tell Number Link
	//-----------------------------------
	var telnum = "0120-510-336";
	//-----------------------------------
	var ua = navigator.userAgent;
	if(
		(ua.indexOf('iPhone') !== -1 && ua.indexOf('iPod') == -1)
		|| (ua.indexOf('Android') !== -1 && ua.indexOf('Mobile') !== -1)
		|| ua.indexOf('BlackBerry') !== -1
		|| ua.indexOf('Windows Phone') !== -1
	){
		$('.callbtn').each(function(){
			var str = $(this).html();
			$(this).html('<a href="tel:' + telnum + '">' + str + '</a>');
		});
	}
});


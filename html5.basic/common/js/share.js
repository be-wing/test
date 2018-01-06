// JavaScript Document

// バージョンチェック
// alert($.fn.jquery);

$(function(){
	// hover　設定
	$("a img").hover(
		function(){ $(this).css('opacity', 0.5); },
		function(){ $(this).css('opacity', 1);   }
	);
	// スムーズスクロール
	$('a[href^=#]').click(function() {
      var speed = 400; // ミリ秒
	  var val = $(window).scrollTop();
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
      $('body,html').stop().animate({scrollTop:position}, speed, 'swing');
      return false;
   });
	// ナビゲーションアクティブ表示　初期化
	var naviId   = ['#section01','#section03','#container01','#container02','#container03','#section07']
	var naviName = ['menu1','menu2','menu3','menu4','menu5','menu6']	
	var naviTop =0;
	var naviBottom =0;
	var headerheight = 0
	
   //ナビゲーション固定
   var value = 0;
   $('#pageTop').fadeOut("slow");
   $(window).scroll(function() {
		value = $(this).scrollTop(); //スクロール値を取得
		
		// ナビゲーションの固定
		if(value > headerheight){
			$('#menu').css({
				'position':'fixed',
				'top':0
			});
		}else{
			$('#menu').css({
				'position':'relative'
			});
		}
		
		// ページトップの表示
		if(value > 300){
			$('#pageTop').fadeIn("slow");
		}else{
			$('#pageTop').fadeOut("slow");
		}
		
		// ナビゲーションアクティブ表示
		for(var i=0 ; i < naviId.length ; i++){			
			naviTop = parseInt($(naviId[i]).offset().top);
			naviBottom = parseInt(naviTop + $(naviId[i]).height());
			if(naviTop-headerheight < value && value < naviBottom-headerheight ){
				$('#menu .' + naviName[i] + ' a').css('background-position','center bottom');
			}else{
				$('#menu .' + naviName[i] + ' a').removeAttr('style');
			}
		}
   });
   
   
});
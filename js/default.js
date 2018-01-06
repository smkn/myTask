//コンテンツのフェードイン～ちょっと待ってフェードアウト
$('#update_box').fadeIn('slow').delay(1000).fadeOut();

//labelタグをiOSで機能させるために必要
$("label").click(function(){});

//チェックされた場合のみsubmit有効化
$('#check').click(function(){
	if($(this).prop('checked') == false){
		$('#submit_box input').attr({disabled: 'disabled', src: 'img/entry/3_off.png'});
	} else {
		$('#submit_box input').removeAttr('disabled').attr({src: 'img/entry/3_on.png'});
	}
});

//１行ずつスライドアップ
function ticker(){
	if($('#ticker_block > ul li').length<=1) return false;
	$('#ticker_block > ul li:first').slideUp(function(){
		$(this).appendTo($('#ticker_block > ul')).slideDown();
	});
}
setInterval(function(){ticker()}, 5000);

//追随するメニュー
var nav = $('#inline_nav');
var offset = nav.offset();
if(nav.length > 0){
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top) {
			nav.addClass('fixed');
			$('#cts_flow').css('padding-top', '70px');
		} else {
			nav.removeClass('fixed');
			$('#cts_flow').css('padding-top', '30px');
		}
	});
}

//少しスクロールしたらコンテンツ出現
$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('.topBtn').fadeIn(200);
	} else {
		$('.topBtn').fadeOut(200);
	}
});

//ページ内リンクやページ最上部へのするするスクロール
$('a[href^=#]').click(function(){
	var speed = 1000;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({scrollTop:position-50}, speed, "swing");
	return false;
});

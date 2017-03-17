$(document).ready(function() {
		$("#sliderShow").click(function(){
			$("#sliderRow").css({'display':'block'});
		});
		
		$("#fadeOutStart").css({'display':'block'});
		$("#fadeInHi").animate({'opacity':'1'});
		$("#fadeInFeel").delay(2000).animate({'opacity':'1'});
		$("#fadeInSeriously").delay(4000).animate({'opacity':'1'});
		$("#fadeInMind").delay(5000).animate({'opacity':'1'});
		$("#fadeOutStart").delay(8000).animate({'opacity':'0'}).qcss({'display':'none'});
		
		$("#fadeOutBored").delay(10000).qcss({'display':'block'});
		$("#fadeInStill").delay(10000).animate({'opacity':'1'});
		$("#fadeInBored").delay(12000).animate({'opacity':'1'});
		$("#fadeInShould").delay(14000).animate({'opacity':'1'});
		$("#fadeInThing").delay(16000).animate({'opacity':'1'});
		$("#fadeOutBored").delay(10000).animate({'opacity':'0'}).qcss({'display':'none'});
		
		$("#fadeOutNope").delay(22000).qcss({'display':'block'});
		$("#fadeInNo").delay(22000).animate({'opacity':'1'});
		$("#fadeInOk").delay(24000).animate({'opacity':'1'});
		$("#fadeInMade").delay(26000).animate({'opacity':'1'});
		$("#fadeOutNope").delay(10000).animate({'opacity':'0'}).qcss({'display':'none'});
	});
	
$.fn.extend({
	qcss: function(css) {
		return $(this).queue(function(next) {
			$(this).css(css);
			next();
		});
	}
});
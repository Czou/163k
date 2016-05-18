$.fn.imagesLoaded=function(callback){var $this=$(this),$images=$this.find('img').add($this.filter('img')),len=$images.length,blank='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';function triggerCallback(){callback.call($this,$images)}function imgLoaded(event){if(--len<=0&&event.target.src!==blank){setTimeout(triggerCallback);$images.unbind('load error',imgLoaded)}}if(!len){triggerCallback()}$images.bind('load error',imgLoaded).each(function(){if(this.complete||typeof this.complete==="undefined"){var src=this.src;this.src=blank;this.src=src}});return $this};

(function($){
	var mask = $('#mask');
	var pic = $('#picInner');
	$('#showPic').find('.item').click(function(e){
		e.preventDefault();
		mask.css({'height':$(document).height()+'px'}).show();
		pic.attr('src',$(this).attr('href'));
		pic.imagesLoaded(function(){
			var martop = Math.ceil(($(window).height()-pic.height())/2 + $(document).scrollTop());
			pic.css({'top':martop+'px'}).show();
		});
		
	});
	mask.click(function(){hidePic()});
	pic.click(function(){hidePic()});
	function hidePic(){
		mask.hide();
		//pic.hide();
		$('#b_main').show();
		$('#slide2').hide();
	}
})(jQuery);
$(document).ready( function () {$("form[name='inputStyle']").cssRadio();});

jQuery.fn.cssRadio = function () {
	var context = this;
	jQuery("input[type='radio'] + label", this)
		.each( function(){
			if ( jQuery(this).prev()[0].checked )
				jQuery(this).addClass("checked");
			})
		.click( function() {
			jQuery("input[type='radio'] + label", context)
				.each( function() {
					jQuery(this)
						.removeClass()
						.prev()[0].checked = false;
				});
			jQuery(this)
				.addClass("checked")
				.prev()[0].checked = true;
			})
		.prev().hide();
}
jQuery.fn.searchForm = function () {
	var context = this;
	jQuery("label:has(input[type='radio'])", this)
		.each( function(){
			if (jQuery(this).children()[0].checked)
				jQuery(this).addClass("current");
			})
		.click( function() {
			jQuery("label:has(input[type='radio'])", context)
				.each( function() {
					jQuery(this)
						.removeClass("current")
						.children()[0].checked = false;
				});
			jQuery(this)
				.addClass("current")
				.children()[0].checked = true;
			})
}
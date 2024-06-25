jQuery(document).ready(function() {

	// Настройки скролла
	jQuery('.d-carousel .carousel').jcarousel({
        scroll: 1,
		// auto: 1,
		// wrap: 'reset ' //возврат в начало
		wrap: 'circular' //по кругу
    });
    // Настройки скролла
	jQuery('.b-carousel .carousel').jcarousel({
        scroll: 4,
		auto: 4,
		// wrap: 'reset ' //возврат в начало
		wrap: 'circular' //по кругу
    });
	
	// Определение высоты по максимальному блоку
	window.onload=function(){
	   var maxHeight = 0;
	   $(".carousel > li").each(function () {
		    var h_block = parseInt($(this).height());
		    if(h_block > maxHeight) {
			   maxHeight = h_block;
		    };
	   });
	   $(".carousel > li").height(maxHeight);
	}

});

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(),{
        balloonContentBody: "Встречаемся тут",
    },{
        preset: 'islands#redDotIcon'
    });
    
    myMap.geoObjects.add(myPlacemark);
}

$(document).ready(function() {
	var showChar = 300;
	var ellipsestext = "";
	var moretext = "Читать далее";
	var lesstext = "Скрыть";
	$('.text-container__text').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span> <br><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span><img src="svg/Arrow.svg" style="margin-left:5px">';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
    });

    var photoIsHide = false;

	$('.photos__photos-container').each(function() {
        workWithPhoto(photoIsHide);
        photoIsHide = true;
    });

    $('.photos_button-show-all__caption').click(function(){
        if(photoIsHide){
            photoIsHide = false;
        }
        else{
            photoIsHide = true;
        }
        workWithPhoto(photoIsHide);
    })

    function workWithPhoto(pIS){
        $('.photos_photo-item').each(function(i,elem) {
            if(i >= 8 & $(window).width() >= '768'){
                if(pIS == false){
                    $(elem).hide().end().append();
                    $('.photos_button-show-all__caption').html("<a>Показать больше</a>")
                }
                if(pIS == true){
                    $(elem).show().end().remove();
                    console.log("1");
                    $('.photos_button-show-all__caption').html("<a>Скрыть</a>")
                }
    
            }
        });
    }

    
});







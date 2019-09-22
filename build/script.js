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


$('.photos_button-show-all').click(function(){ //переключение видимости полного списка фото
    var caption = $(this).children('.photos_button-show-all__caption');
    var arrows = $(this).children('.photos_button-show-all__arrow');
    $('.photos_photo-item').each(function(index) {//код скрытия-показа
        if (index > 7){
            $(this).toggleClass('photos_photo-item-hidden');
        }
    })
    
    caption.each(function(index){//изменение загловка кнопки
        if ($(this).text() == "Показать все фото"){
            $(this).text("Скрыть часть фото");
        }
        else{
            $(this).text("Показать все фото");
        }
    });

    arrows.each(function(){//поворачиваем направляющие на кнопке
        $(this).toggleClass('photos_button-show-all__arrow-flipped')
    })


})




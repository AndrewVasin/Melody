$(document).ready(function () {
    var currentFloor = 2;                       // переменная со значением текущего этажа
    var floorPath = $(".home-image path");      // отдельный этаж в слое SVG
    var counterUp = $(".counter-up");           // кнопка Вверх
    var counterDown = $(".counter-down");       // кнопка Вниз

    // Метод для подсвечивания этажа при наведении мышкой
    // "mouseover" - меняет значение при наведении мышкой, "click" - при выборе щелчком ЛКМ
    floorPath.on("mouseover", function() {   
        floorPath.removeClass("current-floor");             // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor');          // получаем значение активного этажа
        $(".counter").text(currentFloor);                   // записываем значение этажа в счетчик
    });

    counterUp.on("click", function() {          // обработка клика на кнопку Вверх
        if (currentFloor < 18) {
            currentFloor++;
            var usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});   // форматирование вывода с начальным нулем
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");   // Подсвечиваем текущий этаж
        }
    });

    counterDown.on("click", function() {        //  обработка клика на кнопку Вниз
        if (currentFloor > 2) {
            currentFloor--;
            var usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});   // форматирование вывода с начальным нулем
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");   // Подсвечиваем текущий этаж
        }
    });
});
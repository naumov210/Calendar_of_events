function createCalendar(myClass, year, month) {
    titleMonth.innerHTML = 'June';

    let elem = document.getElementsByClassName(myClass)[0],
        mon = month,
        d = new Date(year, mon),
        table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
        
        
    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    console.log(getDay(d));

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}


// расчёт даты для передачи в функцию создания календаря
let now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth();

// кНопки
let btnPrev = document.querySelectorAll(".btn")[0],
    btnCurrent = document.querySelectorAll(".btn")[1],
    btnNext = document.querySelectorAll(".btn")[2];

let titleMonth = document.getElementsByClassName("title")[0];


function monthTogglePrev() {
    if (btnPrev.click) {
        month = now.getMonth()-1;
        createCalendar("calendar", year, month);
        titleMonth.innerHTML = 'May';
    }
}

function monthToggleCurrent() {
    if (btnCurrent.click) {
        month = now.getMonth();
        createCalendar("calendar", year, month);
        titleMonth.innerHTML = 'June';
    }
}

function monthToggleNext() {
    if (btnNext.click) {
        month = now.getMonth()+1;
        createCalendar("calendar", year, month);
        titleMonth.innerHTML = 'July';
    }
}

btnPrev.addEventListener('click', function() {
    monthTogglePrev();
});

btnCurrent.addEventListener('click', function() {
    monthToggleCurrent();
});

btnNext.addEventListener('click', function() {
    monthToggleNext();
});

createCalendar("calendar", year, month);
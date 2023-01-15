// Скрипт написан мной 15.01.2023 "на коленке" для этого задания
// Неделя начинается с понедельника

const now = new Date(); // Полная дата сегодня
// const now = new Date(2022, 11, 14, 2, 3, 4, 567); // проверка
const year = now.getFullYear(); // Год сегодня
const month = now.getMonth(); // Месяц сегодня
const date = now.getDate(); // Дата сегодня
const day = now.getDay(); // День недели сегодня
const nameDaysWeek = [
  // Массив дней недели
  ["Пн", "Понедельник"],
  ["Вт", "Вторник"],
  ["Ср", "Среда"],
  ["Чт", "Четверг"],
  ["Пт", "Пятница"],
  ["Сб", "Суббота"],
  ["Вс", "Воскресенье"],
];
const nameMonths = [
  // Массив месяцев
  ["Январь", "Января"],
  ["Февраль", "Февраля"],
  ["Март", "Марта"],
  ["Апрель", "Апреля"],
  ["Май", "Мая"],
  ["Июнь", "Июня"],
  ["Июль", "Июля"],
  ["Август", "Августа"],
  ["Сентябрь", "Сентября"],
  ["Октябрь", "Октября"],
  ["Ноябрь", "Ноября"],
  ["Декабрь", "Декабря"],
];

const firstDayThisMonth = new Date(year, month, 1); // Устанавливаем дату первого числа текущего месяца
const firstWdayThisMonth = firstDayThisMonth.getDay(); // Вычисляем день недели первого числа текущего месяца
const quantityDaysPrevMonth =
  firstWdayThisMonth === 0 ? 6 : firstWdayThisMonth - 1; // Вычисляем сколько нужно взять дней предыдущего месяца

let numbersArr = []; // Массив дней календаря

for (let index = quantityDaysPrevMonth; index > 0; index -= 1) {
  // Заполняем массив дней календаря предыдущим месяцем
  const day = new Date(year, month, 1 - index);
  numbersArr.push({
    number: day.getDate(),
    month: "prev",
    now: false,
  });
}

const firstDayNextMonth = new Date(year, month + 1, 1); // Устанавливаем дату первого числа следущего месяца
const quantityDaysThisMonth = (firstDayNextMonth - firstDayThisMonth) / 8.64e7; // Устанавливаем количество дней этого месяца

for (let index = 0; index < quantityDaysThisMonth; index += 1) {
  // Заполняем массив дней календаря этого месяца
  const day = new Date(year, month, index + 1);
  numbersArr.push({
    number: day.getDate(),
    month: "this",
    now: date === index + 1,
  });
}

const quantityDaysNextMonth =
  7 - ((quantityDaysPrevMonth + quantityDaysThisMonth) % 7); // Вычисляем сколько нужно взять дней следующего месяца

for (let index = 0; index < quantityDaysNextMonth; index += 1) {
  // Заполняем массив дней календаря следующим месяцем
  const day = new Date(year, month + 1, index + 1);
  numbersArr.push({
    number: day.getDate(),
    month: "next",
    now: false,
  });
}

let arrNumbersArr = []; // Массив дней календаря разделенных по неделям
for (let index = 0; index < numbersArr.length; index += 7) {
  // Заполняем массив дней календаря разделенных по неделям
  arrNumbersArr.push(numbersArr.slice(index, index + 7));
}
// Создаём объект
const data = {
  now: {
    year: year,
    months: nameMonths[month],
    dayWeek: nameDaysWeek[day === 0 ? 6 : day - 1],
    date: date,
  },
  arrNumbersArr,
  nameDaysWeek,
};

export default data;
